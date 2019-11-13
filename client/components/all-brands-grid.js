import React from 'react'
// import {Link} from 'react-router-dom'
import Product from './all-brands-item'

const ProductGrid = props => {
  const allProducts = props.products
  const brandList = []
  function brandListing() {
    for (let i = 0; i < allProducts.length; i++) {
      if (!brandList.includes(allProducts[i].brand)) {
        brandList.push(allProducts[i].brand)
      }
    }
    return brandList
  }
  const brandsOnly = brandListing()

  return (
    <div className="grid">
      {brandsOnly.map(brand => (
        <div key={brand.id} className="single">
          {/* <Link to={`/products/${product.brand}`}> */}
          <Product brand={brand} me={props.me} />
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
