import React from 'react';
import GameForm from "./GameCreator";

export default class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }
    render () {
        return (
            <div>
                <h1>Create Game</h1>
                <GameForm userID={this.props.userID} sport={this.props.sport} admin={this.props.admin}></GameForm>
            </div>
        )
    }
}