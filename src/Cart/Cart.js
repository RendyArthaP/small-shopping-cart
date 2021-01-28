import React from 'react'


const Cart = ({cartItems, addToCart, addRemove}) => {
  return (
    <div className="bg-gray-100 w-1/2 flex">
      <h2>Your Basket:</h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            Your basket is empty
          </div>
        )}
        {cartItems.map(product => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <div>
              <button 
                className=""
                onClick={() => addToCart(product)}
              >
                +
              </button>
              <button 
                className=""
                onClick={() => addRemove(product)}
              >
                -
              </button>
              <div>
                {product.qty} x Rp.{product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
