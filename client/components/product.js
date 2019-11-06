import React from 'react'

const Product = props => {
  const {brand, name, price, imageUrl} = props
  console.log(props)
  return (
    <React.Fragment>
      <div className="product-title">
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <h3>${price / 100}</h3>
      </div>
      <img src={imageUrl} className="product-image" />
      <button className="add-to-cart">Add To Cart</button>
    </React.Fragment>
  )
}

export default Product
