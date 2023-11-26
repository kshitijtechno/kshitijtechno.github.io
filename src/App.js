import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Update the import statements
import AboutUs from './Home';
import ContactUs from './ContactUs';
// import PlaceOrder from './PlaceOrder/PlaceOrder';
// import SignUp from './SignUp/SignUp';
// import { LogIn } from './LogIn/LogIn';
// import {LogOut} from './LogOut/LogOut';
import Layout from './Layout';
function App() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<div className="content"><AboutUs /></div>} />
             <Route path="/contactus" element={<div className="content"><ContactUs /></div>} />
            {/*<Route path="/placeorder" element={<div className="content"><PlaceOrder /></div>} />
            <Route path="/signup" element={<div className="content"><SignUp /></div>} />
            <Route path="/login" element={<div className="content"><LogIn /></div>} />
            <Route path="/logout" element={<div className="content"><LogOut /></div>} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>        
      </Router>
  );
}

export default App;
