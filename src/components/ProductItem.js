import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/rating.png';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { name, rating, img,id } = product;
  return (
    <Col md={2} className={'m-3'} onClick={() => navigate(`product/${id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="blue">
        <Image src={img} width={150} height={150} />
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span className="text-black-50">PRADA</span>
          <div className="d-flex align-items-center">
            <Image src={star} width={17} height={17} />
            {rating}
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;
