import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateType from '../components/Modals/CreateType';
import CreateCloth from '../components/Modals/CreateCloth';
import CreateProduct from '../components/Modals/CreateProduct';

const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const [typeVisible, setTypeVisible] = React.useState(false);
  const [productVisible, setProductVisible] = React.useState(false);
  const [clothVisible, setClothVisible] = React.useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button onClick={() => setTypeVisible(true)} variant="outline-dark" className="mt-2">
        Add type
      </Button>
      <Button onClick={() => setBrandVisible(true)} variant="outline-dark" className="mt-2">
        Add brand
      </Button>
      <Button onClick={() => setClothVisible(true)} variant="outline-dark" className="mt-2">
        Add cloth
      </Button>
      <Button onClick={() => setProductVisible(true)} variant="outline-dark" className="mt-2">
        Add product
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateCloth show={clothVisible} onHide={() => setClothVisible(false)} />
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
    </Container>
  );
};

export default Admin;
