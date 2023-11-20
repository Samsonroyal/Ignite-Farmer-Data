import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherStats from './components/WeatherStatistics';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherStats />} />
      </Routes>
    </Router>
  );
}

export default App;
