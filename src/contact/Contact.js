import Button from '@restart/ui/esm/Button';
// import {emailjs } from 'emailjs-com';
import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';

// export default function ContactUs() {
    
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset()
    // };
const Contact = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        
        <div className="w-75 container">
            <Form >
            <div class="row">
             <div className="bg-dark icons-container mb-5 d-flex text-center p-5 border-5 rounded-3">
          <div className="col-md-8 mt-4 text-white ">  <Form.Label>Name</Form.Label>
    <Form.Control className="mb-3 border border-3 border-primary rounded-5" type="text" placeholder="Type name" />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control className="mb-3 border border-3 border-primary rounded-5" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group></div>
          <div class="col-md-4 m-4 text-white">
        
  <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Send Commens</Form.Label>
    <Form.Control className="mb-3 border border-3 border-primary rounded-5" as="textarea" rows={3} />
  </Form.Group>
  <Button className="mb-5 bg-primary border border-2 rounded-3 p-2 text-white" variant="primary"  onClick={handleShow} type="submit">
    Submit
  </Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">Submit Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-4"> Submitted Successfully </Modal.Body>
      </Modal></div>
        </div>
      </div>  
    
</Form>
</div>
     
    );
};

export default Contact;