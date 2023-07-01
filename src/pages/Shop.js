import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SwitchBar from '../components/SwitchBar';
import ProductList from '../components/ProductList';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <SwitchBar />
        </Col>
        <Col md={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
