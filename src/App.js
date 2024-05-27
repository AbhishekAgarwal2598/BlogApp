import './App.css';
import Topbar from './TopBar/TopBar';
import Homepage from './pages/home/home';
import Single from './pages/single/single';
import Write from './pages/write/write'
import Settings from "./pages/settings/settings"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   const user =false;
  return (
    <Router> 
    <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/write" element={<Write/>} />
        </Routes>
    </Router>
  );
}

export default App;
