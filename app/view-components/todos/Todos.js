import React, { useState, useReducer, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Todos.css';

import * as constants from './constants';
import { todoReducer } from './todoReducer';

const initialState = [...constants.TODO_SEED];

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  /* #01 #02 #03 */

  function addTodo(event) {
    /* #05 */
  }
  function toggleComplete(id) {
    /* #06 */
  }
  function deleteTodo(id) {
    /* #07 */
  }
  function clearTodos() {
    /* #08 */
  }

  return (
    <>
      {/** #09 */}
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input /** #04 */ type="search" id="add-todo" placeholder="Add Todo..." autoComplete="off" />
        </form>
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <div className={`todo-item ${todo.complete ? 'complete' : ''}`} key={todo.id}>
            <div className="item-container">
              <div className="todo-name" onClick={() => toggleComplete(todo.id)}>
                {todo.name}
              </div>
              <div className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                &times;
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="todo-clear" onClick={() => clearTodos()}>CLEAR TODOS</button>
    </>
  );
}

export default Todo;
//61 lines (nospaces) 1484 (charcount)