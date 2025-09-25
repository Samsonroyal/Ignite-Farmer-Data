import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth onAuth={() => setAuthenticated(true)} />} />
        <Route
          path="/dashboard"
          element={authenticated ? <Dashboard /> : <Auth onAuth={() => setAuthenticated(true)} />}
        />
        {/* Add other routes as needed, e.g. weather, longrange, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
