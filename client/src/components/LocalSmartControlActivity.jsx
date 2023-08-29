// import React from 'react';
import '../css/LocalSmartControlActivity.css'

function LocalSmartControlActivity() {
  return (
    <div className="activitybox">
      <header className="activity-header">
        <h1 className="activity-title">Local Smart Control Activity</h1>
      </header>

      <div className='content-empty-container'>
        <div className='content-area'>
          <div className='section'>
            <header className='first-header'>Land route</header>
          </div>

          <div className='section'>
            <header className='second-header'>Machine route</header>
          </div>

          <div className='section'>
            <header className='third-header'>Inventory Room</header>
          </div>
        </div>

        <div className='empty-area'>
          <div className='last-section'>
            <header className='second-header'></header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalSmartControlActivity;
