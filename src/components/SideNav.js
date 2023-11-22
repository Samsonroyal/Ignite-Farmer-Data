import React from 'react';

const SideNav = () => {


    return (
        <div className="side-nav">
           

            <div className="button-holder">
                <button className="overlap">
                    Users
                </button>
            </div>


            <div className="button-holder">
                <button className="overlap">
                    USSD
                </button>
            </div>
            <div className="button-holder">
                <button className="overlap">
                  Revenue
                    
                </button>
            </div>
            <div className="button-holder">
                <button className="overlap">
                  Sensors
                    
                </button>
            </div>
        </div>
    );
}


export default SideNav;
