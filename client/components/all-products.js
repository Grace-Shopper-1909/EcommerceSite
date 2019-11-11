import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {addProduct} from '../store/cart'
import {me} from '../store/user'
import ProductGrid from './product-grid'
import Title from './title'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
    this.props.me()
  }
  render() {
    const products = this.props.products
    // console.log('me in allprod', this.props.me)
    return (
      <div>
        <Title title="All Products" />

        <div className="row">
          <ProductGrid
            products={products}
            user={this.props.user}
            addProduct={this.props.addProduct}
            me={this.props.me}
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
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    addProduct: product => dispatch(addProduct(product)),
    me: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
