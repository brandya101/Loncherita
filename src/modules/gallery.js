import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Thumbnail, Grid,Row, Col, Button} from 'react-bootstrap'

// import custom lib
import product from '../images/product.png'
import Paginations from './paginations'
import MenuItem from '../components/shoppingCart/Cart'

class Product extends React.Component { 
    render() { 
        return ( 
            <img src={product} alt={"product"}/> 
        )  
    }
}

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <MenuItem />
            </div>
        );
    }
};


export default Gallery;