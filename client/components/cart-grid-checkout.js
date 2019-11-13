import React from 'react'
// import {Link} from 'react-router-dom'
import CartItemCheckout from './cart-item-checkout'

const CartGridCheckout = props => {
  const cart = props.cart

  return (
    <div>
      {cart.map(product => (
        <div key={product.id} className="item-row">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <CartItemCheckout
            cart={cart}
            product={product}
            me={props.me}
            user={props.user}
            className="row"
          />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default CartGridCheckout
