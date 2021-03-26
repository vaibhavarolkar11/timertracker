import React, { Component } from 'react';
import TimerList from '../../components/timer-list';

class Timers extends Component {
    render() {
        return (
            <div className="container pt-5 pb-5">
                <TimerList />
            </div>
        );
    }
}

export default Timers;