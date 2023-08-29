// import React from 'react';
import '../../css/Rsidebar.css';

function Rsidebar() {
  return (
    <div className="sidebar sidebar-right">
      <header className="sidebar-header">
        <h1 className="sidebar-title">Essential Updates</h1>
      </header>
      {/* <div className="recent-activities-box"> */}
        {/* <header className="box-header">Recent Activities</header> */}
        <div className="box-content">
          {// Inside Rsidebar component
    <div className="recent-activities-box">
      <header className="box-header">Recent Activities</header>
      <div className="box-content">
    <div className="small-box">
        <div>Security Camera 005 on</div>
        <div className="timestamp">10 minutes ago</div>    
    </div>
    <div className="small-box">
        <div>Security Camera 013 on</div>
        <div className="timestamp">13 minutes ago</div>
    </div>
    <div className="small-box">
        <div>Security Camera 013 off</div>
        <div className="timestamp">15 minutes ago</div>
    </div>
    <div className="small-box">
        <div>Drone 008 under maintenance</div>
        <div className="timestamp">26 minutes ago</div>
    </div>
    <div className="small-box">
        <div>Security Camera under maintenance</div>
        <div className="timestamp">1 hour ago ago</div>
    </div>
    <div className="see-all-activities">
     <a href="#">See All Activities</a>
      </div>
  </div>
</div>
}
        </div>
      {/* </div> */}
    </div>

    
  );
}

export default Rsidebar;
