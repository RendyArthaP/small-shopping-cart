import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import Cart from './Cart/Cart';
import {items} from './Data/item';
import React, {useState} from 'react';
// import {BrowserRouter as Router} from "react-router-dom";

function App() {
  // const [amountItems, setAmountItems] = useState(0)
  
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    const exist = cartItems.find((product) => product.id === item.id);
    if(exist) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id ? {...exist, qty:exist.qty + 1} : product
        )
      )
    } else {
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="">
        <Card items={items} addToCart={addToCart}/>
        <Cart cartItems={cartItems} addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default App;
