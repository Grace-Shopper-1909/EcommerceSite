import React from 'react'
// import {Link} from 'react-router-dom'
import CartItem from './cart-item'

const CartGrid = props => {
  const cart = props.cart

  return (
    <div>
      {cart.map(product => (
        <div key={product.id} className="item-row">
          {/* <Link to={`/products/${product.id}`}> */}
          {/* <Product {...product} /> */}
          <CartItem
            product={product}
            deleteProduct={props.deleteProduct}
            me={props.me}
            user={props.user}
            updateQuantity={props.updateQuantity}
            className="row"
          />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default CartGrid
