const deleteBtn = props => {
  return (
    <button
      className="add-to-cart"
      type="button"
      onClick={() => props.deleteProduct(productId, userId)}
    >
      Delete
    </button>
  )
}
