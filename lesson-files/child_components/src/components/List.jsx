import React from "react";
import Item from '../components/Item';

class List extends React.Component {
    render() {
        const { items } = this.props;
        return <ul>
            {items.map((i) =>
                <Item value={i} />
            )}
        </ul>;
    }
}

export default List;