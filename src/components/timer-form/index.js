import React, { useState } from 'react';

function TimerForm(props) {
    
    const [taskName,setTaskName] = useState('');
    const [projectName,setProjectName] = useState('');
    const [Error,setError] = useState('');

    const handleTitleChange = (e) => {
        setTaskName(e.target.value);
        setError('');
    }

    const handleProjectChange = (e) => {
        setProjectName(e.target.value);
        setError('');
    }

    const handleAddTimerTolist = () => {    
        if(taskName == '' || projectName == ''){
            setError(taskName == ''?'Please provide task name':'Please provide project name')
        }   
        else{
            let tempData = {
                title: taskName,
                project: projectName,
                id: '',
                time: ''
            }
            props.handleAddTimerTolist(tempData)
        } 
    }

    return (
        <div className="mt-5">
            <div className="col-sm-4 mx-auto">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Task name" onChange={(e) => { handleTitleChange(e) }} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Project name" onChange={(e) => { handleProjectChange(e) }} />
                </div>
                {Error && <div className="form-error">{Error}</div>}
                <div className="text-center">
                    <button className="btn btn-primary mx-2" onClick={() => { handleAddTimerTolist() }}>Add</button>
                    <button className="btn btn-outline-danger mx-2" onClick={() => { props.handleCloseForm() }}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default TimerForm;