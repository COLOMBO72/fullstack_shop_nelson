import React from 'react';
import { Container, Image, Col, Row, Card, Button } from 'react-bootstrap';
import star from '../assets/BigStar.png';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../api/productAPI';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({ info: [] });
  React.useEffect(() => {
    fetchOneProduct(id).then((data) => setProduct(data));
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img} />
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
        {product.info.map((d, i) => (
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
