import React from 'react'
// import {Link} from 'react-router-dom'
import CartItem from './cart-item'

const CartGrid = props => {
  const cart = props.cart
  console.log('PROPSSS', props)
  // const userObj = props.products[0]
  // const products = userObj.products
  // console.log('User OBJ', userObj)
  // console.log('products', products)
  // console.log('me in product grid', props.me)
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
