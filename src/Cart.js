import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 499,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 1999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ],
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
    }

    render() {
        const { products } = this.state;

        return (
            <>
                <div className="cart">

                    {products.map((product) => {
                        return (
                            <CartItem
                                product={product}
                                key={product.idj }
                                /* jsx ={ <h1>Tesxt</h1>}
                                isLoggedIn ={false}
                                func ={() => console.log("Function Testing ") } */
                            />)

                    })}
                </div>
            </>
        )
    }
}

export default Cart
