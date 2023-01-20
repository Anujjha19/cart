import React from 'react'

const CartItem = (props) => {

    /* constructor() {
        super()
        this.state = {
            price: 9999,
            title: 'Phone',
            qty: 1,
            img: '',
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
    }
 */

    /*       
  
      increaseQuantity = () => {
  
      }
  
      decreaseQuantity = () => {
          console.log("decrease");
      }
      deleteQuantity = () => {
          console.log("delete");
      }
   */




    const { price, title, qty } = props.product;

    const {
        product,
        onIncreaseQuantity, onDecreaseQuantity,
        onDeleteProduct,
    } = props;

    return (
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img src= {product.img} alt="" style={styles.image} />
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
                        // onClick={this.increaseQuantity}   
                        //onClick={this.increaseQuantity.bind(this)}
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        className="action-icons"
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}

                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                        className="action-icons"
                        alt="delete"
                        onClick={() => onDeleteProduct(product.id)}

                    />

                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc',
    },
}

export default CartItem
