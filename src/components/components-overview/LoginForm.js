import React,{useState,useEffect} from "react";
import services from "../../API/services";
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
import { useHistory } from "react-router-dom";
   import { useSignIn } from "react-auth-kit";
import Cookie from "js-cookie"


const RegisterForm = () => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const history = useHistory();
const signIn = useSignIn();

const handleSubmit =async (e) =>{
  try{
e.preventDefault();
const request = {
  email:email,
  password:password
}
  const res = await services.auth.userEmailLoginService(request);
  
  if(res.status == 200){ 
    signIn({
    token:res.data.tokens.access.token,
    expiresIn:3600,
    tokenType:"Bearer",
    authState:res.data.user
  })
  
   history.push("/create-a-contract");
   var my =JSON.parse(Cookie.get('_auth_state'));
  console.log(my.name,"hutu");
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
          <Form>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                   value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </Col>
            </Row>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                    
                />
              </Col>
            </Row>

            <Button type="submit" onClick = {handleSubmit}>Login</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);
}

export default RegisterForm;
