import React from 'react'

const Product = props => {
  // const {brand, name, price, imageUrl, addProduct} = props
  // console.log('props is this current product in map', props)
  // console.log('Product props.prod.addproduct', props.addProduct)
  // const result = props.addProduct(props.prod)
  // console.log('for product add button - the addProduct():', result)
  const product = props.prod

  const user = props.user

  const userProdObj = {
    product,
    user
  }
  // console.log('userProdObj', userProdObj)
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
        onClick={() => props.addProduct(userProdObj)}
      >
        Add To Cart
      </button>
    </React.Fragment>
  )
}

export default Product
