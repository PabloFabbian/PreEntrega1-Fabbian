import React from 'react'
import cart from './assets/cart.png'

function CartWidget() {
    return (
        <div className='CartItems'>
            <img src={cart} alt='cart-widget' width={40}/>
            0
        </div>
    )
}

export default CartWidget