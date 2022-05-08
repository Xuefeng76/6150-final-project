import React from "react";
import { Row, Col } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import "../styles/FlexBox.css"
const FlexBox = () => {

  return (
    <Row className="Row1">
      <Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="d1" >
        <img src={require('../img/Buy_a_home.webp')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <button className="bt1"><Link to="/Sell"  className="l1">Sell</Link></button>
      </div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <div className="d1" >
        <img src={require('../img/Rent_a_home.webp')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <button className="bt1"><Link to="/Rent"  className="l1">Rent</Link></button>
        </div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <div className="d1">
        <img src={require('../img/Sell_a_home.webp')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <button className="bt1"><Link to="/Buy" className="l1">Buy</Link></button>
        </div>
      </Col>
    </Row>);
}
export default FlexBox;