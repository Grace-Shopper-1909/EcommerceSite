import React from 'react'

const CartItemCheckout = props => {
  const product = props.product
  const userId = props.user.id
  const productId = product.id

  return (
    <React.Fragment>
      <div className="product-title">
        <h3>{product.brand}</h3>

        <h3 id="bold">{name}</h3>

        <h3>${product.price / 100}</h3>
      </div>
      <img src={product.imageUrl} className="product-image" />
    </React.Fragment>
  )
}

export default CartItemCheckout
