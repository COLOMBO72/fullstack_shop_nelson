import React from 'react';
import { Dropdown, Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { Context } from '../../';

const CreateProduct = ({ show, onHide }) => {
  const { product } = React.useContext(Context);
  const [info, setInfo] = React.useState([]);
  const addInfo = () => {
    setInfo([...info, { title: '', descr: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Modal show={show} size="lg" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Chose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Chose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Chose clothes</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.clothes.map((clothe) => (
                <Dropdown.Item key={clothe.id}>{clothe.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <Form.Control className="mt-3" placeholder="Product name" />
          <Form.Control className="mt-3" type="number" placeholder="Product price" />
          <Form.Control className="mt-3" type="file" placeholder="Product img" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new options
          </Button>

          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="Name option" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Descr option" />
              </Col>
              <Col md={4}>
                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
