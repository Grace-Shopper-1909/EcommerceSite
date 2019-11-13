import React from 'react'
import {connect} from 'react-redux'
import {updateQuantity} from '../store'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.quantity
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    const productId = this.props.product.id
    const userId = this.props.user.id
    const quantity = this.state
    event.preventDefault()
    this.props.updateQuantity(userId, productId, quantity)
  }
  handleChange(event) {
    const {value} = event.target
    this.setState({quantity: value})
  }

  render() {
    const product = this.props.product
    const productId = product.id
    const userId = this.props.user.id
    const quantity = this.state.quantity
    console.log('QUANT', quantity)
    // const qtyStart = product.cart.quantity || 1

    return (
      <React.Fragment>
        <div className="column" id="width">
          <img src={product.imageUrl} className="cart-image" />
        </div>
        <div className="column flex-start">
          <div className="product-title item-cart">
            <h3>{product.brand}</h3>

            <h3 id="bold">{product.name}</h3>

            <h3>${product.price / 100}</h3>
          </div>

          <form onSubmit={this.handleSubmit}>
            <h3 id="bold">Qty:</h3>
            <select
              name="quantity"
              value={this.state.quantity}
              defaultValue={0}
              selected={product.quantity}
              onChange={this.handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <button type="submit">Update</button>
          </form>

          <button
            className="delete-btn"
            type="button"
            onClick={() => this.props.deleteProduct(productId, userId)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: (userId, productId, quantity) =>
      dispatch(updateQuantity(userId, productId, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
