// app/assets/javascripts/components/_main.js.jsx

// import React from 'react';
// var mui = require('material-ui');
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

var Main = React.createClass({
    render() {
        return (
            <div>
                {/*<MuiThemeProvider>*/}
                    <Header />
                    <Body />
                {/*</MuiThemeProvider>*/}
            </div>
        )
    }
});
