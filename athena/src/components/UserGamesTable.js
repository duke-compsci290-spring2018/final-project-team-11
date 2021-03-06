import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

import { db } from '../firebase';
import * as SortGames from "../constants/SortGames";

/*const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};*/

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class UserGamesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
            userData: {},
            upcomingGames: [],
            pastGames: []
        };



        /*db.gamesRef.on("value", function (data) {
            self.state.gameData = data.val();
        });*/

    }

    /*componentDidMount() {
        var userID = "rXshDS35S3QEnwUDBKAQq36rOBL2";
        var self = this;
        db.gamesRef.on('value', function (snap) {
            var myGames = [];
            var games = snap.val();
            console.log(games);
            for (var game of Object.values(games)) {
                for (var user of Object.values(game.participants)) {
                    if (user === userID) {
                        myGames.push(game);
                    }
                }
            }
            self.setState({upcomingGames: myGames});
        })
    }*/

    componentDidMount() {
        var self = this;
        db.ref.on('value', function (snap) {
            var upcomingGames = [];
            var pastGames = [];
            var data = snap.val();
            var now = new Date();
            if (data.users[self.props.userID] !== undefined && data.users[self.props.userID].games !== undefined) {
                var userGames = Object.values(data.users[self.props.userID].games);
                for (var userGame of userGames) {
                    var game = data.games[userGame];
                    if (game !== undefined) {
                        var date = new Date(game.date + " " + game.time);
                        if (date.getTime() > now.getTime()) {
                            upcomingGames.push(game);
                        }
                        else {
                            pastGames.push(game);
                        }
                    }
                }
                upcomingGames = SortGames.reverseSortByDate(Object.values(upcomingGames));
                pastGames = SortGames.reverseSortByDate(Object.values(pastGames));
                self.setState({upcomingGames: upcomingGames, pastGames: pastGames});

            }});
    }

    componentWillUnmount() {
        db.ref.off();
    }


    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    leaveGame = (index, row) => {
        db.leaveGame(row.gameID, this.props.userID)
    }

    dateSort = () => {
        this.setState({upcomingGames: SortGames.sortByDate(this.state.upcomingGames)});
    }

    rDateSort = () => {
        this.setState({upcomingGames: SortGames.reverseSortByDate(this.state.upcomingGames)});
    }

    sportSort = () => {
        this.setState({upcomingGames: SortGames.sortBySport(this.state.upcomingGames)});
    }

    fullSort = () => {
        this.setState({upcomingGames: SortGames.sortByFullness(this.state.upcomingGames)});
    }



    render() {
        return (
            <div>
                <button onClick={() => this.rDateSort()}> Date up </button>
                <button onClick={() => this.dateSort()}> Date down </button>
                <button onClick={() => this.sportSort()}> Sport </button>
                <button onClick={() => this.fullSort()}> Fullness </button>
                <h2>Upcoming Games</h2>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn  style={{color: '#000000'}}>Sport</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Date</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Location</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Starting Time</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Duration</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Players Signed Up</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Spots Available</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Leave Games</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.upcomingGames.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.sport}</TableRowColumn>
                                <TableRowColumn>{row.date}</TableRowColumn>
                                <TableRowColumn>{row.location}</TableRowColumn>
                                <TableRowColumn>{row.time}</TableRowColumn>
                                <TableRowColumn>{row.duration}</TableRowColumn>
                                <TableRowColumn>{Object.keys(row.participants).length}</TableRowColumn>
                                <TableRowColumn>{row.numParticipants - Object.keys(row.participants).length}</TableRowColumn>
                                <TableRowColumn><FlatButton onClick={() => this.leaveGame(index, row)} label="Leave Game"/></TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
                <h2>Past Games</h2>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn  style={{color: '#000000'}}>Sport</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Date</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Starting Time</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Take Survey!</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.pastGames.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.sport}</TableRowColumn>
                                <TableRowColumn>{row.date}</TableRowColumn>
                                <TableRowColumn>{row.time}</TableRowColumn>
                                {(row.participants[this.props.userID] !== 'false')
                                    ? <TableRowColumn><RaisedButton disabled={true}>Submitted</RaisedButton></TableRowColumn>
                                    : <TableRowColumn><RaisedButton><Link  onClick={() => this.props.gameIDCallBack(row.gameID, row.sport)} style={{textDecoration: 'none'}}  to={routes.END_OF_GAME_SURVEY}>Survey</Link></RaisedButton></TableRowColumn>}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }



}