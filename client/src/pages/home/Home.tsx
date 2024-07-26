import { useEffect } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import '../home/home.scss'
import { Card, Row, Col, } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


import Dining from '../../assets/Browse_Dining.png'
import Living from '../../assets/Browse_Living.png'
import Bedroom from '../../assets/Browse_Bedroom.png'

import product1 from '../../assets/Products_images/Syltherine.png'
import product2 from '../../assets/Products_images/Lolito.png'
import product3 from '../../assets/Products_images/Respira.png'
import product4 from '../../assets/Products_images/Potty.png'
import product5 from '../../assets/Products_images/Pingky.png'
import product6 from '../../assets/Products_images/Muggo.png'

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

        <div className="home-main">
          <Row>
            <Col md={6}></Col>

            <Col md={6}>
              <div className="Discover">

                  <div className='new-arrival'>New Arrival</div>
                  <h1>Discover Our</h1>
                  <h1> New Collection</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. </p>

                  <button className="buy-now-btn">Buy Now</button>
              
              </div>
            </Col>
          </Row>

        </div>

      </div>

      <div className='Browse txt'>
        <h1>Browse The Range</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>

      <div className='Showcase'>
        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={Dining} />
              <Card.Body>
                <Card.Title className='text-center'>Dining</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={Living} />
              <Card.Body>
                <Card.Title className='text-center'>Living</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={Bedroom} />
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

      <div className='Products'>
        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product1} />
              <Card.Body>
                <Card.Title>Syltherine</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product2} />
              <Card.Body>
                <Card.Title>Leviosa</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product3} />
              <Card.Body>
                <Card.Title>Lolito</Card.Title>
                <Card.Text>Luxury big sofa</Card.Text>
                <Card.Title>Rp 7.000.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product4} />
              <Card.Body>
                <Card.Title>Respira</Card.Title>
                <Card.Text>Outbar Table and stoll</Card.Text>
                <Card.Title>Rp 500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product5} />
              <Card.Body>
                <Card.Title>Syltherine</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product6} />
              <Card.Body>
                <Card.Title>Leviosa</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product1} />
              <Card.Body>
                <Card.Title>Lolito</Card.Title>
                <Card.Text>Luxury big sofa</Card.Text>
                <Card.Title>Rp 7.000.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className='border-0'>
              <Card.Img className='card-img' src={product2} />
              <Card.Body>
                <Card.Title>Respira</Card.Title>
                <Card.Text>Outbar Table and stoll</Card.Text>
                <Card.Title>Rp 500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="button-container">
          <button className="showmorebtn">Show More!</button>
        </div>
      </div>


      <div className='carousal-container'>
        <Row>

          <Col md={5} className="my-3 d-flex justify-content-center">
            <div className='left-text'>
              <span>50+ Beautiful rooms inspiration</span>
              <h1>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h1>

              <button className="btnfilled">Explore More</button>

            </div>
          </Col>

          <Col md={7} className="my-3 d-flex justify-content-center">

          </Col>

        </Row>
      </div>






      <div className=" my-5 button-container">
        <button onClick={onClickSignOut} className="showmorebtn">SIGN OUT!</button>
      </div>



    </>
  );
}

export default Home;
