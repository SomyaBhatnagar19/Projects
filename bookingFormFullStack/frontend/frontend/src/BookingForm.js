import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function BookingForm() {
  return (
    <div className="bg-dark vh-100 d-flex align-items-center justify-content-center">
      <Container className="bg-light mt-5 mb-5 border rounded p-4">
        <h5 className="text-center mb-4">Booking Appointment Form</h5>
        <hr />
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
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
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="emailid">
                <Form.Label>Email Id:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
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
