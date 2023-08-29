import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Lsidebar from "../src/components/shared/Lsidebar.jsx"
import Rsidebar from "../src/components/shared/Rsidebar.jsx"

//import ActivityBox from "./pages/activities.jsx";
// import Dashboard from "../src/pages/dashboard.jsx"

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
//import MidsectionActivity from "./components/MidsectionActivity.jsx";
import MidsectionDashboard from "./components/MidsectionDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <MidsectionDashboard />
    <Lsidebar />
    <Rsidebar/>
    {/* <Dashboard/> */}
    
  </Router>
);