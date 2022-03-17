import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [formValues, handleInputChange] = useForm({ email: '', password: '' });
  const { email, password } = formValues;

  const handleSubmit = () => {
    const action = {
      type: types.login,
      payload: {
        email,
      },
    };

    dispatch(action);

    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className='login__form'>
        <h1>Iniciar Sesión</h1>
        <div className='input-container'>
          <input required type='text' value={email} name='email' placeholder='Correo' className='custom-input' onChange={handleInputChange} />
        </div>
        <div className='input-container'>
          <input
            required
            type='password'
            value={password}
            name='password'
            placeholder='Contraseña'
            className='custom-input'
            onChange={handleInputChange}
          />
        </div>

        <a href='#'>¿Olvidaste tu contraseña? Te ayudamos</a>
        <button type='submit' className='btn-primary'>
          Ingresar
        </button>
      </form>
    </div>
  );
};
