import React from 'react';
import './AddUser.css';

export const AddUser = () => {
  return (
    <form className='addUser'>
      <h5>Crear Usuario</h5>
      <div className='addUser__input-container'>
        <input required type='text' placeholder='Nombre' className='custom-input' />
      </div>
      <div className='addUser__input-container'>
        <input required type='text' placeholder='Apellido' className='custom-input' />
      </div>
      <div className='addUser__input-container'>
        <input required type='text' placeholder='Email' className='custom-input' />
      </div>
      <div className='addUser__input-container'>
        <input required type='text' placeholder='Dirección' className='custom-input' />
      </div>
      <div className='addUser__input-container'>
        <input required type='text' placeholder='Compañía' className='custom-input' />
      </div>
      <button type='submit' className='btn-primary btn-addUser'>
        Agregar Usuario
      </button>
    </form>
  );
};
