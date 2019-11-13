import React from 'react'

const CartItem = props => {
  const product = props.product
  const userId = props.user.id
  const productId = product.id

  return (
    <React.Fragment>
      <div className="column" id="width">
        <img src={product.imageUrl} className="cart-image" />
      </div>
      <div className="column flex-start">
        <div className="product-title item-cart">
          <h3>{product.brand}</h3>

          <h3 id="bold">{product.name}</h3>

          <h3>${product.price / 100}</h3>
        </div>

        <button
          className="delete-btn"
          type="button"
          onClick={() => props.deleteProduct(productId, userId)}
        >
          Delete
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => {
            props.addQuantity(userId, productId)
          }}
        >
          +
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => {
            props.reduceQuantity(userId, productId)
          }}
        >
          -
        </button>
      </div>
    </React.Fragment>
  )
}

export default CartItem
