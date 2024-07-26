import React, { useEffect } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import '../home/home.scss'
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';

import Dining from '../../assets/Browse_Dining.png'
import Living from '../../assets/Browse_Living.png'
import Bedroom from '../../assets/Browse_Bedroom.png'


function Home() {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user]);

  const onClickSignOut = async (event) => {
    event.preventDefault();

    const result = await signOutUser();
    if (result.success) {
      navigate('/signin');
    } else {
      console.error(result.err);
    }
  };
  return (
    <>
      <div className='img-navbar overflow-hidden'>
        <Navbar />

        <div className="home-main" />
      </div>

      <div className='Browse txt'>

        <h1>Browse The Range</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

      </div>

      <div className='Showcase'>
        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0' style={{ width: '28rem' }}>
              <Card.Img src={Dining} />
              <Card.Body>
                <Card.Title className='text-center'>Dining</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0' style={{ width: '28rem' }}>
              <Card.Img src={Living} />
              <Card.Body>
                <Card.Title className='text-center'>Living</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0' style={{ width: '28rem' }}>
              <Card.Img src={Bedroom} />
              <Card.Body>
                <Card.Title className='text-center'>Bedroom</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className='Product txt'>
        <h1>Our Products</h1>
      </div>

      <div className='Product_lst'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>






      <Button className='align-items-center' onClick={onClickSignOut} variant="warning">Sign Out!</Button>

    </>
  );
}

export default Home;
