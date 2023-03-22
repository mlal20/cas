import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
} from "shards-react";

const RegisterForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6">
                <label htmlFor="fePassword">Full Name</label>
                <FormInput
                  id="fePassword"
                  type="text"
                  placeholder="Full Name"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                />
              </Col>
            </Row>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="fePassword">Confirm Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Col>

              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button type="submit">Create New Account</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default RegisterForm;
