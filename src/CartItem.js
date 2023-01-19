import React from 'react'

class CartItem extends React.Component {
    constructor() {
        super()
        this.state = {
            price: 9999,
            title: 'Phone',
            qty: 1,
            img: '',
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
    }


    increaseQuantity = () => {
        console.log("test");
    }

    decreaseQuantity() {
        console.log("decrease");
    }
    deleteQuantity() {
        console.log("delete");
    }


    render() {
        const { price, title, qty } = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}> Rs. {price}</div>

                    <div style={{ color: '#777' }}> Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            className="action-icons"
                            alt="increase"
                            onClick={this.increaseQuantity}
                        //onClick={this.increaseQuantity.bind(this)}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                            className="action-icons"
                            alt="decrease"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            className="action-icons"
                            alt="delete"
                            onClick={this.deleteQuantity}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
    },
}

export default CartItem
