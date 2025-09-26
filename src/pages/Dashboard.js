import React from 'react';
import { Button } from '@mui/material'; // Added missing import
import '../App.css';
import logo from '../logo.svg';
import SideNav from '../components/SideNav';
import TopNavbar from '../components/TopNavbar';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCard from '../components/ChartComponent';
import LongRange from '../components/LongRange';
import ShortRange from '../components/ShortRange';

const Dashboard = ({ onLogout }) => {
  const handleAlertButtonClick = () => {
    window.location.href = 'https://telerivet.com/p/e129fa1a/messages';
  };

  const handleSendButtonClick = () => {
    window.location.href = 'https://telerivet.com/p/e129fa1a/messages?mode=c';
  };

  return (
    <>
      <div className="grid-container">
        <TopNavbar />

        <div className="dashboard-container">
          <div className="aside">
            <SideNav />
          </div>

          <div className="main-side">
            <div className="dashboard-header">
              <p>23 October 2023</p>
            </div>
            <div className="main">
              <div className="overview-content">
                <div className="overview-card">
                  <div className="Short-range-title">Short Range</div>
                  <ShortRange />
                </div>
                <div className="overview-card-right">
                  <div className="Plant-activity-title">Plant Activity</div>
                  <WeatherCard />
                </div>
              </div>

              <div>
                <div className="chart-content">
                  <div className="Long-range-title">Water Levels</div>
                  <div className="chart">
                    <LongRange />
                  </div>
                </div>

                <div className="buttons">
                  <div className="div-wrapper">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      onClick={handleAlertButtonClick}
                      sx={{ textTransform: 'none' }}
                    >
                      Alert Farmers
                    </Button>
                  </div>
                  <div className="overlap-6">
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      onClick={handleSendButtonClick}
                      sx={{ textTransform: 'none' }}
                    >
                      Send Insights to Farmer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>
            {' '}
            ©{new Date().getFullYear()} <img src={logo} alt="fleets logo" /> Ignite Farmer.{' '}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;