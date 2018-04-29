import React, {Component} from 'react';
import { db } from '../firebase';
import * as routes from "../constants/routes";

import { Redirect } from 'react-router'


/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class EndOfGameSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: '0',
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
        var rating = parseInt(this.state.experience) + parseInt(this.state.frequency);
        db.setRating(this.props.userID, this.props.sport, rating);
        this.setState({submit: true});
        event.preventDefault();
    }

    render() {
        if (this.state.submit) {
            return (<Redirect to={routes.ACCOUNT}/>);
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    We hope that you had fun playing with Athena. How was did your skill level compare to your opponents?
                    <br />
                    <select name="experience" value={this.state.experience} onChange={this.handleInputChange}>
                        <option value="1">Better</option>
                        <option value="0">(Equal)Competitive</option>
                        <option value="-1">Worse</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}