import React from 'react'

const Product = props => {
  // const {brand, name, price, imageUrl, addProduct} = props
  // console.log('props is this current product in map', props)
  console.log('Product props.prod.addproduct', props.addProduct)
  const result = props.addProduct(props.prod)
  console.log('for product add button - the addProduct():', result)
  return (
    <React.Fragment>
      <React.Fragment className="product-title">
        <h3>{props.prod.brand}</h3>
        <h3>{props.prod.name}</h3>
        <h3>${props.prod.price / 100}</h3>
      </React.Fragment>
      <img src={props.prod.imageUrl} className="product-image" />
      <button
        className="add-to-cart"
        type="button"
        onClick={() => props.addProduct(props.prod)}
      >
        Add To Cart
      </button>
    </React.Fragment>
  )
}

export default Product
