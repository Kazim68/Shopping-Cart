import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const dispatcher = useDispatch()

    const { cartItems, subtotal, shipping, total, tax } = useSelector(state => state.cart)
    
    const increment = (id) => { 
        console.log(cartItems)
        dispatcher({ type: 'addToCart', payload: id })
        dispatcher({type: 'CalculatePrice'})
    }
    const decrement = (id) => { 
        dispatcher({ type: 'DECREMENT', payload: id })
        dispatcher({type: 'CalculatePrice'})
    }
    const deleteHandler = (id) => { 
        dispatcher({ type: 'DELETE', payload: id })
        dispatcher({type: 'CalculatePrice'})
    }


    return (
        <div className='cart'>
          <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((items) => (
                            <CartItem key={items.id} image={items.image} name={items.name} price={items.price} qty={items.quantity} id={items.id}
                            increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
                        ))
                    ): <h1>No Items Yet</h1>
              }
          </main>
          <aside>
              <h2>Sub-Total: ${subtotal}</h2>
              <h2>Shipping: ${shipping}</h2>
              <h2>Tax: ${tax}</h2>
              <h2>Total: ${total}</h2>
          </aside>
    </div>
  )
}


const CartItem = ({ image, name, price, id, qty, increment, decrement, deleteHandler }) => (
    <div className="cartItem">
        <img src={image} alt={name} />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={() => increment({name, id, price, quantity:1, image})}>+</button>
            <p>{qty}</p>
            <button onClick={() => decrement(id)}>-</button>
        </div>
        <AiFillDelete onClick={() => deleteHandler(id)}/>
    </div>
)

export default Cart