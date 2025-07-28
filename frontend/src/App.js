import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Add a new task
  const addTask = () => {
    // Ensure newTask is a string and trim it
    const taskTitle = typeof newTask === 'string' ? newTask.trim() : '';
    if (taskTitle === '') return;
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then(res => res.json())
      .then(task => {
        setTasks([...tasks, task]);
        setNewTask(''); // Reset newTask to empty string
      })
      .catch(err => console.error('Error adding task:', err));
  };

  // Delete a task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(err => console.error('Error deleting task:', err));
  };

  return (
    <div className="App">
      <h1>Basic To-Do App</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;