import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
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
          <ProductGrid products={products} className="grid" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
