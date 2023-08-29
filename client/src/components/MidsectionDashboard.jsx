import UserProfile from './shared/UserProfile';
import Dashboard from './Dashboard';
import '../css/Midsection.css';
import '../css/UserProfile.css';

function MidsectionDashboard() {
    return (
      <div className="middle-section">
        <UserProfile />
        <Dashboard />
  
      
      </div>
    );
  }
  
  export default MidsectionDashboard;