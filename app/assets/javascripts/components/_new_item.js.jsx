// app/assets/javascripts/components/_body.js.jsx

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
                <div className="mdl-layout">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
                                <label className="mdl-textfield__label" htmlFor="name">Item Name</label>
                                <input className="mdl-textfield__input" type="text" id="name" name="name" ref="name" />
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
                                <label className="mdl-textfield__label" htmlFor="description">Description</label>
                                <input className="mdl-textfield__input" type="text" id="description" name="description" ref="description" />
                            </div>
                        </div>
                    </div>
                    <div className="mdl-grid">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
});
