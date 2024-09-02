import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import Navbar from '../../components/navbar/navbar'
import './comparison.scss'
import img1 from "../../assets/Products_images/Sofa/Sofa_2.png"
import Promise from '../../components/our_promise/Promise'
import Footer from '../../components/footer/Footer'

export default function Comparison() {
    return (
        <div className='comparison-main'>
            <Navbar />

            <div className="comparison-banner">
                <h1>Product Comparison</h1>
                <h2>Home {'>'} Comparison</h2>
            </div>

            <div className='selected-item-comparison'>

                <div className='text-viewMore'>
                    <div className='text'>
                        <h4>Go to Product page for more Products</h4>
                    </div>

                    <div className='vMore-link'>
                        <a href="#">View More</a>
                    </div>
                </div>

                <div className='item1'>
                    <div className='image'>
                        <img src={img1} alt="" />
                    </div>

                    <div className='product-details'></div>

                </div>


                <div className='item2'>
                    <div className='image'>
                        <img src={img1} alt="" />
                    </div>

                    <div className='product-details'>

                    </div>
                </div>



                <div className='add-product'>
                    <h4>Add A Product</h4>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ border: 'none', backgroundColor: '#B88E2F', width: '13vmax', fontSize: '1vmax' }}>
                                Choose a Product
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: '13vmax', fontSize: '1vmax' }}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

            </div>

            <div className='detail-comper'>
                <Container className="product-comparison">
                    <Row style={{ marginTop: '6vmax' }}>
                        <Col>

                            <tr>
                                <h4>General</h4>
                            </tr>
                            <tr>
                                <p>Sales Package</p>
                            </tr>
                            <tr>
                                <p>Model Number</p>
                            </tr>
                            <tr>
                                <p>Secondary Material</p>
                            </tr>
                            <tr>
                                <p>Configuration</p>
                            </tr>
                            <tr>
                                <p>Upholstery Material</p>
                            </tr>
                            <tr>
                                <p>Upholstery Color</p>
                            </tr>

                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>

                            <tr>
                                <p>1 sectional sofa</p>
                            </tr>

                            <tr>
                                <p>TFCBLIGRBL6SRHS</p>
                            </tr>

                            <tr>
                                <p>Solid Wood</p>
                            </tr>

                            <tr>
                                <p>L-shaped</p>
                            </tr>

                            <tr>
                                <p>Fabric + Cotton</p>
                            </tr>

                            <tr>
                                <p>Bright Grey & Lion</p>
                            </tr>

                        </Col>

                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>

                            <tr>
                                <p>1 Three Seater, 2 Single Seater</p>
                            </tr>

                            <tr>
                                <p>DTUBLIGRBL568</p>
                            </tr>

                            <tr>
                                <p>Solid Wood</p>
                            </tr>

                            <tr>
                                <p>L-shaped</p>
                            </tr>

                            <tr>
                                <p>Fabric + Cotton</p>
                            </tr>

                            <tr>
                                <p>Bright Grey & Lion</p>
                            </tr>

                        </Col>

                        <Col></Col>
                    </Row>


                    <Row>
                        <Col>
                            <tr><h4>Product</h4></tr>
                            <tr>
                                <p>Filling Material</p>
                            </tr>
                            <tr>
                                <p>Finish Type</p>
                            </tr>
                            <tr>
                                <p>Adjustable Headrest</p>
                            </tr>
                            <tr>
                                <p>Maximum Load Capacity</p>
                            </tr>
                            <tr>
                                <p>Origin of Manufacture</p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>Foam</p>
                            </tr>
                            <tr>
                                <p>Bright Grey & Lion</p>
                            </tr>
                            <tr>
                                <p>No</p>
                            </tr>
                            <tr>
                                <p>280 KG</p>
                            </tr>
                            <tr>
                                <p>India</p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>Matte</p>
                            </tr>
                            <tr>
                                <p>Bright Grey & Lion</p>
                            </tr>
                            <tr>
                                <p>Yes</p>
                            </tr>
                            <tr>
                                <p>300 KG</p>
                            </tr>
                            <tr>
                                <p>India</p>
                            </tr>
                        </Col>

                        <Col></Col>
                    </Row>

                    <Row>
                        <Col>
                            <tr><h4>Dimensions</h4></tr>
                            <tr>
                                <p>Width</p>
                            </tr>
                            <tr>
                                <p>Height</p>
                            </tr>
                            <tr>
                                <p>Depth</p>
                            </tr>
                            <tr>
                                <p>Weight</p>
                            </tr>
                            <tr>
                                <p>Seat Height</p>
                            </tr>
                            <tr>
                                <p>Leg Height</p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>265.32 cm</p>
                            </tr>
                            <tr>
                                <p>76 cm</p>
                            </tr>
                            <tr>
                                <p>167.76 cm</p>
                            </tr>
                            <tr>
                                <p>45 KG</p>
                            </tr>
                            <tr>
                                <p>41.52 cm</p>
                            </tr>
                            <tr>
                                <p>5.46 cm</p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>265.32 cm</p>
                            </tr>
                            <tr>
                                <p>76 cm</p>
                            </tr>
                            <tr>
                                <p>167.76 cm</p>
                            </tr>
                            <tr>
                                <p>65 KG</p>
                            </tr>
                            <tr>
                                <p>41.52 cm</p>
                            </tr>
                            <tr>
                                <p>5.46 cm</p>
                            </tr>
                        </Col>

                        <Col></Col>
                    </Row>


                    <Row>
                        <Col>
                            <tr><h4>Warranty</h4></tr>
                            <tr>
                                <p>Warranty Summary</p>
                            </tr>
                            <tr>
                                <p>Warranty Service Type</p>
                            </tr>
                            <tr>
                                <p>Covered in Warranty</p>
                            </tr>
                            <tr>
                                <p>Not Covered in Warranty</p>
                            </tr>
                            <tr>
                                <p>Domestic Warranty</p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>1 Year Manufacturing Warranty</p>
                            </tr>
                            <tr>
                                <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                            </tr>
                            <tr>
                                <p>Warranty Against Manufacturing Defect</p>
                            </tr>
                            <tr>
                                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                            </tr>
                            <tr>
                                <p>1 Year</p>
                            </tr>
                            <tr>
                                <p>
                                    <button className="btnfilled">Explore More</button>
                                </p>
                            </tr>
                        </Col>
                        <Col>
                            <tr>
                                <h4><br /></h4>
                            </tr>
                            <tr>
                                <p>1.2 Year Manufacturing Warranty</p>
                            </tr>
                            <tr>
                                <p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                            </tr>
                            <tr>
                                <p>Warranty of the product is limited to manufacturing defects only.</p>
                            </tr>
                            <tr>
                                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                            </tr>
                            <tr>
                                <p>3 Months</p>
                            </tr>
                            <tr>
                                <p>
                                    <button className="btnfilled">Explore More</button>
                                </p>
                            </tr>
                        </Col>

                        <Col></Col>
                    </Row>
                </Container>
            </div>

            <Promise/>
            
            <Footer/>
        </div>
    )
}
