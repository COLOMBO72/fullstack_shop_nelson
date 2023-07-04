import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { observer } from 'mobx-react-lite';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';

const NavigtaionBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const LogOut = () => {
    if (user.user) {
      user.setUser({});
      user.setIsAuth(false);
      localStorage.clear();
      navigate('/login');
    } else {
      return;
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link style={{ color: 'black', textDecoration: 'none', textTransform: 'uppercase' }} to="/">
          Nelson
        </Link>
        {user.isAuth ? <h2>{user.user.email}</h2> : ''}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {user.isAuth ? (
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Button variant="outline-info" onClick={() => navigate('/admin')}>
                Admin Panel
              </Button>
              <Button onClick={() => LogOut()} variant="outline-primary" className="ml-4">
                Log out
              </Button>
            </Nav>
          ) : (
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Button variant="outline-primary" className="ml-4" onClick={() => navigate('/login')}>
                Log in
              </Button>
            </Nav>
          )}
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavigtaionBar;
