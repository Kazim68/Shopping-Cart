import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = ({ name, id, price, handler, image }) => {

  const dispatcher = useDispatch()
  return (
      <div className='productCard'>
          <img src={image} alt={name} />
          <p>{name}</p>
          <h1>{price}</h1>
      <button onClick={() => { handler({ name, id, price, quantity: 1, image });  dispatcher({type: 'CalculatePrice'})}}>Add to Cart</button>
    </div>
  )
}

export default ProductCard