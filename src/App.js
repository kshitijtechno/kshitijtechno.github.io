import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './Home';
import ContactUs from './ContactUs';
import Videos from './Videos';
import HybrisLocalSetupGuide from './Learnings/HybrisLocalSetupGuide';
import Disclaimer from './Disclaimer';
import Layout from './Layout';

import ReactGA from 'react-ga4';
import HybrisInterview from './Learnings/HybrisInterview';
import JavaInterview from './Learnings/JavaInterview';
import JavaLogical from './Learnings/JavaLogical';
import config from './config';
import HybrisProjectImportIntellij from './Learnings/HybrisProjectImportIntellij';
import HybrisDataModeling from './Learnings/HybrisDataModeling';
import HybrisQuiz from './Quizes/HybrisQuiz';
import FreeRecharge from './Quizes/FreeRecharge';
import Dixnary from './Products/Dixnary';





ReactGA.initialize('G-P3PN6X95YY');

function App() {
  return (
    <Router>
        <Layout>
          
          <Routes>
            <Route path="/" element={<div className="content"><AboutUs /></div>} />
            <Route path={config.uri_hybrisInterview} element={<div className="content"><HybrisInterview /></div>} />
            <Route path={config.uri_itemsXml} element={<div className="content"><HybrisDataModeling /></div>} />
            <Route path={config.uri_hybrisLocalSetup} element={<div className="content"><HybrisLocalSetupGuide /></div>} />
            <Route path={config.uri_hybrisProjectImportIntellij} element={<div className="content"><HybrisProjectImportIntellij /></div>} />
            <Route path={config.uri_javaInterview} element={<div className="content"><JavaInterview /></div>} />
            <Route path={config.uri_javaLogical} element={<div className="content"><JavaLogical /></div>} />
            <Route path={config.uri_hybrisquiz} element={<div className="content"><HybrisQuiz /></div>} />
            <Route path={config.uri_freerecharge} element={<div className="content"><FreeRecharge /></div>} />
            <Route path={config.uri_products_dixnary} element={<div className="content"><Dixnary /></div>} />


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