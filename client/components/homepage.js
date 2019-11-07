import React from 'react'
import {Link} from 'react-router-dom'
import AllProducts from './all-products'

const Homepage = () => {
  return (
    <div>
      <Link to="/products">
        <img id="hero" src="hp-hero.png" />
      </Link>
      <AllProducts />
    </div>
  )
}

export default Homepage
