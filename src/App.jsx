import Header from "./components/Header";
import Home from "./Pages/Dashboard";
import Department from "./Pages/Department";
import { Routes, Route } from "react-router-dom";
import Employee from "./Pages/Employee";

import AttendanceRecord from "./Pages/AttendanceRecord";

function App() {
  return (
    <div className=" min-h-screen  overflow-hidden bg-zinc-50 flex flex-row">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Record" element={<AttendanceRecord />} />
      </Routes>
    </div>
  );
}

export default App;
