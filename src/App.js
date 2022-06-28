import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

function App() {
    return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" exact elements={<Home/>}/>
          </Routes>
      </Router>
  );
}

export default App;
