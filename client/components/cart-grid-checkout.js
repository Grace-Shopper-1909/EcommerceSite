import React from 'react'
// import {Link} from 'react-router-dom'
import CartItemCheckout from './cart-item-checkout'

const CartGridCheckout = props => {
  const cart = props.cart

  return (
    <div className="grid">
      {cart.map(product => (
        <div key={product.id} className="single">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <CartItemCheckout product={product} me={props.me} user={props.user} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default CartGridCheckout
