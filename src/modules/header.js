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
            <NavItem>lonche home
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/video">
            <NavItem>Video</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
          <LinkContainer to="/search">
            <NavItem>Search</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <NavItem>Gallery</NavItem>
          </LinkContainer>
        </Nav>
          
        <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem>Sign Up</NavItem>
            </LinkContainer>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  </div>
)
export default Header;