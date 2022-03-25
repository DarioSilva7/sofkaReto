import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home/Home';
import {LandingPage} from './components/landingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;