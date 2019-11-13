import React from 'react'
import {connect} from 'react-redux'
import {getCart, deleteProduct, updateQuantity} from '../store/cart'
import CartGrid from './cart-grid'
import {Link} from 'react-router-dom'

class CartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.getCart(this.props.match.params.userId)
    this.setState({loaded: true})
  }

  render() {
    if (!this.state.loaded) {
      return <div>{null}</div>
    }
    const cart = this.props.cart
    const userId = this.props.user.id

    return (
      <div>
        <h1>Cart</h1>
        <CartGrid
          cart={cart}
          deleteProduct={this.props.deleteProduct}
          user={this.props.user}
        />
        <div className="center">
          <Link to={`/checkout/${userId}`}>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(getCart(userId)),
    deleteProduct: (productId, userId) =>
      dispatch(deleteProduct(productId, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
