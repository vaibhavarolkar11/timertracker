import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header(props) {
  return (
    <div className="container">
      <nav className="pt-3 pb-3">
        <ul className="pl-0 list-style-none mb-0 d-flex align-items-center">
          <li className="mr-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/timers">Timer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;