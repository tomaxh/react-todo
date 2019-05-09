import React from 'react';

class Todo extends React.Component {


    getStyle = () => {
        return {
            textDecoration: this.props.todo.status ? 'line-through' : 'none',
            backgroundColor: new Date(this.props.todo.due_date) < new Date() ? '#ffc1c1' : '#ffff',

        }

    }
    deleteTodo = (id) => {
        this.props.actionDelete.call(this, id);
    }
    updateStatusChild = (id) => {
        console.log("change status from child. the id from child component is: ", id);
        this.props.actionUpdate.call(this, id);
    }
    render() {

        let { id, title, due_date } = this.props.todo;
        return (
            <div>
                <div className='todo' style={this.getStyle()}> <input type='checkbox' onClick={() => this.updateStatusChild(id)} />{title}<p style={{ float: 'right' }}>{due_date}<button onClick={() => { this.deleteTodo(id) }}>Del</button></p></div>
            </div>
        )

    }
}

export default Todo;