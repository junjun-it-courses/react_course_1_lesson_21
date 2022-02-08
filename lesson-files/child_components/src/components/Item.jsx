import React from "react";

class Item extends React.Component {
    render() {
        const { value } = this.props;
        return <li><b>{value}</b></li>;
    }
}

export default Item;