import '../../css/UserProfile.css'
// import React from 'react';

function UserProfile() {
  


  return (
    <div className="user-profile">
      <div className="user-info">
        <div className="user-icon"></div>
        <div className="user-details">
          <span className="user-name">Mranalini Patne</span>
          <div className="user-info-line">
            <span className="user-date">August 30, 2023</span>
            <span className="user-time">10:45 AM</span>
            <span className="user-temperature">25°C</span>
          </div>
        </div>
      </div>
      <div className="user-actions">
        {/* Add user actions or icons here */}
      </div>
    </div>
  );
}

export default UserProfile;
