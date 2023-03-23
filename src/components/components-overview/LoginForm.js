import React, { useState, useEffect } from 'react'
import services from '../../api/services'
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button,
} from 'shards-react'
import { useSignIn } from 'react-auth-kit'
import { useHistory } from 'react-router-dom'
import Cookie from "js-cookie"

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const signIn = useSignIn()
  const history = useHistory()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const request = {
        email: email,
        password: password,
      }
      const res = await services.auth.userEmailLoginService(request)

      signIn({
        token: res.data.tokens.access.token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: res.data.user,
      })
     window.location.href = '/create-a-contract';
    } catch (error) {
      console.log(error)
      if (error.status !== 200) {
        setError(error.message);
        setTimeout(() => {
          setError('');
        }, 2000)
      }
    }
  }

  useEffect(() => {
    const data = Cookie.get('_auth_state');
    if(data){
      history.push('/create-a-contract');
    }
  })

  return (
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
              {error}
              <Button type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}

export default RegisterForm
