import React from 'react'
import {connect} from 'react-redux'

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
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    // gotCart: () => dispatch(gotCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
