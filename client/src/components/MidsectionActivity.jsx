import LocalSmartControlActivity from './LocalSmartControlActivity';
import UserProfile from './shared/UserProfile';
import '../css/LocalSmartControlActivity.css'
import '../css/Midsection.css';
import '../css/UserProfile.css';
function MidsectionActivity() {
  return (
    <div className="middle-section">
      <UserProfile />
      <LocalSmartControlActivity />

    
    </div>
  );
}

export default MidsectionActivity;