import React from 'react';
import './Table.css';

export const Table = ({ cols = [], children }) => {
  return (
    <div className='table-container'>
      <div className='table__header'>
        <h5 className='table__header__title'>Users</h5>
      </div>
      <table>
        <thead>
          <tr>
            {cols.map((col, index) => (
              <th key={`${col}-${index}`}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
