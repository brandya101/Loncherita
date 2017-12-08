import React from 'react'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,NavItem} from 'react-bootstrap'; //,Glyphicon,InputGroup,FormGroup, FormControl

const Header = () => (
  <div>    
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
          <LinkContainer to="/video">
            <NavItem>VIDEO</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>CONTACT</NavItem>
          </LinkContainer>
          <LinkContainer to="/search">
            <NavItem>SEARCH</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <NavItem>ORDER</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>LOGIN</NavItem>
          </LinkContainer>
          <LinkContainer to="/signup">
            <NavItem>SIGN UP</NavItem>
          </LinkContainer>
        </Nav>
          
          {/*<Nav pullRight>
            <Navbar.Form className="right-nav">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                <FormControl type="text" style={{width:'125px'}} placeholder="Search..." />
              </InputGroup>
            </FormGroup>
            </Navbar.Form>
          </Nav>*/}

      </Navbar.Collapse>
    </Navbar>
  </div>
)
export default Header;