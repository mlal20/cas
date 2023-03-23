import React , { useEffect, useState } from "react";
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
import services from "../../API/services";
import { useHistory } from "react-router-dom";

const RegisterForm = () =>{
  const [fname, setFname] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const history = useHistory();
  const handleSubmit =async (e) =>{
    try{
    e.preventDefault();
    const req ={
      name:fname,
      email:email,
      password:password
    }
    
    const response = await services.auth.userRegisterService(req);
    console.log(response)
    if(response.status == 201){
    history.push("/create-a-contract");
    }
  }
  catch(error){
    console.log(error)
  }
}
    
 return( 
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form >
            <Row form>
              <Col md="6">
                <label htmlFor="fePassword">Full Name</label>
                 {/* {console.log("User", user)} */}
                <FormInput
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                   onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="fePassword">Confirm Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={rePassword}
                   onChange={(e) => setRePassword(e.target.value)}
                />
              </Col>

              <Col md="12" className="form-group">
                <FormCheckbox>
                 I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button onClick={handleSubmit}>Create New Account</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);
 }

export default RegisterForm;
