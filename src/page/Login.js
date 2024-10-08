import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  console.log("in-set", {setAuthenticate})
  const navigate = useNavigate()
  const loginUser =(event)=>{
    event.preventDefault();
    console.log("로그인 클릭")
    setAuthenticate(true)
    navigate('/')
  }
  
  return (
    <div> 
      <Container>
      <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="warning" type="submit" onSubmit={loginUser}>
        로그인
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Login
