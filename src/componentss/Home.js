import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Home.css'
import { Row } from 'react-bootstrap';
import logo from './dubai.jpg'

function Home() {
  return (
    <>
    <Row className='row'>
    <Card  className='cardbody' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img1' src={logo}  />
      <Card.Body>
        <Card.Title> How are you!!
        </Card.Title>
        {/* <Card.Text>
          Doctors List In Thalassery and All Details
        </Card.Text> */}
        <Link to='/doctors'>
        <Button variant="dark" className='btn1'><Link to='/form' className='link'>Proceed</Link></Button>
        <Button variant="dark" className='btn1'><Link to='/' className='link'>Leave</Link></Button>
        </Link>
      </Card.Body>
    </Card>

    </Row>
        

    

    </>
  )
}

export default Home