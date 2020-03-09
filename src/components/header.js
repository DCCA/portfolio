import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
	<h1>DC<br />CA</h1>
    </div>
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/portfolio/">portfolio</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `DCCA Portfolio`,
}

export default Header
