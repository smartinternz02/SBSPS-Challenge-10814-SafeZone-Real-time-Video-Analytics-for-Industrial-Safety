import "./App.css";
import Sidebar from "./components/shared/Sidebar";
import { Routes, Route } from "react-router-dom";
import Activities from "./pages/activities";
import Alert from "./pages/alert";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" component={Dashboard} />
        <Route path="/activities" component={Activities} />
        <Route path="/alert" component={Alert} />
      </Routes>
    </div>
  );
}

export default App;
