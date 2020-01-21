import React, { useReducer, useState } from 'react';
import { initialState, simpleReducer } from '../reducers/reducer.js';
// import TodoDisplay from './TodoDisplay.js';

function TodoForm() {
    const [state, dispatch] = useReducer(simpleReducer, initialState)
    // console.log("This is initial state in TodoForm:", initialState)
    const [newTodo, setNewTodo] = useState('')
    // console.log("This is the newTodo in TodoForm", newTodo)
    const [todoList, addNewTodo] = useState(state.todos)
    console.log("This is beg. todoList:", todoList)

    const handleInput = (event) => {
        setNewTodo(event.target.value)
    }

    const addItem = () => {
        dispatch({ type: 'ADD_TODO', payload: newTodo })
        setNewTodo('')
    }

   

    return(
        <div>
            <div>
            Hello from TodoList Component!
            </div>
            <div>
            <form>
                <input 
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleInput}
                />
            </form>
            <button onClick={addItem}>Add Todo</button>
            </div>
            <div>
                {
                    initialState.todos.map((todo => 
                        <div key={todo.id}>
                            <h4> {todo.item} </h4>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export default TodoForm;