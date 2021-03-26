import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";

const Timer = ({ timerTitle, timerProject, timerId, timetracked, currentId, counter, timerStopped, stopTimer,resumeTimer}) => {

    let displayCounter = (value) => {
        let sec = value % 60, min = value / (60), hour = value / (60 * 12);
        return ((hour < 10) ? '0' : '') + parseInt(hour) + ":" + ((min < 10) ? '0' : '') + parseInt(min) + ":" + ((sec < 10) ? '0' : '') + sec;
    }

    return (
        <div className="timer-card pt-2 pb-2 ">
            <div className="timer-card-title">
                <h4>{timerTitle}</h4>
                <h6 className="mb-0">{timerProject}</h6>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div className="mr-3">
                    <h2>{((currentId == timerId) && !timerStopped) ? displayCounter(counter) : displayCounter(timetracked)}</h2>
                </div>
                {((currentId == timerId)) ?
                    <div className="ml-3">
                        <button type="button" className="btn btn-outline-danger btn-timer" onClick={() => { stopTimer(timerId) }}><FaStopCircle /></button>
                    </div>
                    :
                    <div className="">
                        <button type="button" className="btn btn-outline-success btn-timer" data_id={timerId} onClick={(event) => { 
                            resumeTimer(event.target.getAttribute("data_id"))
                        
                        }}>&#x25b6;</button>
                    </div>
                }

                <div className="ml-3">
                    <button type="button" className="btn btn-outline-primary btn-timer"><FaEdit /></button>
                </div>
            </div>
        </div>
    );
}

export default Timer;