Colors = require('material-ui/styles/colors');
ColorManipulator = require('material-ui/utils/colorManipulator');
Spacing = require('material-ui/styles/spacing');
RaisedButton = require('material-ui/RaisedButton');
TextField = require('material-ui/TextField');


module.exports = {
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.grey300,
        primary2Color: Colors.grey300,
        primary3Color: Colors.lightBlack,
        accent1Color: '#01A9F4',
        accent2Color: Colors.grey100,
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
    },
};