// components/TodoList/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [tasks, setTasks] = useState([
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTodoForm onAdd={addTask} />
      <ul>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;