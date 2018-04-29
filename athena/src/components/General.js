import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home.js'
import Navigation from './Navigation'


export default class General extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    { this.props.username
                        ? <Navigation></Navigation>
                        : <Home></Home>
                    }
                </MuiThemeProvider>
            </div>
        );


    }
}