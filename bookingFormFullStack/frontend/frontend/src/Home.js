import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-dark vh-100 d-flex align-items-center justify-content-center">
      <Container className="bg-light border rounded p-3 text-center">
        <div className="mb-3">
          <div className="d-flex align-items-center">
            <h3>Details:</h3>
            <Link to="/BookingForm" className="btn btn-success ml-3 d-flex ms-auto">
              Add
            </Link>
          </div>
        </div>
        <hr />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email Id</th>
              <th>Functionalities</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  
                  <Link to={`/UpdateForm/${item.id}`} className="btn btn-primary btn-sm mr-2">
                    Update
                  </Link>
                  <Button variant="danger" className="btn-sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
