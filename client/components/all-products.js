import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {addProduct} from '../store/cart'
import ProductGrid from './product-grid'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const products = this.props.products

    return (
      <div>
        <div className="row">
          <h1>All Products</h1>
        </div>

        <div className="row">
          <ProductGrid
            products={products}
            addProduct={this.props.addProduct}
            className="grid"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    addProduct: product => dispatch(addProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
