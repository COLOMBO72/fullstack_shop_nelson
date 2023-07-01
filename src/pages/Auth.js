import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/registration';
  if (isLogin) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 100 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">Login</h2>
          <Form className="d-flex flex-column">
            <Form.Control placeholder="Email" className="mt-3" />
            <Form.Control placeholder="Password" className="mt-3" />
            <Row className="d-flex justify-content-between mt-3">
              <div>
                <span>Have no account?</span>
                <Link className="m-2" to={'/registration'}>
                  Sign Up
                </Link>
              </div>
              <Button className="mt-3 align-self-end" variant="outline-success">
                Join
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
  if (isRegister) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 100 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">Register your account</h2>
          <Form className="d-flex flex-column">
            <Form.Control placeholder="Name" className="mt-3" />
            <Form.Control placeholder="Email" className="mt-3" />
            <Form.Control placeholder="Password" className="mt-3" />
            <Row className="d-flex justify-content-between mt-3">
              <div>
                <span>Already have account?</span>
                <Link className="m-2" to={'/login'}>
                  Log in
                </Link>
              </div>
              <Button className="mt-3 align-self-end" variant="outline-success">
                Sign up
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
};

export default Auth;
