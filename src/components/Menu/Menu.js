
import React from 'react';
import Checkout from './Checkout/Checkout'

var MenuItem = React.createClass({
    getItems: function() {
      // some request here
      return [{id: 1, description:"Asada meat prepared with hand made tortillas topped with chopped onions and cilantro", name: "Asada Tacos", price: 1.25},
              {id: 2, description:"Marinated pork meat roasted slowly topped with chopped onions and cilantro", name: "Pastor Tacos", price: 1.25},
              {id: 3,description:"Burrito with asada meat, rice and beans", name: "Asada Burrito", price: 6.00},
              {id: 4, description:"Burrito filled with pastor and asada. Stuffed with rice and  beans", name: "Pastor and Asada Burrito", price: 8.00},
              {id: 5, description:"Milanesa torta with lettuce, tomatoes,avocadoes and red sauce", name: "Milanesa Torta", price: 5.00},
              {id: 6, description:"Asada Torta with lettuce, tomatoes, jalapenos", name: "Asada Torta", price: 5.00},
              {id: 7, description:"Homemade flan dessert with extra caramel drizzle", name: "Flan", price:3.50},
              {id: 8, description:"Rice flavored water", name: "Horchata Water", price:2.00},
              {id: 9, description:"Mexican made coke", name: "Mexican Coke (1.5L)", price:2.00}
            ];
    },
    getInitialState: function() {
      return {
        items: this.getItems(),
        cart: [],
        subTotal:[],
        itemTotals:{},

      }
    },
    addToCart: function(item) {
      var found = false;
      var updatedCart = this.state.cart.map((cartItem) => {
        if (cartItem.name == item.name) {
          found = true;
          cartItem.quantity++;
          cartItem.subTotal=cartItem.price*cartItem.quantity;
        
          this.setState({itemTotals : {...this.state.itemTotals, [item.id]: cartItem.subTotal}}, ()=>{ console.log(this.state.itemTotals)})
         
          return cartItem;
        } else {
          return cartItem;
        }
      });
      
      if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1,}) }

      this.setState({
        cart: updatedCart
      });
    },
    render: function(){
        console.log(this.state.subTotal);
      return (
        <div className="row">
            <h1 className="menu">Menu</h1>
            <br/>
            <div className="col-md-4">
            <Cart itemTotals={this.state.itemTotals} cart={this.state.cart} />
            {this.state.subTotal}
            <Checkout name={this.props.name} description={this.props.description} amount={this.props.subTotal} />
            </div>

            <div className="col-md-8 Products">  
              {this.state.items.map((item) => {
                return <Product key={item.id} details={item} addToCart={this.addToCart} />
              })}
            </div>
        </div>
      );
    }
  });
  
  class Cart  extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        open: true
      }
    }
    openCart = () =>{
      this.setState({
        open: !this.state.open
      })
    }
    render() {
      return (
        <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
          <p className="Title">Cart</p>
          <div>
          {this.props.cart.length > 0 ? this.props.cart.map((item) => {
            return <p key={item.id}>{item.name}{item.quantity > 1 ? <span> {item.quantity} {this.props.itemTotals[item.id]}</span> : ''}</p> }) : <p>Empty</p>}
          </div>
        </div>
      );
    }
  };
  
  var Product = React.createClass({
    addToCart: function() {
      this.props.addToCart(this.props.details);
    },
    render: function() {
      let item = this.props.details;
      return (
        <div className="Product" onClick={this.addToCart}>
          <h4>{item.name}</h4>
          <h5>{item.description}</h5>
          <h5>{item.price}</h5>
          
        </div>
      );
    }
  });
  


export default MenuItem;