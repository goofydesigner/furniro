import { Col, Row } from 'react-bootstrap';
import Navbar from '../../components/navbar/navbar';
import './cart.scss'

function Cart() {
    return (
        <>
            <div className="cart-main">
                <Navbar />

                <div className="cart-banner">
                    <h1>Cart</h1>
                    <h2>Home {'>'} Cart</h2>
                </div>

                <div className="bill-generate">
                    <Row>
                        <Col md={8}>
                            <div className="cart-items">
                                <img src="" alt="" />
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="cart-total">
                                <img src="" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Cart;