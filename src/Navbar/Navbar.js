import React from 'react'
// import Cart from '../Cart/Cart';
// import {Link} from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className="flex flex-row justify-around py-4 bg-blue-300">
      <a href="/">
        <h1 className="text-gray-100">Handphone Store</h1>
      </a>
      <div>
        <span className="text-gray-100">Cart</span>
        <span className="bg-white px-2 py-1 ml-2">0</span>
      </div>
    </div>
  )
}

export default Navbar
