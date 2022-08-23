import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

    <div className='row'>

    <Card  className='cardbody' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="d.jpg"  /> */}
      <Card.Body>
        <Card.Title>Hi</Card.Title>
        {/* <Card.Text>
          Doctors List In Thalassery and All Details
        </Card.Text> */}
        <Link to='/doctors'>
        <Button variant="dark"><Link to='/form'>Proceed</Link></Button>
        <Button variant="dark"><Link to='/'>Leave</Link></Button>
        </Link>
      </Card.Body>
    </Card>
        

    </div>

    </>
  )
}

export default Home