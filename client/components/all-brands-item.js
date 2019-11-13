import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
  return (
    <React.Fragment>
      <div className="product-title">
        <Link to={`/products/${props.brand}`}>
          <h3>{props.brand}</h3>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Product
