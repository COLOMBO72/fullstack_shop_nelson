import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { createCloth } from '../../api/productAPI';

const CreateCloth = ({ show, onHide }) => {
  const [value, setValue] = React.useState('');

  const addCloth = () => {
    createCloth({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };
  return (
    <Modal show={show} size="lg" onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new cloth</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Cloth name" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger"  onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addCloth}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCloth;
