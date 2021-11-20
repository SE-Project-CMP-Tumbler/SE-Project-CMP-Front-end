import React from 'react';
import './css/dist/NavigationBarResp.css';

/**
 *  This is the navigation bar component for small view ports
 *  @returns {ReactJSXElement} JSX Element.
 */
function NavigationBarResp() {
  return (
    <nav className="basic-nav">
      <div className="mobile-nav">
        <button type="button" className="menu">
          <i className="fas fa-bars fa-2x" />
        </button>
        <button type="button" className="tumblr">
          <i className="fab fa-tumblr fa-2x " />
        </button>
        <button type="button" className="search">
          <i className="fas fa-search fa-2x" />
        </button>
      </div>
    </nav>
  );
}

export default NavigationBarResp;
