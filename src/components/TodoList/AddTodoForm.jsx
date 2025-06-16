
import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button type="submit" style={{ marginLeft: '8px' }}>Agregar</button>

    </form>
  );
};

export default AddTodoForm;