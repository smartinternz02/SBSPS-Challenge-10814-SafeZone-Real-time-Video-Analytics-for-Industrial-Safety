import '../css/LocalSmartControlActivity.css';

function LocalSmartControlActivity() {
  return (
    <div className="activitybox">
      <header className="activity-header">
        <h1 className="activity-title">Local Smart Control Activity</h1>
      </header>

      <div className="content-container">
        <div className="route-box">
          <h2 className="route-heading">Land Route</h2>
          <div className="route-content">
            <div className="route-item">
              <p>People In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>People Out</p>
              <span className="data">657</span>
            </div>
            <div className="route-item">
              <p>Vehicle In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>Vehicle Out</p>
              <span className="data">657</span>
            </div>
            </div>
        </div>
        <div className="route-box">
          <h2 className="route-heading">Machine Route</h2>
          <div className="route-content">
            <div className="route-item">
              <p>People In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>People Out</p>
              <span className="data">657</span>
            </div>
            <div className="route-item">
              <p>Vehicle In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>Vehicle Out</p>
              <span className="data">657</span>
            </div>
            </div>
        </div>
        <div className="route-box">
          <h2 className="route-heading">Inventory Route</h2>
          <div className="route-content">
            <div className="route-item">
              <p>People In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>People Out</p>
              <span className="data">657</span>
            </div>
            <div className="route-item">
              <p>Vehicle In</p>
              <span className="data">1.847</span>
            </div>
            <div className="route-item">
              <p>Vehicle Out</p>
              <span className="data">657</span>
            </div>
            </div>
        </div>
        <div className="extra-box">
          <p>See details to check all information</p>
          <button className="details-button">See Details</button>
        </div>
      </div>
    </div>
  );
}

export default LocalSmartControlActivity;
