import React, { Component } from 'react';
import Timer from '../timer';
import TimerForm from '../timer-form';
import { FaPlusCircle } from "react-icons/fa";

let timerValue;

class TimerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            timers: [],
            timerId: '',
            taskCount: 0,
            counter: 0,
            timerStopped: false
        };
    }

    handleAddNewTimer = () => {
        this.setState({
            showForm: true
        });
    }

    handleAddTimerTolist = (value) => {
        let temObj = JSON.parse(JSON.stringify(this.state.timers));
        value.id = this.state.taskCount + 1;
        temObj.push(value);
        this.setState({
            timers: temObj,
            showForm: false,
            taskCount: this.state.taskCount + 1
        }, () => {
            this.startTimer(this.state.taskCount);
        })
    }

    handleCloseForm = () => {
        this.setState({
            showForm: false
        });
    }

    startTimer = (id) => {
        let tempTasks = this.state.timers;
        let tempCounter = parseInt(this.state.counter);
        if (timerValue) {
            clearInterval(timerValue);
            console.log("clearrrrrr")
        }
        tempTasks.map((timer) => {
            console.log("map == ", timer.id, this.state.taskCount)
            if (timer.id == this.state.taskCount - 1) {
                timer.time = tempCounter;
            }
            return timer;
        })
        this.setState({
            counter: 0,
            timers: tempTasks
        })
        timerValue = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);
    }


    stopTimer = (id) => {
        let tempTasks = this.state.timers;
        let tempCounter = parseInt(this.state.counter);
        if (timerValue) {
            clearInterval(timerValue);
        }
        tempTasks.map((timer) => {
            console.log("map == ", timer.id, this.state.taskCount)
            if (timer.id == this.state.taskCount) {
                timer.time = tempCounter;
            }
            return timer;
        })
        this.setState({
            counter: 0,
            timers: tempTasks,
            timerStopped: true
        })
    }

    render() {
        let { timers, showForm, taskCount, counter, timerStopped } = this.state;
        console.log(timers);
        return (
            <div className="">
                <div className="">
                    {timers.map((timer, index) => {
                        return (
                            <Timer timerTitle={timer.title} timerProject={timer.project} timerId={timer.id} timetracked={timer.time} currentId={taskCount} counter={counter} stopTimer={(id) => { this.stopTimer(id) }} timerStopped={timerStopped} />
                        )
                    })}
                    {
                        showForm &&
                        <TimerForm handleCloseForm={() => { this.handleCloseForm() }} handleAddTimerTolist={(obj) => { this.handleAddTimerTolist(obj) }} />
                    }
                </div>
                {
                    !showForm &&
                    <div className="mt-5 text-center">
                        <button type="button" className="btn btn-outline-primary btn-timer mx-auto" onClick={() => { this.handleAddNewTimer() }}><FaPlusCircle /></button>
                    </div>
                }
            </div>
        );
    }
}

export default TimerList;