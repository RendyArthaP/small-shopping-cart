import React from 'react'

const Card = ({items}) => {
  return (
    <div className="flex flex-row flex-wrap w-full px-2">
      {items.map(item => (
        <div 
          key={item.id}
          className="bg-gray-100 m-4 px-1 py-2 flex flex-col text-center items-center rounded"
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-40 h-40 p-1 rounded"
          />
          <h1 className="font-bold">{item.title}</h1>
          <span className="font-light">{item.price}</span>
          <button className="bg-blue-300 p-1 rounded text-gray-100 w-32">Add To Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Card
