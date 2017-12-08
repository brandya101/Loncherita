import React, {Component} from 'react';

const getItems = [{id: 1, name: "Asada Burrito", price: 4.00},
            {id: 2, name: "Milanesa Torta", price: 5.00},
            {id: 3, name: "Mushroom Quesadilla", price: 6.00}];

class MenuItem extends Component{
    
    constructor(item) {
        super(item);
        this.state={cart:[],
        items:[{id: 1, name: "Asada Burrito", price: 4.00},
        {id: 2, name: "Milanesa Torta", price: 5.00},
        {id: 3, name: "Mushroom Quesadilla", price: 6.00}]
        };
    }
   

    
    addToCart=(item)=> {
      var found = false;
      var updatedCart = this.state.cart.map((cartItem) => {
        if (cartItem.name == item.name) {
          found = true;
          cartItem.quantity++;
          return cartItem;
        } else {
          return cartItem;
        }
        if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }

        this.setState({
            cart: updatedCart
          });
      });
      
     


    }
    render(){

       
      return (
        <div>
          <nav>
            <h3>Products</h3>
            <Cart cart={this.state.cart} />
          </nav>
            <div className="Products">  
              {this.state.items.map((item) => {
                return <Product details={item} addToCart={this.addToCart} />
              })}
            </div>
        </div>
      );
    }
  };
  
  class Cart extends Component{
      constructor(prop){
          super(prop)

          this.state={open:false}
      }
   
    openCart = ()=> {
      this.setState({
        open: !this.state.open
      })
    }

    render(){
      return (
        <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
          <p className="Title">Cart</p>
          <div>
          {this.props.cart.length > 0 ? this.props.cart.map((item) => {
            return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
          </div>
        </div>
      );
    }
  }
  
  class Product extends Component{
    addToCart=()=> {
      this.props.addToCart(this.props.details);
    }
    render() {
      let item = this.props.details;
      return (
        <div className="Product" onClick={this.addToCart}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      );
    }
  };
  
  
export default MenuItem; 