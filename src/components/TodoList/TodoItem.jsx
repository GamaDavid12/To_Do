// components/TodoList/TodoItem.jsx
import React from 'react';

const TodoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '16px' }}>Eliminar</button>
    </li>
  );
};

export default TodoItem;