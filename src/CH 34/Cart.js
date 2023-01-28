import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component{
    render(){
        return(
            <div className='cart' >

                <CartItem qty={1} price={105} title ={"game"} img={""} />
            </div>
        )
    }
}


export default Cart;
