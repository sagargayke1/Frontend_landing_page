import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component - provides consistent header and footer across all pages
 */
function Layout({ children }) {
  return (
    <div className="App">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout; 