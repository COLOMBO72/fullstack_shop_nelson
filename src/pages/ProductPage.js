import React from 'react';
import { Container, Image, Col, Row, Card, Button } from 'react-bootstrap';
import star from '../assets/BigStar.png';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Prada bag',
    price: 293000,
    rating: 10,
    img: 'https://image.goxip.com/bW9Eb1VEio-ulsuvCSm0YRmUxmo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2F%2Fimages%2FPrada-Re-Edition-Shoulder-Bag-Mini-Nylon-Black.jpg',
  };
  const description = [
    { id: 1, title: 'Color', descr: 'black' },
    { id: 2, title: 'Size', descr: 'Little' },
    { id: 3, title: 'Material', descr: 'Crocodile leather' },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={product.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{product.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {product.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>{product.price} руб.</h3>
            <Button variant="outline-dark">Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Options</h1>
        {description.map((d, i) => (
          <Row
            key={d.id}
            style={{ background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
          >
            {d.title} {d.descr}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
