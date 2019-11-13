import React from 'react'
import {connect} from 'react-redux'
import {updateQuantity} from '../store'

class CartItem extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.loadQty()
  }
  loadQty() {
    const qtyStart = this.props.product.cart.quantity

    this.setState({
      quantity: qtyStart
    })
  }
  handleSubmit(event) {
    const productId = this.props.product.id
    const userId = this.props.user.id
    const quantity = this.state
    event.preventDefault()
    this.props.updateQuantity(userId, productId, quantity)
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const cartArr = this.props.cart
    const product = this.props.product
    const productId = product.id
    const userId = this.props.user.id
    const qtyStart = product.cart.quantity || 1
    console.log('cartArr', cartArr)
    const foundQty = cartArr.filter(item => item.id === productId)[0]
    console.log('foundQty', foundQty.cart.quantity)

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
              defaultValue={qtyStart}
              selected={product.quantity}
              onChange={this.handleChange}
            >
              <option value={0}> 0 </option>
              <option value={1}> 1 </option>
              <option value={2}> 2 </option>
              <option value={3}> 3 </option>
              <option value={4}> 4 </option>
              <option value={5}> 5 </option>
              <option value={6}> 6 </option>
              <option value={7}> 7 </option>
              <option value={8}> 8 </option>
              <option value={9}> 9 </option>
              <option value={10}> 10 </option>
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
