import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    content: 'Pickup dry cleaning',
                    isCompleted: true,
                },
                {
                    content: 'Get haircut',
                    isCompleted: false,
                },
                {
                    content: 'Build a todo app in React',
                    isCompleted: false,
                }
            ]
        };
    }
    render() {
        let { todos } = this.state;
        return (
            <div className="container">
                {
                    todos.map((todo, index) => (
                        <div className="">
                            {todo.content}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Contact;