import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <div className={`site-menu`}>
    <nav className={`site-nav px-4 px-md-5`} role="navigation">
      <ul className="list-unstyled">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about/">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/settings/">Settings</Link>
        </li>
        <li className="menu-item">
          <Link to="/logout/">Logout</Link>
        </li>
        <li className="menu-item">
          <Link to="/fields/">Fields</Link>
        </li>
        <li className="menu-item">
          <Link to="/debug/">Debug Menu</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Nav
