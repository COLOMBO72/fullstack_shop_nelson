import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

const CreateType = ({show,onHide}) => {
  return (
    <Modal
    show={show}
    size="lg"
    onHide={onHide}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add new type
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control
        placeholder='Type name'
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-success" onClick={onHide}>Add</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CreateType
