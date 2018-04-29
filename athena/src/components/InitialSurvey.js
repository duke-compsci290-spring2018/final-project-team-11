import React, {Component} from 'react';
import { db } from '../firebase';
import * as routes from "../constants/routes";
import {Card, CardText} from 'material-ui/Card';
import { Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class InitialSportSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: 0,
            frequency: '',
            submit: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(event.target);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        var rating = parseInt(this.state.experience, 10) + parseInt(this.state.frequency, 10);
        db.setRating(this.props.userID, this.props.sport, rating);
        this.setState({submit: true});
        event.preventDefault();
    }

    render() {
        if (this.state.submit) {
            return (<Redirect to={routes.GAME_SIGN_UP}/>);
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <MuiThemeProvider>
                    <Card style={{width: '50%', height:'30%'}}>
                        <label>
                                <Card style={{width: '100%', height:'30%'}}>
                                    <CardText style={{fontWeight: 'bold'}}>Initial Survey!! {this.props.sport}</CardText>
                                    <CardText>This is your first time choosing the game. We want to pair you with players who have the same skill level as you. Answer this form for us to learn more about your experience in the game</CardText>
                                </Card>
                        </label>
                        <br />
                        <label>
                            <CardText>1. Choose the option that most closely corresponds to your skill level</CardText>
                            <br />
                            <select name="experience" value={this.state.experience} onChange={this.handleInputChange}>
                                <option value="1">I have never played this sport before.</option>
                                <option value="2">I am still trying to learn how to play the game.</option>
                                <option value="3">I have played a few times and but don't fully know the rules of the game.</option>
                                <option value="4">I know the rules of the game and have played a few times before.</option>
                                <option value="5">I am intermediate player.</option>
                                <option value="6">I used to learn and play the game but am out of touch.</option>
                                <option value="7">I would consider myself at the same level as a high school varsity athlete.</option>
                                <option value="7">I played tournament level and am ranked in the state</option>
                                <option value="8">I played tournament level and am ranked in region</option>
                                <option value="9">I am a college level athlete.</option>
                                <option value="10">I am Roger Federer and I have decided to grace this platform with my presence.</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            <CardText> 2. How many times do you play per week on average? </CardText>
                            <br />
                            <input name="frequency" checked={this.state.frequency} onChange={this.handleInputChange} type="number" required/>
                        </label>
                        <br />
                        <input type="submit" value="Submit"/>
                    </Card>
                </MuiThemeProvider>
            </form>
        );
    }

}