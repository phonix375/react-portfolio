import React from 'react';
import {Container,Form,Button } from 'react-bootstrap';

function Contact(){
    function handleChange(e){
        console.log(e.target.value);
    }
    return(
        <Container>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onBlur={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</Container>

    )
}

export default Contact;