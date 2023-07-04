import React from 'react';
import { Dropdown, Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { Context } from '../../';
import { observer } from 'mobx-react-lite';
import { createProduct } from '../../api/productAPI';

const CreateProduct = observer(({ show, onHide }) => {
  const { product } = React.useContext(Context);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [info, setInfo] = React.useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', descr: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectedFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('typeId', product.selectedType.id);
    formData.append('brandId', product.selectedBrand.id);
    formData.append('clothId', product.selectedClothes.id);
    createProduct(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} size="lg" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>{product.selectedType.name || 'Chose type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item onClick={() => product.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>{product.selectedBrand.name || 'Chose brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map((brand) => (
                <Dropdown.Item onClick={() => product.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>{product.selectedClothes.name || 'Chose cloth'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.clothes.map((cloth) => (
                <Dropdown.Item onClick={() => product.setSelectedCloth(cloth)} key={cloth.id}>
                  {cloth.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Product name"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            type="number"
            placeholder="Product price"
          />
          <Form.Control
            onChange={selectedFile}
            className="mt-3"
            type="file"
            placeholder="Product img"
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new options
          </Button>

          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Name option"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.descr}
                  onChange={(e) => changeInfo('descr', e.target.value, i.number)}
                  placeholder="Descr option"
                />
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
        <Button variant="outline-success" onClick={addProduct}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
