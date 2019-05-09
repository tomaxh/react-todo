import React from 'react';
import Todo from '../components/Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    "id": 1,
                    "title": "eat breakfast",
                    "due_date": "2018-05-06",
                    "status": false,
                },
                {
                    "id": 2,
                    "title": "eat lunch",
                    "due_date": "2018-05-07",
                    "status": false,
                }, {
                    "id": 3,
                    "title": "eat dinner",
                    "due_date": "2018-05-08",
                    "status": true,
                },

            ],
        };
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.newTodo != nextProps.newTodo) {
            console.log(this.props.newTodo, nextProps, [...this.state.todos, nextProps.newTodo]);
            this.setState({
                todos: [...this.state.todos, nextProps.newTodo]
            })


        }
        return true
    }
    updateStatus = (id) => {
        var targetList = this.state.todos.filter(todo => todo.id !== id);
        var targetTodo = this.state.todos.filter(todo => todo.id === id);
        targetTodo[0].status = !targetTodo[0].status;
        targetList.push(targetTodo[0]);
        targetList.sort((a, b) => a.due_date > b.due_date ? 1 : -1);
        this.setState({
            todos: targetList,
        })
        console.log(this.state.todos)

    }
    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos].filter(todo => todo.id !== id)
        })
    }
    render() {

        return (

            this.state.todos.map((todo, i) => {
                return (
                    <Todo key={todo.id} todo={todo} position={i} actionUpdate={this.updateStatus} actionDelete={this.deleteTodo} />

                )
            })

        );
    }
}

export default TodoList;