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
    return (
      <div>
        <Title title="All Products" />

        <div>
          <ProductGrid
            products={products}
            user={this.props.user}
            cart={this.props.cart}
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
    addProduct: (product, userId) => dispatch(addProduct(product, userId)),
    me: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
