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
import * as SortGames from '../constants/SortGames';

import { db } from '../firebase';

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
export default class TableExampleComplex extends Component {
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
            gameData: [],
            userData: {}
        };

    }
    
    componentDidMount() {
        var self = this;
        db.ref.on("value", function (snap) {
            var data = snap.val();
            var games = data.games;
            for (var game in games) {
                /*console.log(games[game].participants);
                console.log(Object.keys(games[game].participants));
                console.log(Object.keys(games[game].participants).length);*/
                
                if (self.props.admin) {
                    if (games[game].participants === undefined || games[game].numParticipants <= Object.keys(games[game].participants).length || games[game].participants[self.props.userID] !== undefined) {
                        delete games[game];
                    }
                }
                else if (self.props.userID !== null) {
                    var rating = data.users[self.props.userID].ratings[self.props.sport];
                    if (Math.abs(rating - games[game].rating) > 3 || games[game].participants === undefined || games[game].sport !== self.props.sport || games[game].numParticipants <= Object.keys(games[game].participants).length || games[game].participants[self.props.userID] !== undefined) {
                        delete games[game];
                    }
                }
                else {
                    if (games[game].participants === undefined || games[game].numParticipants <= Object.keys(games[game].participants).length || games[game].participants[self.props.userID] !== undefined) {
                        delete games[game];
                    }
                }

            }
            games = SortGames.reverseSortByDate(Object.values(games));
            self.setState({gameData: games});
        });
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

    addUserToGame = (index, row) => {
        db.joinGame(row.gameID, this.props.userID, 'false')
    }
    
    removeGame = (index, row) => {
        db.removeGame(row.gameID);
    }

    dateSort = () => {
        this.setState({gameData: SortGames.sortByDate(this.state.gameData)});
    }

    rDateSort = () => {
        this.setState({gameData: SortGames.reverseSortByDate(this.state.gameData)});
    }

    sportSort = () => {
        this.setState({gameData: SortGames.sortBySport(this.state.gameData)});
    }

    fullSort = () => {
        this.setState({gameData: SortGames.sortByFullness(this.state.gameData)});
    }



    render() {
        return (
            <div>
                <br/>
                <p>Sort By: </p>
                <button onClick={() => this.rDateSort()}> Date up </button>
                <button onClick={() => this.dateSort()}> Date down </button>
                <button onClick={() => this.sportSort()}> Sport </button>
                <button onClick={() => this.fullSort()}> Fullness </button>
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
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn  style={{color: '#000000'}}>Sport</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Date</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Location</TableHeaderColumn>   
                            <TableHeaderColumn style={{color: '#000000'}}>Starting Time</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Duration</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Players Signed Up</TableHeaderColumn>
                            <TableHeaderColumn style={{color: '#000000'}}>Spots Available</TableHeaderColumn>
                            {this.props.admin
                                ? <TableHeaderColumn  style={{color: '#000000'}}>Remove Games</TableHeaderColumn>
                                : <TableHeaderColumn  style={{color: '#000000'}}>Join Games</TableHeaderColumn>}
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.gameData.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn style={{color: '#000000'}}>{row.sport}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{row.date}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{row.location}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{row.time}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{row.duration}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{Object.keys(row.participants).length}</TableRowColumn>
                                <TableRowColumn style={{color: '#000000'}}>{row.numParticipants - Object.keys(row.participants).length}</TableRowColumn>
                                {this.props.admin
                                    ? <TableRowColumn  style={{color: '#000000'}}><FlatButton onClick={() => this.removeGame(index, row)} label="Remove Game" disabled={this.props.userID === null}/></TableRowColumn>
                                    : <TableRowColumn  style={{color: '#000000'}}><FlatButton onClick={() => this.addUserToGame(index, row)} label="Join Game!" disabled={this.props.userID === null}/></TableRowColumn>}
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