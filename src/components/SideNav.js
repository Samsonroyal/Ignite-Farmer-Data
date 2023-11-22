import React from 'react';

const SideNav = () => {


    return (
        <div className="side-nav">
            <div className="group">
                <button className="overlap-group">
                    <div className="text-wrapper">Users</div>
                    
                </button>
            </div>
            <div className="overlap-wrapper">
                <button className="overlap">
                    <div className="div">USSD</div>
                </button>
            </div>
            <div className="overlap-group-wrapper">
                <button className="overlap">
                    <div className="text-wrapper-2">Revenue</div>
                    
                </button>
            </div>
            <div className="div-wrapper">
                <button className="overlap">
                    <div className="text-wrapper-3">Sensors</div>
                    
                </button>
            </div>
        </div>
    );
}


export default SideNav;
