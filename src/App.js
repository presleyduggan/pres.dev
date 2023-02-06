import "./App.css";
import "./components/Navbar.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Stonks from "./pages/Stonks";
import Fame from "./pages/Fame";
import Shame from "./pages/Shame";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Playground from "./pages/Playground";
import Password from "./pages/Password";
import ChangePassword from "./pages/NewPassword";
import Construction from "./pages/Construction";
import Spy from "./pages/Spy.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center'
};

const divStyle2 = {
  marginleft: 'auto'
} */

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Stonks/" element={<Stonks />} />
          <Route path="/Stonks/fame" element={<Fame />} />
          <Route path="/Stonks/shame" element={<Shame />} />
          <Route path="/Stonks/info" element={<Info />} />
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Playground" element={<Playground />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Stonks/Login" element={<Login />} />
          <Route path="/Stonks/change-password" element={<ChangePassword />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Stonks/SPY" element={<Spy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
