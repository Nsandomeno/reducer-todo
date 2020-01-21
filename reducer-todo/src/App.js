import React from 'react';

import './App.css';

import TodoForm from './components/TodoForm.js';
import TodoDisplay from './components/TodoDisplay.js';


function App() {
  return (
    <div className="App">
      <TodoDisplay />
    </div>
  );
}

export default App;
