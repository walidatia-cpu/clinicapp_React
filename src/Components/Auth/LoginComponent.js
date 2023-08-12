import React from 'react'
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap'
import Loginhook from '../../hook/Auth/loginhook';

const LoginComponent = () => {
    const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] = Loginhook();
    return (
      <div>
  <Card>
  <Card.Header>Login</Card.Header>
  <Card.Body>
    <Card.Title>Welocm Doctor</Card.Title>
    <Card.Text>
    <div>
    <Form.Group>
      <Form.Label>UserName</Form.Label>
      <Form.Control type="email" placeholder="Enter email" className='mw-1' value={email} onChange={onChangeEmail} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  value={password} onChange={onChangePassword} placeholder="Password" className='mw-1' />
    </Form.Group>
  </div>
    </Card.Text>
    <Button variant="primary" type="submit" onClick={onSubmit}>Login</Button>
    {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">
  
  </Spinner>) : null) : null}
  
  </Card.Body>
  </Card>
  </div>
  
    )
}

export default LoginComponent
