import React, { useState } from 'react';
import './ToDo.css';

export const ToDo = ({ todo, handleDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  return (
    <div className='toDo__container'>
      <p className={isCompleted ? ' toDo --completed' : 'toDo'} onClick={() => setIsCompleted(!isCompleted)}>
        {todo.title}
      </p>
      <button className='delete-todo' onClick={() => handleDelete(todo.id)}>
        🗑
      </button>
    </div>
  );
};
