import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="site-wrapper pt-3 mx-4 mx-md-auto">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="site-main">{children}</main>
      <footer className="site-footer py-4">
        GhostWhisper © {new Date().getFullYear()}. <br />Built by{` `}
        <a target="_blank" rel="noreferrer noopener" href="https://tyler.codes/">
          Tyler Rilling
        </a>
        .
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
