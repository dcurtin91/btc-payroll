// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './Employee';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />}exact />
        <Route path="/login" element={<Login />}exact />
      </Routes>
    </Router>
  );
};

export default App;
