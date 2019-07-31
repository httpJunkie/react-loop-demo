import React, { useState, useReducer, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "@progress/kendo-theme-material/dist/all.css";
import "./Todos.css";

import * as constants from "./constants";
import { todoReducer } from "./todoReducer";

import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const initialState = [...constants.TODO_SEED];

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [textInput, setTextInput] = useState("");
  const completedTodos = todos.filter(todo => todo.complete);

  useEffect(() => {
    document.title = `${completedTodos.length} completed todos`;
  });

  function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      name: textInput,
      complete: false
    });
    setTextInput("");
  }

  function toggleComplete(id) {
    dispatch({ type: "TOGGLE_COMPLETE", id });
  }
  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", id });
  }
  function clearTodos() {
    dispatch({ type: "CLEAR_TODOS" });
  }

  function rowRender(trElement, props) {
    const isEven = props.dataItem.id % 2 == 0;
    const evenColor = { backgroundColor: "rgb(245, 245, 245, 0.99)" };
    const oddColor = { backgroundColor: "rgb(252, 252, 252, 0.99)" };
    const trProps = { style: isEven ? evenColor : oddColor };
    return React.cloneElement(
      trElement,
      { ...trProps },
      trElement.props.children
    );
  }

  function textInputOnChange(event) {
    const value = event.target.value;
    if (textInput !== value) {
      setTextInput(value);
    }
  }

  return (
    <>
      <div className="todo-form">
        <form onSubmit={addTodo}>
          <Input onChange={textInputOnChange} value={textInput} type="search" placeholder="Enter task..." autoComplete="off" />
          <Button onClick={addTodo} look="bare" icon="plus" type="submit">Add</Button>
        </form>
      </div>
      <div className="todo-container">
        <Grid rowRender={rowRender} data={todos} style={{ width: "800px", height: "400px" }}>
          <Column field="id" title="ID" width="40px" />
          <Column field="name" title="Name" width="250px" />
          <Column field="complete" title="Completed" width="120px"
            cell={props => (
              <td>
                <input onClick={() => toggleComplete(props.dataItem.id)} defaultChecked={props.dataItem[props.field]} type="checkbox" />
              </td>
            )}
          />
          <Column title="Remove" width="120px"
            cell={props => (
              <td>
                <Button onClick={() => deleteTodo(props.dataItem.id)} look="bare" icon="trash" />
              </td>
            )}
          />
        </Grid>
      </div>
      <Button look="bare" icon="reset" onClick={() => clearTodos()}>Clear All Todos</Button>
    </>
  );
};

export default Todo;