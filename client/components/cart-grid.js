import React from 'react'
// import {Link} from 'react-router-dom'
import CartItem from './cart-item'

const CartGrid = props => {
  const cart = props.cart

  return (
    <div className="grid">
      {cart.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <CartItem
            product={product}
            deleteProduct={props.deleteProduct}
            me={props.me}
            user={props.user}
          />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default CartGrid
