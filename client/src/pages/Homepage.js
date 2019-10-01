import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Dashboard from "../components/Dashboard/dashboard";

function Homepage() {
  return (
    <div>
    <Dashboard></Dashboard>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Homepage</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Homepage;
