import React from "react";
import { Container, Row, Col, Card, CardHeader } from "shards-react";

import RegisterForm from "../components/components-overview/RegisterForm";

const Register = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row className="py-4">
        <Col lg="2" className="mb-4"></Col>
        <Col lg="6" className="mb-4">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Registration</h6>
            </CardHeader>
            <RegisterForm />
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Register;
