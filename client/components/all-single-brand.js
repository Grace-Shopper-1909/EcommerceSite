import React from 'react'
import {connect} from 'react-redux'
import {getProductsByBrand} from '../store/products'
import {addProduct} from '../store/cart'
import {me} from '../store/user'
import ProductGrid from './single-brand-grid'
import Title from './title'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProductsByBrand(this.props.match.params.brand)
    this.props.me()
  }
  render() {
    const products = this.props.products

    return (
      <div>
        <Title title={this.props.match.params.brand} />

        <div>
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
    getProductsByBrand: brand => dispatch(getProductsByBrand(brand)),
    addProduct: (product, userId) => dispatch(addProduct(product, userId)),
    me: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
