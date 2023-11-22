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
   <TopNavbar />

   <div className="dashboard-container">

   <div class="aside">
       
        <SideNav />

    
      </div>


      <div className="main-side" >
      <div className="dashboard-header">
          <p>23 October 2023</p>
        </div>
        <div className="main">
      
   
      <div class="overview-content">
        <div class="overview-card">
        <div className="Short-range-title">Short Range</div>
        <WeatherCard />          
        </div>
        <div class="overview-card">
        <div className="Plant-activity-title">Plant Activity</div>
        </div>
      </div>


<div>

<div class="chart-content">
      <div className="Long-range-title">Water Levels</div>
      <div class="chart"><LongRange /></div>        
      </div>

  <div className="buttons">
  <div className="div-wrapper">
        <button className="alert-button">Alert</button>
      </div>
      <div className="overlap-6">
        <button className="send-button">Send</button>
      </div>
  </div>

</div>
     


     

    </div>

      </div>

  



       

   </div>



       


      


      
      <footer class="footer"><p> ©{new Date().getFullYear()} <img src={logo} alt="fleets logo" /> Ignite Farmer. </p></footer>
    </div>

     
    </>
  );
};
