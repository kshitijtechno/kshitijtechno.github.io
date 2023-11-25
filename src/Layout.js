import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <AppNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
