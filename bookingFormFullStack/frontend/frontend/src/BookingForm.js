import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookingForm() {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
      e.preventDefault();
      axios
      .post("http://localhost:3000/BookingForm", { username, phone, email })
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err))
    }

  return (

    <div className="bg-dark vh-100 d-flex align-items-center justify-content-center">
      <Container className="bg-light mt-5 mb-5 border rounded p-4">
        <h5 className="text-center mb-4">Booking Appointment Form</h5>
        <hr />
        <Form onSubmit={handleSubmitForm}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" 
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="phone">
                <Form.Label>Phone No.:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={e => setPhone(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="emailid">
                <Form.Label>Email Id:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" 
                   onChange={e => setEmail(e.target.value)}  
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-end">
            <Col xs={3}>
              <Button variant="success" type="submit" block>
                Add Appointment
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default BookingForm;
