import { Routes, Route, Link } from 'react-router-dom';
import './styles.css';

import Home from './components/Home';
import SignUp from './components/SignUp';
import useRandomColor from './function/useRandomColor';
import VHS1 from './components/VHS1';
import VHS2 from './components/VHS2';
import VHS3 from './components/VHS3';
import LockBox from './components/LockBox';


function App() {
  const titleColor = useRandomColor(1000);

  return (
    <div className="container">
      <header>
        <h1 style={{ color: titleColor }}>WILDFIRE TAPE</h1>
        <nav>
          <Link to="/">TAPE</Link>
          <Link to="/signup">SIGN-UP</Link>
           <Link to="/lockbox">LOCKBOX</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/VHS1" element={<VHS1 />} />
        <Route path="/vhs2" element={<VHS2 />} />
        <Route path="/vhs3" element={<VHS3 />} />
        <Route path="/lockbox" element={<LockBox />} />
      </Routes>

      <footer>
        <p>© 2025</p>
      </footer>
    </div>
  );
}

export default App;