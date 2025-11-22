import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; /* Adjust based on header height */
`;

/**
 * Main Layout Component for LasWell
 * 
 * Wraps all pages with the header and footer components
 * and handles scroll restoration between page navigations
 */
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;