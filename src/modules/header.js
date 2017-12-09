import React from 'react'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,NavItem} from 'react-bootstrap'; //,Glyphicon,InputGroup,FormGroup, FormControl
import Logo from '../images/logo.png'


const Header = () => (
  <div>    
      <img id="logo" src={Logo} alt="logo"/>

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>LONCHERITA
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/search">
            <NavItem>SEARCH</NavItem>
          </LinkContainer>
          <LinkContainer to="/video">
            <NavItem>VIDEO</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>CONTACT</NavItem>
          </LinkContainer>
          
        </Nav>
          
        <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>LOGIN</NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem>SIGN UP</NavItem>
            </LinkContainer>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  </div>
)
export default Header;