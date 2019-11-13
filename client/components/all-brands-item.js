import React from 'react'

const Product = props => {
  // const {brand, name, price, imageUrl, addProduct} = props
  // console.log('props is this current product in map', props)
  // console.log('Product props.prod.addproduct', props.addProduct)
  // const result = props.addProduct(props.prod)
  // console.log('for product add button - the addProduct():', result)
  const product = props.prod
  console.log('PRODUCT', product)
  // const userId = props.user.id

  // const userId = props.match.params.userId

  // console.log('userProdObj', userProdObj)
  return (
    <React.Fragment>
      <div className="product-title">
        <h3>{product.brand}</h3>
      </div>
    </React.Fragment>
  )
}

export default Product
