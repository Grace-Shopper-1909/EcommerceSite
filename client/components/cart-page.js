import React from 'react'
import {connect} from 'react-redux'
import {gotCart} from '../store/cart'

class CartPage extends React.Component {
  componentDidMount() {
    // this.props.getCart()
  }
  render() {
    // const cart = this.props.cart
    return (
      <div>
        <h1>Cart Goes Here</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {cart: state.cart}
}

const mapDispatchToProps = dispatch => {
  return {
    gotCart: (userId, cart) => dispatch(gotCart(userId, cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
