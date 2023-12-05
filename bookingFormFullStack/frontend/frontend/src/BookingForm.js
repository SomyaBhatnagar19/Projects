import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function BookingForm() {
  return (
    <Container>
      <h5 className="mb-4">Booking Appointment Form:</h5>
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
              <Form.Control type="number" placeholder="Enter your phone number" />
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

        <Row className="justify-content-end">
          <Col xs={3}>
            <Button variant="success" type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>

        <hr />
      </Form>
    </Container>
  );
}

export default BookingForm;
