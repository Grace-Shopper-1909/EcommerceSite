import React from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'

class CartPage extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     userId: ''
  //   }
  //   this.loadCart = this.loadCart.bind(this)
  // }

  componentDidMount() {
    // const userId = this.props.userId
    console.log('userId in componentDidMount', this.props.user.id)
    // NOTE: remove hard coding
    this.props.getCart(1)
    console.log('props cart in componentDidMount', this.props.cart)
    // this.loadCart()
  }

  // loadCart() {

  //   this.setState ({
  //     userId: 3
  //   })
  //   // await this.props.getCart(userId)
  // }

  render() {
    // const cart = this.props.cart
    console.log('user in render', this.props.user.id)
    console.log('props cart in render', this.props.cart)
    return (
      <div>
        <h1>Cart Goes Here</h1>
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
    getCart: userId => dispatch(getCart(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
