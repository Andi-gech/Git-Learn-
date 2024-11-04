import Header from "./components/Header";
import Home from "./Pages/Dashboard";
import Department from "./Pages/Department";
import { Routes, Route } from "react-router-dom";
import Employee from "./Pages/Employee";
import LoginPage from "./Pages/LoginPage";
import PayrollRecord from "./Pages/PayrollRecord";

import AttendanceRecord from "./Pages/AttendanceRecord";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
function App() {
  return (
    <div className=" min-h-screen  overflow-hidden bg-zinc-50 flex flex-row">
      <Header />
      <Routes>
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Record" element={<AttendanceRecord />} />
          <Route path="/Report" element={<PayrollRecord />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
