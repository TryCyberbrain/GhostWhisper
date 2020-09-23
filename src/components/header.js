import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SVGLogo from './svgLogo'

const Header = ({ siteTitle }) => (
  <header className="site-header pb-3">
    <h1 className="sr-only">
      <Link to="/" >
        {siteTitle}
      </Link>
    </h1>

    <SVGLogo />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
