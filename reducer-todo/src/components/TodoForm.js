import React, { useReducer, useState } from 'react';
import { initialState, simpleReducer } from '../reducers/reducer.js';
// import TodoDisplay from './TodoDisplay.js';
import '../App.css';

function TodoForm() {
    const [state, dispatch] = useReducer(simpleReducer, initialState)
    console.log("This is state in TodoForm:", state)
    const [newTodo, setNewTodo] = useState('')



    const handleInput = (event) => {
        setNewTodo(event.target.value)
    }

    const addItem = () => {
        dispatch({ type: 'ADD_TODO', payload: newTodo })
        setNewTodo('')
    }

    const toggleComplete = (id) => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
        console.log("Toggle..., Toggle...")
    }

    const clearComplete = () => {
        dispatch({ type: 'CLEAR_COMPLETE' })
        console.log("Complete items tossed!")
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
            <button onClick={clearComplete}>Clear Complete</button>
            </div>
            <div>
                {
                    state.map((todo => 
                        <div
                        className={`reg${todo.completed ? ' complete' : ''}`}
                        key={todo.id}
                        onClick={() => toggleComplete(todo.id)}
                        >
                            <h4> {todo.item} </h4>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export default TodoForm;