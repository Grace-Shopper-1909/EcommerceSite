import React from 'react'
import {connect} from 'react-redux'
import {getProductsByBrand} from '../store/products'
// import {addProduct} from '../store/cart'
import {me} from '../store/user'
import ProductGrid from './single-brand-grid'
import Title from './title'

class AllProducts extends React.Component {
  componentDidMount() {
    console.log('component did mount')
    console.log('MATCH PARAMS brand', this.props.match.params.brand)
    this.props.getProductsByBrand(this.props.match.params.brand)
    this.props.me()
  }
  render() {
    console.log('component rendered')
    const products = this.props.products
    console.log('PRODUCTS first', products)
    return (
      <div>
        <Title title="Shop By Brand" />

        <div>
          <ProductGrid
            products={products}
            // user={this.props.user}
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
    getProductsByBrand: () => dispatch(getProductsByBrand()),
    me: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
