import React from 'react'
import {connect} from 'react-redux'

class CheckoutPage extends React.Component {
  componentDidMount() {
    // this.props.getProducts()
  }
  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    markPurchased: () => dispatch(markPurchased())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
