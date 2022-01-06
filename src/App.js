import './App.css';
import './components/Navbar.jsx'
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Stonks from './pages/Stonks';
import Fame from './pages/Fame';
import Shame from './pages/Shame';
import Info from './pages/Info';
import Construction from './pages/Construction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
          <Route path="/Stonks/" element={<Stonks/>} />
          <Route path="/Stonks/fame" element={<Fame/>} />
          <Route path="/Stonks/shame" element={<Shame/>} />
          <Route path="/Stonks/info" element={<Info/>} />
          <Route path="/" element={<Construction/>} />
          <Route path="/Projects" element={<Construction/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
