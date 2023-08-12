import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';

const HomeBody = () => {
  
  return (
    <div>
      <Card className="text-center">
  <Card.Header>New Featured</Card.Header>
  <Card.Body>
    <Card.Title>Welcom To Clinic App</Card.Title>
    <Card.Text>
    You can manage your patients
    </Card.Text>
    {
        (
          localStorage.getItem("token")==="" ||localStorage.getItem("token")=="" || localStorage.getItem("token")===null?
          <Link to="login" className="btn btn-primary">Let's go</Link>:
          <Link to="Patient"  className="btn btn-primary">Let's go</Link>
        )
      }
 
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
    </div>
  )
}

export default HomeBody
