import React, { useState } from 'react';
import Timer from '../timer';
import TimerForm from '../timer-form';
import { FaPlusCircle } from "react-icons/fa";

let timerValue;

function TimerList (props) {

    let [showForm,setShowForm] = useState(false);
    let [timers,setTimers] = useState([]);
    let [timerId,setTimerId] = useState('');
    let [taskCount,setTaskCount] = useState(0);
    let [counter,setCounter] = useState(0);
    let [timerStopped,setTimerStopped] = useState(false);


    const handleAddNewTimer = () => {
        setShowForm(true);
    }

    const handleAddTimerTolist = (value) => {
        // console.log(value);
        // let temObj = JSON.parse(JSON.stringify(timers));
        value.id = taskCount + 1;
        timers.push(value);
        // console.log(temObj);

        setTimers(timers)
        setShowForm(false);
        setTaskCount(taskCount + 1)
        setTimerId(taskCount + 1);
        
        startTimer();
    }

    const handleCloseForm = () => {
        setShowForm(false);
    }

    const resumeTimer = (id) => {
        let tempTasks = timers;

        
        if (timerValue) {
            console.log("clearrrrrr")
            clearInterval(timerValue);
        }
      
        if(!timerStopped){
            tempTasks.map((timer) => {
                if (timer.id == timerId) {
                    timer.time += counter;
                }
                return timer;
            })
        }
        
        tempTasks.find((timer) => {
            console.log("map == ", timer.id, taskCount)
            if (timer.id == id) {
                console.log('time in resume == ',timer.time);
                setCounter(timer.time);
                counter = timer.time;
            }
        })

        setTimers(tempTasks);        
        setTimerId(id);
        setTimerStopped(false);
        timerId = id;
        
        console.log(counter);

        timerValue = setInterval(() => {
            setCounter(++counter);
        }, 1000);
    }

    const startTimer = () => {
        let tempTasks = timers;
        let tempCounter = parseInt(counter);

        if (timerValue) {
            console.log("clearrrrrr")
            clearInterval(timerValue);
        }
        setCounter(0);

        tempTasks.map((timer) => {
            console.log("map == ", timer.id, taskCount)
            if (timer.id == timerId) {
                timer.time = tempCounter;
            }
            return timer;
        })

        setTimers(tempTasks)
        
        counter = 0;

        timerValue = setInterval(() => {
            setCounter(++counter);
        }, 1000);
    }


    const stopTimer = (id) => {
        let tempTasks = timers;
        let tempCounter = parseInt(counter);
        if (timerValue) {
            clearInterval(timerValue);
        }
        tempTasks.map((timer) => {
            console.log("map == ", timer.id, taskCount)
            if (timer.id == id) {
                timer.time = tempCounter;
            }
            return timer;
        })
        setCounter(0);
        setTimers(tempTasks)
        setTimerStopped(true);
        setTimerId('');
    }

    console.log(timers);
  
        return (
            <div className="">
                <div className="">
                    {timers.map((timer, index) => {
                        return (
                            <Timer key={index}  timerTitle={timer.title} timerProject={timer.project} timerId={timer.id} timetracked={timer.time} currentId={timerId} counter={counter} resumeTimer={(id) => { resumeTimer(id) }}  stopTimer={(id) => { stopTimer(id) }} timerStopped={timerStopped} />
                        )
                    })}
                    {
                        showForm &&
                        <TimerForm handleCloseForm={() => { handleCloseForm() }} handleAddTimerTolist={(obj) => { handleAddTimerTolist(obj) }} />
                    }
                </div>
                {
                    !showForm &&
                    <div className="mt-5 text-center">
                        <button type="button" className="btn btn-outline-primary btn-timer mx-auto" onClick={() => { handleAddNewTimer() }}><FaPlusCircle /></button>
                    </div>
                }
            </div>
        );
}

export default TimerList;