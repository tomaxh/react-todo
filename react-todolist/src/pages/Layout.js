import React from 'react';
import TodoList from '../containers/TodoList';
import TodoAdd from '../components/AddTodo';

class Layout extends React.Component {
    state = {
        todo: {
        }
    }
    shouldComponentUpdate(nextState) {
        if (nextState.todo !== this.state.todo) {
            return true;
        }
    }
    addTodo = (newTodo) => {
        this.setState({
            todo: newTodo,
        })

    }
    render() {

        return (
            <React.Fragment>
                <h1 >React Todo List</h1>
                <TodoList newTodo={this.state.todo ? this.state.todo : null} />
                < TodoAdd action={this.addTodo} />

            </React.Fragment>
        );
    }
}

export default Layout;