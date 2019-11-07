import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

// import cartIcon from '../assets/icons/cart_icon.png'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="column">
    <div className="nav space-between">
      <Link to="/">
        <img id="logo" src="logo.png" />
      </Link>

      <div>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div id="right-nav" className="row">
            <div id="register">
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Register /</Link>
              <Link to="/signup"> Sign Up</Link>
            </div>
            <img id="cart-icon" src="cart_icon.png" />
          </div>
        )}
      </div>
    </div>
    <div>
      <nav className="nav-links nav flex-start" id="black">
        <Link to="/products">
          <h4>Shop All</h4>
        </Link>
        <h4>Shop By Brand</h4>
        <h4>Shop By Color</h4>
      </nav>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
