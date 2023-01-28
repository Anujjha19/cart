import React from 'react'
import CartItem from './CartItem1'

const Cart = (props) => {
    const { products } = props;


    return (
        <>
            <div className="cart">

                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.idj}
                            /* jsx ={ <h1>Tesxt</h1>}
                            isLoggedIn ={false}
                            func ={() => console.log("Function Testing ") } */
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}

                        />)
                })}
            </div>
        </>
    )
}


export default Cart
