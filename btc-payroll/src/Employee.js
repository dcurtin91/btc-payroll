// src/EmployeeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employees');
        console.log('Fetched employees:', response.data);
        setEmployees(response.data);
      } catch (err) {
        setError('Error fetching employees');
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.uuid}>
            <strong>Name:</strong> {`${employee.first_name} ${employee.middle_initial || ''} ${employee.last_name}`}<br />
            <strong>Email:</strong> {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
