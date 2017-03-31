// app/assets/javascripts/components/_body.js.jsx

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var NewItem = React.createClass({

    handleClick() {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
        console.log('The name value is ' + name + 'the description value is ' + description);
    },

    render() {
        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='description' placeholder='Enter a description' />
                <button onTouchTap={this.handleClick} onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});