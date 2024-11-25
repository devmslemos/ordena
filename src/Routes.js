import Home from "./components/Home";
import News from "./components/News";
import Plans from "./components/Plans";
import Resources from "./components/Resources";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />}></Route>
        <Route path="/plans" element={<Plans />} ></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
