import React from 'react';
import { Redirect } from 'react-router-dom';
import './Todos.css';

import * as constants from './constants';
import { todoReducer } from './todoReducer';

const initialState = [...constants.TODO_SEED];

class Todoz extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialState,
      toHome: false
    };
    this.inputRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    document.title = `${this.completedTodos.length} completed todos`;
  }
  componentDidUpdate() {
    document.title = `${this.completedTodos.length} completed todos`;
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      todos: todoReducer(this.state.todos, {
        type: 'ADD_TODO',
        name: this.inputRef.current.value,
        complete: false,
      })
    });
    this.inputRef.current.value = '';
  }
  toggleComplete(id) {
    this.setState({
      todos: todoReducer(this.state.todos, { type: 'TOGGLE_COMPLETE', id })
    });
  }
  deleteTodo(id) {
    this.setState({
      todos: todoReducer(this.state.todos, { type: 'DELETE_TODO', id })
    });
  }
  clearTodos() {
    this.setState({
      todos: todoReducer(this.state.todos, { type: 'CLEAR_TODOS' })
    });
    setTimeout(function () {
      this.setState({ toHome: true });
    }.bind(this), 2000);
  }

  render() {
    this.completedTodos = this.state.todos.filter((todo) => todo.complete);
    return (
      <>
        {this.state.toHome ? <Redirect to="/" /> : null}
        <div className="todo-input">
          <form onSubmit={this.addTodo}>
            <input ref={this.inputRef} type="search" id="add-todo" placeholder="Add Todo..." autoComplete="off" />
          </form>
        </div>
        <div className="todo-container">
          {this.state.todos.map((todo) => (
            <div className={`todo-item ${todo.complete ? 'complete' : ''}`} key={todo.id}>
              <div className="item-container">
                <div className="todo-name" onClick={() => this.toggleComplete(todo.id)}>
                  {todo.name}
                </div>
                <div className="todo-delete" onClick={() => this.deleteTodo(todo.id)}>
                  &times;
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="todo-clear" onClick={() => this.clearTodos()}>CLEAR TODOS</button>
      </>
    );
  }
}

export default Todoz;