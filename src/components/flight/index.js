import React, { Component } from 'react';
import moment from 'moment';
const Flight = (props) => {
    return (
        <div className="flight">
            <h3 className="flight-price">₹ {props.data.price}</h3>
            <div className="d-flex align-items-center justify-content-between">
                <div className="flight-meta">
                    <div className="flight-code">{props.data.airlineCode} - {props.data.flightNumber}</div>
                    <div className="flight-path">{props.data.origin} > {props.data.destination}</div>
                    <div className="flght-dept">{moment(props.data.departure).format('LT')}</div>
                    <div className="flght-arrival">{moment(props.data.arrival).format('LT')}</div>

                </div>
                <div className="ml-3">
                    <button className="btn btn-primary">BOOK THIS FLIGHT</button>
                </div>
            </div>
        </div>
    );
}

export default Flight;