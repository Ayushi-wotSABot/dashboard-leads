import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLeads from "./components/Leads/DasboardLeads";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/leads-dashboard" element={<DashboardLeads />} />
      </Routes>
    </Router>
  );
}

export default App;
