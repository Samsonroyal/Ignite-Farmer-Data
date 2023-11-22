import React from "react";
import "../App.css";
import logo from "../logo.svg";
import SideNav from "../components/SideNav";
import TopNavbar from "../components/TopNavbar";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCard from "../components/ChartComponent";
import LongRange from "../components/LongRange";

export const Dashboard = () => {
  return (
    <>
<div class="grid-container">

      <header class="header">
        <TopNavbar />
        <h1>Dashboard</h1></header>
      <aside class="aside">
      <h3 class="aside-menu">Menu</h3>
        <span class="menu-span flex flex-col gap-1.5 mb-6">
        <SideNav />

        </span>
      </aside>
      <main className="main">
      <div className="dashboard-header">
          <p>23 October 2023</p>
        </div>
      <p >
          Welcome, Kwame
          <span role="img" alt="hello">
            👋
          </span>
        </p>
        <div class="overview-content">
          <div class="overview-card">
          <div className="Short-range-title">Short Range</div>
          <WeatherCard />          
          </div>
          <div class="overview-card">
          <div className="Plant-activity-title">Plant Activity</div>
          </div>
        </div>
        <div class="chart-content">
        <div className="Long-range-title">Water Levels</div>
        <div class="chart"><LongRange /></div>        
        </div>
        <div className="div-wrapper">
          <button className="alert-button">Alert</button>
        </div>
        <div className="overlap-6">
          <button className="send-button">Send</button>
        </div>

      </main>
      <footer class="footer"><p> ©{new Date().getFullYear()} <img src={logo} alt="fleets logo" /> Ignite Farmer. </p></footer>
    </div>

     
    </>
  );
};
