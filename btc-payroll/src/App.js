// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './Employee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />}exact />
      </Routes>
    </Router>
  );
};

export default App;
