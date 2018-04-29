import React, {Component} from 'react';
import { db } from '../firebase';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import * as routes from "../constants/routes";
import { Redirect } from 'react-router'

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: 'Tennis',
            numOfPlayers: 2,
            date: '',
            timeStart: '',
            duration: '',
            location: '',
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
         var d = new Date()
         db.addGame(this.props.userID, this.state.date, this.state.timeStart, this.state.duration, this.props.sport, this.state.location, d.getTime(), parseInt(this.state.numOfPlayers, 10))
         event.preventDefault();
         this.setState({submit: true});
    }

    render() {
        if (this.state.submit) {
            return (<Redirect to={routes.GAME_SIGN_UP}/>);
        }
        if (this.props.userID === null) {
            return <p>Sign in to create games!</p>
        }
        else if (this.props.admin) {
            return <p>Admin accounts may not create games!</p>
        }
        else {
        return (
            <form onSubmit={this.handleSubmit}>
                <MuiThemeProvider>
                    <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Go Back To Game Sign Up</Link></RaisedButton>
                </MuiThemeProvider>
                <br />
                <h3>{this.props.sport}</h3>
                <label>
                    Number of Players
                    <input
                        name="numOfPlayers"
                        type="number"
                        checked={this.state.numOfPlayers}
                        onChange={this.handleInputChange} required/>
                </label>

                <br />
                <label>
                    Date Picker
                    <input name="date" checked={this.state.date} onChange={this.handleInputChange} type="date"  min="2000-01-02" required/>
                </label>
                <br />
                <label>
                    Time Start
                    <input name="timeStart" checked={this.state.timeStart} onChange={this.handleInputChange} id="time" type="time" required/>
                </label>
                <br />
                <label>
                    Duration
                    <input type="number" name="duration" checked={this.state.duration} onChange={this.handleInputChange} min="1" step=".5" required/>
                </label>
                <br />
                <label>
                    Location
                    <input name="location" checked={this.state.location} onChange={this.handleInputChange} required/>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        );}
    }

}