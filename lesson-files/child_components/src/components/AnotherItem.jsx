import React from "react";

class AnotherItem extends React.Component {
    render() {
        const { value, onRemove } = this.props;
        return (
            <li>
                <a href="#" onClick={onRemove(value)}>{value}</a>
            </li>
        );
    }
}

export default AnotherItem;