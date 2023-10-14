import React from 'react'
import ProductCard from './ProductCard.jsx'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const Home = () => {

    const productList = [{
        'name': 'Product 1',
        'id': 'asfadfadf',
        'price': 100,
        'image': 'https://picsum.photos/200/300',
    }, {
        'name': 'Product 2',
        'id': 'aegrgragrh',
        'price': 100,
        'image': 'https://picsum.photos/200/300',
        }];
    
    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({
            type: 'addToCart',
            payload: options
        })
        toast.success('Added to Cart')
    }

  return (
      <div className='home'>
          {
              productList.map((product) => (
                <ProductCard name={product.name} image={product.image} id={product.id} price={product.price} key={product.id} handler={addToCartHandler} />
                ))    
          }
          
    </div>
  )
}

export default Home