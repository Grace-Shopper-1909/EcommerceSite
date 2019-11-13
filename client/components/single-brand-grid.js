import React from 'react'
// import {Link} from 'react-router-dom'
import Product from './single-brand-item'

const ProductGrid = props => {
  return (
    <div className="grid">
      {props.products.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.brand}`}> */}
          {/* <Product {...product} /> */}
          <Product
            product={product}
            addProduct={props.addProduct}
            me={props.me}
            user={props.user}
          />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
