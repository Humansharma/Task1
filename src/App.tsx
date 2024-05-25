import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';
import ContactDetail from './components/ContactDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
      {/* <h1>My React Leaflet Map</h1> */}
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
