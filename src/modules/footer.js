import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {Navbar,Nav, Glyphicon} from 'react-bootstrap'

const Footer = () => 
(
  <footer className="footer">     
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <div className="copyright">
              <Glyphicon glyph="glyphicon glyphicon-copyright-mark" /> 2017 Loncherita - Group Red
            </div>
          </Nav>
          <Nav pullRight>
          <SocialIcon url="http://facebook.com" />
          <SocialIcon url="http://twitter.com" />
          <SocialIcon url="http://youtube.com" />
          <SocialIcon url="https://www.linkedin.com" />
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </footer>
)
export default Footer;