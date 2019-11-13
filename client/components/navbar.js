import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import Logo from '../../public/logo.png'

const Navbar = props => {
  const {handleClick, isLoggedIn, user} = props
  const email = user.email
  const userId = user.id
  return (
    <div className="column">
      <div className="nav space-between">
        <Link to="/">
          <img id="logo" src="/logo.png" />
        </Link>

        <div>
          {isLoggedIn ? (
            <div id="right-nav" className="row">
              {/* The navbar will show these links after you log in */}
              <div id="register">
                <p className="nav-links">Hello {email}</p>
                <a href="#" className="nav-links" onClick={handleClick}>
                  Logout
                </a>
                <Link to={`/cart/${userId}`}>
                  <img id="cart-icon" src="/cart_icon.png" />
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div id="register" className="nav-links">
                {/* The navbar will show these links before you log in */}
                <Link to="/login"> Log in </Link>
                <p> &nbsp;/ &nbsp; </p>
                <Link to="/signup">Sign Up</Link>

                <Link to="/cart/">
                  <img id="cart-icon" src="/cart_icon.png" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <nav className="nav-links nav flex-start" id="black">
          <Link to="/products">
            <h4>Shop All</h4>
          </Link>
          <Link to="/products/shopbybrand">
            <h4>Shop By Brand</h4>
          </Link>
          <h4>Shop By Color</h4>
        </nav>
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
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
