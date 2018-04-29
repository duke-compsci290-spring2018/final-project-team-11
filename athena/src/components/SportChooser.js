import React from 'react';
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from '../firebase'
import { Redirect } from 'react-router'
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';



export default class SportChooser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerInfo: {},
            sport: '',
            currsport: this.props.sport
        }
    }
    componentDidMount() {
        var self = this;
        db.usersRef.on("value", function (snap) {
            var users = snap.val();
            var info = users[self.props.userID].ratings;
            if (info === undefined) {
                info = {};
            }
            self.setState({playerInfo: info});
        });
    }

    doSport(sport, rating) {
        this.props.sportCallBack(sport);
        console.log(sport);
        this.setState({sport: sport});
        //<Redirect to={routes.GAME_SIGN_UP}/>
    }


    render() {
        if (this.props.sport !== '' && (this.state.playerInfo === undefined)) {
            return (<Redirect to={routes.INITIAL_SPORT_SURVEY}/>);
        }

        else if (this.props.userID !== null) {
            return (
                <Card>
                    <Card     style={{marginLeft: 'auto',marginRight: 'auto',marginBottom: '50px', width: '50%', height:'30%'}}>
                        <CardMedia
                            overlay={
                                <CardActions style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    {(this.state.playerInfo["Tennis"])
                                        ? <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Tennis")} to={routes.GAME_SIGN_UP}>Tennis</Link></RaisedButton>
                                        : <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Tennis")} to={routes.INITIAL_SPORT_SURVEY}>Survey</Link></RaisedButton>}
                                </CardActions>
                            }
                        >
                            <img style={{height: '175px'}} src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/05/03/tennis-thumbnail.jpg?interpolation=lanczos-none&resize=*:*" alt="" />
                        </CardMedia>
                    </Card>

                    <Card     style={{marginLeft: 'auto',marginRight: 'auto',marginBottom: '50px', width: '50%', height:'30%'}}>
                        <CardMedia
                            overlay={
                                <CardActions style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    {(this.state.playerInfo["Badminton"])
                                        ? <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Badminton")} to={routes.GAME_SIGN_UP}>Badminton</Link></RaisedButton>
                                        : <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Badminton")} to={routes.INITIAL_SPORT_SURVEY}>Survey</Link></RaisedButton>}

                                </CardActions>
                            }
                        >
                            <img style={{height: '175px'}} src="https://wallpapercave.com/wp/wp1852937.jpg" alt="" />
                        </CardMedia>
                    </Card>

                    <Card     style={{marginLeft: 'auto',marginRight: 'auto',marginBottom: '50px', width: '50%', height:'30%'}}>
                        <CardMedia
                            overlay={
                                <CardActions style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    {(this.state.playerInfo["Squash"])
                                        ? <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Squash")} to={routes.GAME_SIGN_UP}>Squash</Link></RaisedButton>
                                        : <RaisedButton><Link style={{textDecoration: 'none'}} onClick={() => this.doSport("Squash")} to={routes.INITIAL_SPORT_SURVEY}>Survey</Link></RaisedButton>}

                                </CardActions>
                            }
                        >
                            <img style={{height: '175px'}} src="http://sportia-eg.com/images/sinal.jpg" alt="" />
                        </CardMedia>
                    </Card>
                </Card>
        );}
    }
}