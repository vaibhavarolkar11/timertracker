import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class TimerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            projectName: ''
        };
    }
    handleTitleChange = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }
    handleProjectChange = (e) => {
        this.setState({
            projectName: e.target.value
        })
    }
    handleAddTimerTolist = () => {        
        let tempData = {
            title: this.state.taskName,
            project: this.state.projectName,
            id: '',
            time: ''
        }
        this.props.handleAddTimerTolist(tempData)
    }
    render() {
        return (
            <div className="mt-5">
                <div className="col-sm-4 mx-auto">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Task name" onChange={(e) => { this.handleTitleChange(e) }} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Project name" onChange={(e) => { this.handleProjectChange(e) }} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mx-2" onClick={() => { this.handleAddTimerTolist() }}>Add</button>
                        <button className="btn btn-outline-danger mx-2" onClick={() => { this.props.handleCloseForm() }}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;