// app/assets/javascripts/components/_main.js.jsx

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Main = React.createClass({
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Header />
                    <Body />
                </MuiThemeProvider>
            </div>
        )
    }
});