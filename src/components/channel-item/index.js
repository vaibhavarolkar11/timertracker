import React, { Component } from 'react';

const ChannelItem = (props) => {

    let getInitials = (title) => {
        const namesArray = title.trim().split(' ');
        if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
        else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
    }

    return (
        <div className="d-flex align-items-center mb-3" onClick={() => props.handleClick(props.title)}>
            <div className="channel-icon">{getInitials(props.title)}</div>
            <h6 className="channel-title ml-2 mb-0">{props.title}</h6>
        </div>
    );
}

export default ChannelItem;