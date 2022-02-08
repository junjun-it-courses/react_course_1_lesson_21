import React from 'react';
import Title from "./Title";
import Body from "./Body";

class Card extends React.Component {
    static Body = Body;
    static Title = Title;

    render() {
        return <div className="card card-block">{this.props.children}</div>;
    }
}

export default Card;
