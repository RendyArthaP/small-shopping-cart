import React from 'react'


const Cart = ({cartItems, addToCart, addRemove}) => {   
  const itemPrice = cartItems.reduce((accumulator, currentItem) =>
    accumulator + currentItem.price * currentItem.qty, 0
  );

  const taxPrice = itemPrice * 0.10;
  const shippingPrice = itemPrice > 2000000 ? 5000 : 3000;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  const checkoutButton = () => {
    alert ('Your item already checkout')
  }
  
  return (
    <div className="bg-gray-100 w-1/3 h-1/2 flex flex-col ml-4 py-4 my-4 rounded">
      <h2 className="mx-5">Your Basket:</h2>
      <div>
        {cartItems.length === 0 && (
          <div className="text-center">
            Your basket is empty
          </div>
        )}
        {cartItems.map(product => (
          <div key={product.id} className="flex flex-row text-center items-center justify-between px-10 py-2">
            <img src={product.image} alt={product.title} className="w-10 h-10"/>
            <h1>{product.title}</h1>
            <div className="flex flex-row">
              <div className="flex pr-20">
                <span 
                  className="text-xl mx-2 bg-green-400 rounded-full w-8 h-8 self-center cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  +
                </span>
                <span 
                  className="text-xl mx-2 bg-red-400 rounded-full w-8 h-8 self-center cursor-pointer"
                  onClick={() => addRemove(product)}
                >
                  -
                </span>
              </div>
              <span>
                {product.qty} pcs 
                  x 
                Rp.{product.price}
              </span>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div>
            <div className="border-black border-b w-10/12 mx-auto"></div>
            <div className="mx-auto text-center items-end mr-16 py-4 flex flex-col">
              <div className="flex flex-row py-1">
                <h1>Items Price:</h1>
                <span>Rp.{itemPrice}</span>
              </div>
              <div className="flex flex-row py-1">
                <h1>Tax Price:</h1>
                <span>Rp.{taxPrice}</span>
              </div>
              <div className="flex flex-row py-1">
                <h1>Shipping Price:</h1>
                <span>Rp.{shippingPrice}</span>
              </div>
              <div className="flex flex-row py-1 pt-10">
                <h1>Total Price:</h1>
                <span className="text-xl font-bold">Rp.{totalPrice}</span>
              </div>
            </div>
            <div className="border-black border-b w-10/12 mx-auto"></div>
            <div className="mt-4 items-center text-center">
              <button 
                className="bg-blue-300 p-1 rounded w-10/12 mx-auto"
                onClick={checkoutButton}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart
