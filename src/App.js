import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './Component/Home/NavBar.js';
import { Home } from './Component/Home/Home1.js';
import { Skills } from './Component/Skills/Skills.js';
import { Projects } from './Component/Projects/Projects.js';
import { Resume } from './Component/Resume/Resume.js';

function App() {
  return (
    <div className="App bg-black text-white z-10">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
