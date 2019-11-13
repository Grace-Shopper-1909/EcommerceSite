import React from 'react'

const Product = props => {
  const product = props.prod

  const userId = props.user.id

  return (
    <React.Fragment>
      <div className="product-title">
        <h3>{product.brand}</h3>
        <h3 id="bold">{name}</h3>
        <h3>${product.price / 100}</h3>
      </div>
      <img src={product.imageUrl} className="product-image" />
      <button
        className="add-to-cart"
        type="button"
        onClick={() => props.addProduct(product, userId)}
      >
        Add To Cart
      </button>
    </React.Fragment>
  )
}

export default Product
