import {
    db
} from './firebase';

// User API

export const createUser = (id, username, email) => {
    db.ref(`users/${id}`).update({
        username,
        email,
    });
    db.ref(`users/${id}`).once('value').then( snap => {
        var user = snap.val();
        if (user.type === undefined) {
            user.type = "consumer";
        }
        db.ref(`users/${id}`).set(user);
    }); 
}

export const addGame = (userID, date, time, duration, sport, location, dateCreated, numParticipants) => {
    db.ref(`users/${userID}/ratings/${sport}`).once('value').then(snap => {
        var rating = snap.val();
        var game = db.ref("games").push({
            owner: userID,
            date: date,
            time: time,
            duration: duration,
            sport: sport,
            location: location,
            dateCreated: dateCreated,
            numParticipants: numParticipants,
            rating: rating
        });
        var gameID = game.key;
        db.ref(`games/${gameID}`).update({gameID: gameID});
        db.ref(`games/${gameID}/participants/${userID}`).set(dateCreated);
        db.ref(`users/${userID}/games/${game.key}`).set(gameID);
        console.log("game added!")
    });

}

export const editGameDate = (gameID, date, time) => {
    db.ref(`games/${gameID}`).update({
        date: date,
        time: time
    });
}

export const editGameLocation = (gameID, location) => {
    db.ref(`games/${gameID}`).update({
        location: location
    });
}

export const removeGame = (gameID) => {
    db.ref("games").child(gameID).remove();
    db.ref("users").once('value').then(snap => {
        var users = snap.val();
        for (var user of Object.values(users)) {
            for (var game in user.games) {
                if (game === gameID) {
                    delete user.games[game];
                }
            }
        }
        db.ref("users").set(users);
    });
    console.log("game removed!")
}

export const joinGame = (gameID, userID, dateJoined) => {
    db.ref(`games/${gameID}/participants/${userID}`).set(dateJoined);
    db.ref(`users/${userID}/games/${gameID}`).set(gameID);
}

export const leaveGame = (gameID, userID) => {
    db.ref(`games/${gameID}/participants/${userID}`).remove();
    /*db.ref(`games`).once('value').then(snap => {
        var games = snap.val();
        delete games[gameID].participants[userID];
        console.log(games[gameID].participants);
        if (Object.keys(games[gameID].participants).length === 0) {
            delete games[gameID];
        }
        db.ref("games").set(games);
    })*/

    db.ref(`users/${userID}/games/${gameID}`).remove();
    console.log("game left!")
}

export const hasPlayed = (userID, sport) => {
    var hasPlayed = true;
    return db.ref(`users/${userID}`).once('value').then(snap => {
        var user = snap.val();
        if (user.ratings === undefined || user.ratings[sport] === undefined) {
            hasPlayed = false;
        }
        console.log(hasPlayed);
        return hasPlayed;
    });
    //console.log(hasPlayed);
    //return hasPlayed;
}

export const getUserInfo = (userID) => {
    return db.ref(`users/${userID}`).on('value').then(snap => {
        var user = snap.val();
        return user;
    });
}

export const getRating = (userID, sport) => {
    var rating = -1;
    db.ref(`users/${userID}`).once('value').then(snap => {
        var user = snap.val();
        rating = user.ratings[sport];
    });
    return rating;
}

export const setRating = (userID, sport, rating) => {
    db.ref(`users/${userID}/ratings/${sport}`).set(rating);
}

export const addToRating = (userID, sport, add) => {
    db.ref(`users/${userID}`).once('value').then(snap => {
        var user = snap.val();
        var rating = user.ratings[sport];
        db.ref(`users/${userID}/ratings/${sport}`).set(rating+add);
    });
}

export const hasTakenSurvey = (userID, gameID) => {
    var surveyTaken = true;
    db.ref(`users/${userID}/games/${gameID}`).once('value').then(snap => {
        var game = snap.val();
        if (game === 'false') {
            surveyTaken = false;
        }
    });
    return surveyTaken;
}

export const setSurveyTaken = (userID, gameID) => {
    db.ref(`users/${userID}/games/${gameID}`).set('true');
}

export const gamesRef = db.ref(`games`);

export const usersRef = db.ref(`users`);

export const ref = db.ref();

/*export const getUser = (id) =>
  console.log(db.ref('users').);*/

//export const createGame = (gameId, userID, )

export {
    db
};
