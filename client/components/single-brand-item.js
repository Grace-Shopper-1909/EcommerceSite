import React from 'react'
import {connect} from 'react-redux'
import {updateQuantity, addProduct} from '../store'

class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    const userId = this.props.user.id
    const updatedProduct = {
      id: this.props.product.id,
      quantity: this.state.quantity
    }

    event.preventDefault()
    this.props.addProduct(updatedProduct, userId)
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const product = this.props.prod
    // const productId = product.id
    const userId = this.props.user.id
    // const qtyStart = product.cart.quantity || 1

    return (
      <React.Fragment>
        <div className="column flex-start">
          <div className="product-title">
            <h3>{product.brand}</h3>

            <h3 id="bold">{product.name}</h3>

            <h3>${product.price / 100}</h3>
          </div>
          <img src={product.imageUrl} className="product-image" />

          <div className="row">
            <form onSubmit={this.handleSubmit} id="flex">
              <select
                name="quantity"
                value={this.state.quantity}
                defaultValue={1}
                selected={product.quantity}
                onChange={this.handleChange}
                className="qty"
              >
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
              <button
                className="add-to-cart"
                type="submit"
                // onClick={() => addProduct(product, userId)}
              >
                Add To Cart
              </button>
            </form>
          </div>
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
      dispatch(updateQuantity(userId, productId, quantity)),
    addProduct: (product, userId) => dispatch(addProduct(product, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
