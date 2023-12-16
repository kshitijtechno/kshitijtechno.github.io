import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './Home';
import ContactUs from './ContactUs';
import Videos from './Videos';
import Hybris from './Learnings/Hybris';
import HybrisLocalSetupGuide from './Learnings/HybrisLocalSetupGuide';
import Java from './Learnings/Java';
import Disclaimer from './Disclaimer';
import Layout from './Layout';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-P3PN6X95YY');

function App() {
  return (
    <Router>
        <Layout>
          
          <Routes>
            <Route path="/" element={<div className="content"><AboutUs /></div>} />
            <Route path="/learnings/hybris" element={<div className="content"><Hybris /></div>} />
            <Route path="/learnings/hybris/local-setup" element={<div className="content"><HybrisLocalSetupGuide /></div>} />
            <Route path="/learnings/java" element={<div className="content"><Java /></div>} />
            <Route path="/contactus" element={<div className="content"><ContactUs /></div>} />
            <Route path="/videos" element={<div className="content"><Videos /></div>} />
            <Route path="/disclaimer" element={<div className="content"><Disclaimer /></div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>        
      </Router>
  );
}

export default App;