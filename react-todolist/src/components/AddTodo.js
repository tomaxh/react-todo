import React from 'react';
import uniqid from 'uniqid';

class TodoAdd extends React.Component {
    state = {
        todo: {
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.props.action.call(this, this.state.todo);
        this.setState({ todo: null })
        document.getElementById('addtodo').reset();

    }
    titleChange = (e) => {
        this.setState({
            todo: {
                ...this.state.todo,
                title: e.target.value,
                status: false,
                id: uniqid()
            }
        })
    }
    dateChange = (e) => {
        this.setState({
            todo: {
                ...this.state.todo,
                due_date: e.target.value
            }
        })
    }
    render() {

        return (
            <form id='addtodo' onSubmit={this.onSubmit}>
                <input type='text' name='title' placeholder='add new todo here' style={{ height: '20px', margin: '5px' }} onChange={this.titleChange} required />
                <input type='date' name='date' style={{ height: '20px', margin: '5px' }} onChange={this.dateChange} required />
                <input type='submit' name='submit' text='create' style={{ height: '24px', margin: '5px' }} onSubmit={this.onSubmit} required />
            </form>
        );
    }
}

export default TodoAdd;