import React, { Component } from 'react';

class ChannelItem extends Component {

    constructor(props) {
        super(props);
        this.getInitials = this.getInitials.bind();
    }

    getInitials = (title) => {
        const namesArray = title.trim().split(' ');
        if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
        else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
    }

    render() {
        let { title } = this.props;
        return (
            <div className="d-flex align-items-center mb-3" onClick={() => this.props.handleClick(title)}>
                <div className="channel-icon">{this.getInitials(title)}</div>
                <h6 className="channel-title ml-2 mb-0">{title}</h6>
            </div>
        );
    }
}

export default ChannelItem;