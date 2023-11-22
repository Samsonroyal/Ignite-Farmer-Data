import React from "react";
import "../App.css";
import logo from "../logo.svg";
import SideNav from "../components/SideNav";
import TopNavbar from "../components/TopNavbar";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCard from "../components/ChartComponent";
import LongRange from "../components/LongRange";
import ShortRange from "../components/ShortRange";

export const Dashboard = () => {
  const handleAlertButtonClick = () => {
    window.location.href = "https://telerivet.com/p/e129fa1a/messages";
  };

  const handleSendButtonClick = () => {
    window.location.href = "https://telerivet.com/p/e129fa1a/messages?mode=c";
  };

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
        <ShortRange />
                
        </div>
        <div class="overview-card-right">
        <div className="Plant-activity-title">Plant Activity</div>
        <WeatherCard />  
        </div>
      </div>


<div>

<div class="chart-content">
      <div className="Long-range-title">Water Levels</div>
      <div class="chart"><LongRange /></div>        
      </div>

  
  <div className="buttons">
        <div className="div-wrapper">
          <button className="alert-button" onClick={handleAlertButtonClick}>
            Alert Farmers
          </button>
        </div>
        <div className="overlap-6">
          <button className="send-button" onClick={handleSendButtonClick}>
            Send Insights to Farmer
          </button>
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
