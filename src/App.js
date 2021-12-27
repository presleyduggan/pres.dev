import './App.css';
import './components/Navbar.jsx'
import NavBar from './components/Navbar.jsx';
import SideBar from './components/Sidebar';
import Footer from './components/Footer';
import Stonks from './pages/Stonks';
import Construction from './pages/Construction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center'
};

const divStyle2 = {
  marginleft: 'auto'
}

function App() {
  return (
    <div className="App">
          {/* <div style={divStyle2}>
            <SideBar></SideBar>
          </div> */}
          <Router>
          <NavBar />
          <Routes>
          <Route path="/Stonks/*" element={<Stonks/>} />
          <Route path="/" element={<Construction/>} />
          <Route path="/Projects" element={<Construction/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
