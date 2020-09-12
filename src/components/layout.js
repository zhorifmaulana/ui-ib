/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, noFooter }) => {
  return (
    <>
      <Header />
      <div id="all-wrapper">
        <main>{children}</main>
        {noFooter || <Footer />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool
}

Layout.defaultProps = {
  noFooter: false
}

export default Layout
