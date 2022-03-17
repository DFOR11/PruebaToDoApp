import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../../hooks/useFetchData';
import { Loader } from '../../../../shared/Loader/Loader';
import { ToDo } from '../components/toDo/ToDo';
import './UserTodos.css';

export const UserTodos = () => {
  const { id } = useParams();
  const { data, loading } = useFetchData(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  const [toDos, setToDos] = useState();

  useEffect(() => {
    if (data) return setToDos(data);
  }, [data]);

  const handleDelete = (id) => {
    let toDosTemp = [...toDos];
    toDosTemp = toDosTemp.filter((toDo) => toDo.id !== id);
    setToDos(toDosTemp);
  };

  if (loading) return <Loader />;
  return (
    <div className='userTodos custom-scroll'>
      <h5>To-do's</h5>
      {toDos?.map((todo) => (
        <ToDo key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
