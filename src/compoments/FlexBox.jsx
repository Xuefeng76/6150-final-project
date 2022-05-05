import React from "react";
import { Row, Col } from 'antd';
import "../styles/FlexBox.css"
const FlexBox = () => {

  return (
    <Row className="Row1">
      <Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="d1" >
        <img src={require('../img/search.jpg')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <a><button>Search Homes</button></a>
      </div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <div className="d2" >
        <img src={require('../img/search.jpg')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <a><button>Search Homes</button></a>
        </div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <div className="d3">
        <img src={require('../img/search.jpg')} className="img1"/>
        <h2>Buy a home</h2>
        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
        <a><button>Search Homes</button></a>
        </div>
      </Col>
    </Row>);
}
export default FlexBox;