// app/assets/javascripts/components/_all_items.js.jsx

var AllItems = React.createClass({

    handleDelete(id) {
        this.props.handleDelete(id);
        console.log('delete item clicked');
    },

    onUpdate(item) {
        this.props.onUpdate(item);
    },

    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}
                          handleDelete={this.handleDelete.bind(this, item.id)}
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });

        return(
            <div>
                {items}
            </div>
        )
    }

});