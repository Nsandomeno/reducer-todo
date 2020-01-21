import React, { useReducer, useState } from 'react';
import { initialState, simpleReducer } from '../reducers/reducer.js';
// import TodoDisplay from './TodoDisplay.js';

function TodoForm() {
    const [state, dispatch] = useReducer(simpleReducer, initialState)
    const [newTodo, addNewTodo] = useState('')

    const handleInput = (event) => {
        addNewTodo(event.target.value)
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
                // value={newTodo}
                // On Change
                />
            </form>
            <button>Add Todo</button>
            </div>
            <div>
            {
                initialState.map((todo => 
                    <div key={todo.id}> 
                    <h1> {todo.item} </h1>
                    </div>
                    ))
            }
            </div>
        </div>
    )
}

export default TodoForm;