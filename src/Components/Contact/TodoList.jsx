import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, editTodo } from '../Redux/TodoReducer';
import editIcon from "../../assets/edit-icon.png";
import deleteIcon from "../../assets/delete-icon.png";
import completeIcon from "../../assets/complete-icon.png";

function TodoList() {
    const [todoItem, setTodoItem] = useState("");
    const [activeItem, setActiveItem] = useState(null);
    const [editItem, setEditItem] = useState(true)
    const dispatch = useDispatch()
    
    const todoSelect = useSelector(state => state.todo.todos)
    

    const inputItemHandler = (event) => {
        setTodoItem(event.target.value);   
    }

    const todoSubmitHandler = (event) => {
        event.preventDefault();

        if(activeItem){
          dispatch(editTodo({ id: activeItem, title: todoItem }));
        } else{
          dispatch(addTodo(todoItem));
        }
        setTodoItem("");
        setActiveItem("");
        setEditItem(true)

    }

    const editChangeHandler = (item) => {
     setActiveItem((prevActive) => (prevActive === item.id ? null : item.id));
    //  console.log("title", item.title);
     setTodoItem(editItem ? item.title : "");
     setEditItem(prevEditItem => !prevEditItem)
    }

    const deleteChangeHandler = (item) => {
      dispatch(deleteTodo(item))
    }

    const completeChangeHandler = (item) => {
      dispatch(completeTodo({ id: item.id }));
    }


  return (
    <section className="todo-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="todo-wrapper">
              <h2>Todo Listing</h2>
              <div className="row">
                <div className="col-lg-6">
                  <form
                    className="todo-input-wrapper"
                    onSubmit={todoSubmitHandler}
                  >
                    <input
                      type="text"
                      placeholder="Enter your todo name"
                      value={todoItem}
                      onChange={inputItemHandler}
                    />

                    <button type="submit" className="btn btn-primary">
                      {editItem ? "Submit" : "Update"}
                    </button>
                  </form>
                </div>

                <div className="col-lg-6">
                  <h3>Todo items results</h3>
                  <ul className="todo-list-display-items">
                    {todoSelect.map((item) => (
                      <li
                        key={item.id}
                        className={
                          activeItem === item.id ? "set-todo-item" : ""
                        }
                      >
                        <div
                          className={`todo-title ${item.completed ? "complete-item" : ""}`}
                        >
                          {item.title}
                        </div>
                        <div className="todo-editable">
                          <div
                            className="edit"
                            onClick={() => editChangeHandler(item)}
                          >
                            <img src={editIcon} title="edit" />
                          </div>
                          <div
                            className="delete"
                            onClick={() => deleteChangeHandler(item)}
                          >
                            <img src={deleteIcon} title="delete" />
                          </div>
                          <div
                            className="complete"
                            onClick={() => completeChangeHandler(item)}
                          >
                            <img src={completeIcon} title="complete" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoList