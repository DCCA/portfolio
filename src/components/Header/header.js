import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header container">
    <div className='logo'>
	<Link to="/">
	   <h1>DC<br />CA</h1>
	</Link>
    </div>
    <div>
      <nav>
        <Link to="/portfolio/">portfolio</Link>
        <Link to="/about/">about</Link>
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
