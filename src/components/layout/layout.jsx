// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopBanner from './TopBanner';
import BackToTopButton from './BackToTop';

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
        <BackToTopButton/>
        <TopBanner/>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;