import React from 'react'
// import {Link} from 'react-router-dom'
import Product from './product'

const ProductGrid = props => {
  console.log('productGrid props.addProduct', props.addProduct)
  return (
    <div className="grid">
      {props.products.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <Product prod={product} addProduct={props.addProduct} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
