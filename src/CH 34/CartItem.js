import React from "react";

class CartItem extends React.Component {
    constructor() {
        super()
        this.state = {
            price: 999,
            title: "Phone",
            Qty: 1,
            img: ''
        }
        // this.increaseQunatity = this.increaseQunatity.bind(this);  -- WAY 2

        this.testing();
    }
    testing() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 1000)
        })
        promise.then(() => {
            this.setState({ Qty: 100 });
            /*  Ths will be asynchronus , will occur all 3  
            this.setState( { Qty : this.state.Qty  + 10});
            this.setState( { Qty : this.state.Qty  + 10});
            this.setState( { Qty : this.state.Qty  + 10}); */

            console.log('this.state', this.state);
        })
    }


    //3rd WAY it automatcally bind 
    increaseQunatity = () => {        //this.state.Qty +=1; 
        /*  //Set State Form 1 way - by Object
        this.setState({
            Qty: this.state.Qty + 1
         })  */


        //Set State Form 2 way - by prev state  using function
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1
            }
        }, () => {
            console.log("this.state ", this.state);

        })

    }

    decreaseQuantity = () => {
        const { Qty } = this.state;
        if (Qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty - 1
            }
        })
    }

    render() {
        // console.log('render');
        const { price, title, Qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>

                        {/* {this.state.title} */}
                        {title}

                    </div>
                    <div style={{ color: '#777' }}>

                        {/* Rs {this.state.price} */}
                        Rs {price}

                    </div>
                    <div style={{ color: '#777' }}>

                        {/* Qty : {this.state.Qty} */}
                        Qty : {Qty}

                    </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            className="action-icons"
                            alt="increase"
                            // onClick={this.increaseQunatity.bind(this)}  -- WAY 1
                            onClick={this.increaseQunatity}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            className="action-icons"
                            alt="decrease"
                            onClick={this.decreaseQuantity}

                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                            className="action-icons"
                            alt="delete"

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        width: 130,
        height: 130,
        background: "#ccc",
        borderRadius: 5,
    }
}

export default CartItem;

