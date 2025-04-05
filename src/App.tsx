import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import CreateCampaign from './pages/CreateCampaign';
import CampaignSuccess from './pages/CampaignSuccess';
import DonateForm from './pages/DonateForm';
import DonationSuccess from './pages/DonationSuccess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-success" element={<CampaignSuccess />} />
          <Route path="/donate/:id" element={<DonateForm />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;