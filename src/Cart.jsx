import React from 'react'
import CartRecord from './CartRecord'

const Cart = ({cartProducts}) => {
  return (
    <div className="cart-container">
    <h1>This is your cart</h1>
    {cartProducts.map((product) => (
      <CartRecord key={product.id} product={product} />
    ))}
</div>
  )
}

export default Cart
