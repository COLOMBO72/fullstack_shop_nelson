import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SwitchBar from '../components/SwitchBar';
import ProductList from '../components/ProductList';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchCloth, fetchProducts, fetchTypes } from '../api/productAPI';
import Paginator from '../components/Paginator';

const Shop = observer(() => {
  const { product } = React.useContext(Context);

  React.useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchCloth().then((data) => product.setClothes(data));
  }, []);

  React.useEffect(() => {
    fetchProducts(
      product.selectedType.id,
      product.selectedBrand.id,
      product.selectedClothes.id,
      product.page,
      10,
    ).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedBrand, product.selectedClothes, product.selectedType]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <SwitchBar />
        </Col>
        <Col md={9}>
          <ProductList />
          <Paginator />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
