import React from 'react'
// import {Link} from 'react-router-dom'
import Product from './product'

const ProductGrid = props => {
  return (
    <div className="grid">
      {props.products.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <Product
            product={product}
            cart={props.cart}
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
