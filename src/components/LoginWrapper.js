import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../util/storage'
import { navigate } from 'gatsby'
import Nav from './Nav'

const LogginWrapper = ({ children }) => {
  const [menuState, setMenuState] = useState(`nav-is-closed`)
  const toggleMenu = () => {
    setMenuState(state => (state === `nav-is-closed` ? `nav-is-active` : `nav-is-closed`))
  }

  if (isLoggedIn()) {
    return (
      <div id="page" className={`viewport ${menuState}`}>
        <div className="toggle-wrapper">
          <button className={`button navbar-toggler`} data-target="page-wrap" onClick={() => toggleMenu()}>
            <span className={`icon-bar top-bar`} />
            <span className={`icon-bar middle-bar`} />
            <span className={`icon-bar middle-bar`} />
            <span className={`icon-bar bottom-bar`} />
            <span className={`sr-only`}>Toggle navigation</span>
          </button>
        </div>
        <Nav />
        <div className="loggedIn">{children}</div>
      </div>
    )
  } else {
    if (typeof window !== `undefined`) {
      navigate(`/login`)
    }
    return null
  }
}

LogginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LogginWrapper
