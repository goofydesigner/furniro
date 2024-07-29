import './shop.scss';
import Navbar from '../../components/navbar/navbar';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import { Card, Row, Col, } from 'react-bootstrap';


import product1 from '../../assets/Products_images/Syltherine.png'
import product2 from '../../assets/Products_images/Lolito.png'
import product3 from '../../assets/Products_images/Respira.png'
import product4 from '../../assets/Products_images/Potty.png'
import product5 from '../../assets/Products_images/Pingky.png'
import product6 from '../../assets/Products_images/Muggo.png'
import Footer from '../../components/footer/Footer';



const Shop = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <>
            <Navbar />

            <div className="shop-container">
                <div className="shop-banner">

                    <h1>Shop</h1>
                    <h2>Home {'>'} Shop</h2>
                </div>
            </div>

            <div className="filter-and-pagination">
                <div className="filter-section">
                    {/* Filter icons or text */}
                </div>
                <div className="pagination-section">
                    <span>Showing 1-16 of 32 results</span>
                    <button>Show: 16</button>
                    <button>Short by:</button>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" style={{ color: 'black' }}>
                            Default
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="sorting-section">
                    {/* Sorting options */}
                </div>
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

            
            </div>

            <Footer/>






        </>
    );
};

export default Shop;

