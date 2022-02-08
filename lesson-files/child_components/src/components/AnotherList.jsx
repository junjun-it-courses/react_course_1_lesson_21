import React from "react";
import AnotherItem from "./AnotherItem";

class AnotherList extends React.Component {
    constructor(props) {
        super(props);
        const { items } = this.props;
        this.state = { items };
    }

    handleRemove = (value) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter(item => item !== value);
        this.setState({ items: newItems });
    };

    render() {
        const { items } = this.state;
        return (
            <ul>
                {items.map(i =>
                    <AnotherItem onRemove={this.handleRemove} value={i} />
                )}
            </ul>
        );
    }
}

export default AnotherList;