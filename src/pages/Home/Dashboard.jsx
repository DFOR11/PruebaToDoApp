import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import { Loader } from '../../shared/Loader/Loader';
import { AddUserButton } from './components/addUserButton/AddUserButton';
import { Header } from './components/header/Header';
import { Table } from './components/table/Table';

export const Dashboard = () => {
  const cols = ['Name', 'Username', 'Email', 'Address', 'Company', 'Options'];

  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '30px' }}>
      <Header />

      <AddUserButton />

      <Table cols={cols}>
        {data?.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.address.city} {user.address.street}
            </td>
            <td>{user.company.name}</td>
            <td>
              <Link to={`./${user.id}/todos`} className='view-todos'>
                View todos
              </Link>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};
