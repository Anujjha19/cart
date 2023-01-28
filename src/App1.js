import React from 'react'
// import CartItem from './CartItem'
import Cart from './Cart1'
import Navbar from './Navbar1'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
          id: 1,
        },
        {
          price: 499,
          title: 'Watch',
          qty: 10,
          img: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=400',
          id: 2,
        },
        {
          price: 1999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
          id: 3,
        },
      ],
    }
    //this.increaseQuantity= this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    products[index].qty += 1
    this.setState({
      products,
    })

    // console.log("increase Quantity ")
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)

    if (products[index].qty === 0) {
      return alert('You successfully removed all your products ')
    } else {
      products[index].qty -= 1
      this.setState({
        products,
      })
    }
    console.log('Decrease Quantity ')
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state
    const items = products.filter((item) => item.id !== id)

    this.setState({
      products: items,
    })
  }
  getCartCount =() =>    {
    const {products}  =this.state;
    let count =0;
    
  products.forEach((product) => {
    count+= product.qty;
  })

    return count;
  }

  getCartTotal =() => {
    const {products}  =this.state;
    let cartTotal =0;

  products.map((product) => 
  {
    cartTotal =cartTotal  + product.qty * product.price 
    return cartTotal;

  })
  }

  render() {
    const { products} = this.state;
    return (
      <div className="App">

        <Navbar 
        count={ this.getCartCount()}
        />
        {/* <CartItem /> */}

        <Cart 
        products ={ products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}

        />
        <div style={{padding : 10 , fontSize :20 }}> TOTAL : {this.getCartTotal()} </div>
      </div>
    )
  }
}

export default App
