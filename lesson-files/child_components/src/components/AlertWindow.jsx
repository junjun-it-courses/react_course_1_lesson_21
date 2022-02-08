import React from "react";

class Alert extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="alert alert-primary">
                {children}
            </div>
        );
    }
}


export default Alert;