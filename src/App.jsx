import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BranchForm from './components/BranchForm/BranchForm.component';
import { BranchDelete } from './components/BranchPanel/BranchDelete';
import { BranchDetail } from './components/BranchPanel/BranchDetail';
import { BranchPanel } from './components/BranchPanel/BranchPanel';
import { BranchUpdate } from './components/BranchPanel/BranchUpdate';
//Local Imports
import './index.css';
import { AboutUs } from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/branches" element={<BranchPanel />} />
        <Route path="/dashboard/branch/create" element={<BranchForm />} />
        <Route path="/dashboard/branch/update/:id" element={<BranchUpdate />} />
        <Route path="/dashboard/branch/:id" element={<BranchDetail />} />
        <Route path="/dashboard/branch/delete/:id" element={<BranchDelete />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
