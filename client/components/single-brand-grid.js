import React from 'react'
// import {Link} from 'react-router-dom'
import Product from './single-brand-item'

const ProductGrid = props => {
  // console.log('productGrid props.addProduct', props.addProduct)
  // console.log('me in product grid', props.me)
  // console.log('props.product in brands grid', props.products)
  return (
    <div className="grid">
      {props.products.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.brand}`}> */}
          {/* <Product {...product} /> */}
          <Product
            prod={product}
            // addProduct={props.addProduct}
            me={props.me}
            // user={props.user}
          />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
