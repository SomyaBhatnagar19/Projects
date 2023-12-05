import React, { useState } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import BookingForm from "./BookingForm";

function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="bg-dark vh-100 d-flex align-items-center justify-content-center">
      <Container className="bg-light border rounded p-3 text-center">
        <Row className="mb-3">
          <Col className="d-flex align-items-center">
            <h3>Details:</h3>
            <Button variant="success" onClick={openBookingForm} className="ml-3">
              Add User +
            </Button>
          </Col>
        </Row>
        <hr />
        {showBookingForm && <BookingForm />}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email Id</th>
            </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
