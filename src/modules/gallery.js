import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Thumbnail, Grid,Row, Col, Button} from 'react-bootstrap'

// import custom lib
import product from '../images/product.png'
import Paginations from './paginations'

class Product extends React.Component { 
    render() { 
        return ( 
            <img src={product} alt={"product"}/> 
        )  
    }
}
const Gallery = () => (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
    </Row>
    <div>
      <Paginations className="paginations"/>
    </div>
  </Grid>
)
export default Gallery;