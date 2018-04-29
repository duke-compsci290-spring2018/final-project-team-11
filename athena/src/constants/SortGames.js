export const sortByDate = (games) => {
    games.sort(function (a, b) {
        return (a.date + " " + a.time).toLowerCase().localeCompare((b.date + " " + b.time).toLowerCase());
    });
    return games;
}

export const reverseSortByDate = (games) => {
    games.sort(function (a, b) {
        return (b.date + " " + b.time).toLowerCase().localeCompare((a.date + " " + a.time).toLowerCase());
    });
    return games;
}

export const sortBySport = (games) => {
    games.sort(function (a, b) {
        return a.sport.toLowerCase().localeCompare(b.sport.toLowerCase());
    });
    return games;
}

export const sortByFullness = (games) => {
    games.sort(function (a, b) {
        return (a.numParticipants - Object.keys(a.participants).length) - (b.numParticipants - Object.keys(b.participants).length)
    });
    return games;
}

