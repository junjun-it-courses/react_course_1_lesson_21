import React from "react";

class List extends React.Component {
    removeItem = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter((item) => item.id !== id);
        this.setState({ items: newItems });
    };

    constructor(props) {
        super(props);
        const items = [1, 2, 3, 4, 5].map((i) => ({ id: i }));
        this.state = { items };
    }

    render() {
        return <ul>
            {this.state.items.map((item) => this.renderItem(item))}
        </ul>;
    }

    renderItem({ id }) {
        return <li><a href="#" onClick={this.removeItem(id)}>{id}</a></li>;
    }
}

export default List;