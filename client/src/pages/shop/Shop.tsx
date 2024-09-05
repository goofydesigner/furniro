import './shop.scss';
import Navbar from '../../components/navbar/navbar';
import Pagination from 'react-bootstrap/Pagination';
import { Card, Row, Col, } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

import product1 from '../../assets/Products_images/Syltherine.png'
import product2 from '../../assets/Products_images/Lolito.png'
import product3 from '../../assets/Products_images/Respira.png'
import product4 from '../../assets/Products_images/Potty.png'
import product5 from '../../assets/Products_images/Pingky.png'
import product6 from '../../assets/Products_images/Muggo.png'
import Footer from '../../components/footer/Footer';

import filtering from '../../assets/Icons/Filtering.png'
import gridRound from '../../assets/Icons/Grid-round.png'
import viewList from '../../assets/Icons/View-list.png'
import Promise from '../../components/our_promise/Promise';




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


            {/* <div className="filters">
                <div className="filter-section" style={{ marginLeft: '10rem' }}>
                    

                    <button className="filter-options-button">
                        <img src={gridRound} alt="" />
                    </button>

                    <button className="filter-options-button">
                        <img src={viewList} alt="" />
                    </button>

                    <div className="vertical-line" style={{ marginLeft: '1rem' }}>
                        <img src="" alt="" />
                    </div>

                    <div className="results-section" style={{ marginLeft: '1rem', fontSize: '1.2rem', fontStyle: 'italic' }}>
                        <span>Showing 1-16 of 32 results</span>
                    </div>
                </div>


                <div className="pagination-section" style={{ marginRight: '10rem' }}>
                    <div className="show-items" style={{ gap: '0.8rem', marginRight: '2rem' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>Show</span>
                        <div className='item-count'>
                            <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                                {9}
                            </span>
                        </div>
                    </div>
                    <span className="sort-by-button" style={{ fontSize: '1.2rem', fontWeight: 500 }}>Sort by</span>

                    <Dropdown style={{ gap: '0.8rem', marginRight: '2rem', }}>
                        <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#fff', border: 'none', color: 'black' }}>
                            Default Option
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Option</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
            </div> */}

            <div className="filters">
                <div className="leftDetails">
                    <ul>
                        <li>
                            <a href="">
                                <img src={filtering} alt="" />
                            </a>
                        </li>

                        <li>
                            <span>Filter</span>
                        </li>

                        <li>
                            <a href="">
                                <img src={gridRound} alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img src={viewList} alt="" />
                            </a>
                        </li>

                        <li>
                            <div className='vrtcLine'>
                                <img src="" alt="" />
                            </div>
                        </li>

                        <li>
                            <span>Showing 1–16 of 32 results</span>
                        </li>
                    </ul>
                </div>

                <div className="rightDetails">
                    <ul>
                        <li>
                            <span>Show</span>
                        </li>

                        <li>
                            <div className='showResult'>
                                16
                            </div>
                        </li>

                        <li>
                            <span>Short by</span>
                        </li>

                        <li>
                            <div className='shortDropdwn'>
                                <Dropdown style={{ gap: '0.8rem', marginRight: '2rem'}}>
                                <Dropdown.Toggle id="dropdown-basic">
                                        Default Option
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another Option</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </li>
                    </ul>
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

            <div className="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem', marginBottom: '4rem' }}>

                <button className="page-1" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                    <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        {1}
                    </span>
                </button>

                <button className="page-2" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                    <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        {2}
                    </span>
                </button>

                <button className="page-3" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                    <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        {3}
                    </span>
                </button>

                <button className="More" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3.5rem', border: 'none', borderRadius: '25%' }}>
                    <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        {"More"}
                    </span>
                </button>

            </div>

            <Promise />

            <Footer />






        </>
    );
};

export default Shop;

