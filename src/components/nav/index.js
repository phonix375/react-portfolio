import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

function Navigation(props){
   const { 
     setCurrentSelection} = props

    function clickHandel(e){

      setCurrentSelection(e.target.name)
    }
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Alexy Kotliar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link name='About' onClick={clickHandel}>About Me</Nav.Link>
          <Nav.Link name='Projects' onClick={clickHandel}>My Projects</Nav.Link>
          <Nav.Link name='Contact' onClick={clickHandel}>Contact</Nav.Link>
          <Nav.Link name='Resume' onClick={clickHandel}>Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default Navigation;