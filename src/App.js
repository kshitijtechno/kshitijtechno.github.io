import React , {useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './Home';
import ContactUs from './ContactUs';
import Videos from './Videos';
import Blog from './Blog';
import Disclaimer from './Disclaimer';
import Layout from './Layout';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-294172399-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
        <Layout>
          
          <Routes>
            <Route path="/" element={<div className="content"><AboutUs /></div>} />
             <Route path="/contactus" element={<div className="content"><ContactUs /></div>} />
             <Route path="/blog" element={<div className="content"><Blog /></div>} />
            <Route path="/videos" element={<div className="content"><Videos /></div>} />
            <Route path="/disclaimer" element={<div className="content"><Disclaimer /></div>} />
            {/*<Route path="/signup" element={<div className="content"><SignUp /></div>} />
            <Route path="/login" element={<div className="content"><LogIn /></div>} />
            <Route path="/logout" element={<div className="content"><LogOut /></div>} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>        
      </Router>
  );
}

export default App;