import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login, registration } from '../api/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const { user } = React.useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/registration';
  const signUp = async () => {
    try {
      let data = await registration(email, pass);
      user.setUser(data);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const signIn = async () => {
    try {
      let data = await login(email, pass);
      user.setUser(data);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  if (isLogin) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 100 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">Login</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              value={email}
              placeholder="Email"
              className="mt-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              value={pass}
              placeholder="Password"
              className="mt-3"
              onChange={(e) => setPass(e.target.value)}
              type="password"
            />
            <Row className="d-flex justify-content-between mt-3">
              <div>
                <span>Have no account?</span>
                <Link className="m-2" to={'/registration'}>
                  Sign Up
                </Link>
              </div>
              <Button onClick={signIn} className="mt-3 align-self-end" variant="outline-success">
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
            {/* <Form.Control placeholder="Name" className="mt-3" /> */}
            <Form.Control
              value={email}
              placeholder="Email"
              className="mt-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              value={pass}
              type="password"
              placeholder="Password"
              className="mt-3"
              onChange={(e) => setPass(e.target.value)}
            />
            <Row className="d-flex justify-content-between mt-3">
              <div>
                <span>Already have account?</span>
                <Link className="m-2" to={'/login'}>
                  Log in
                </Link>
              </div>
              <Button onClick={signUp} className="mt-3 align-self-end" variant="outline-success">
                Sign up
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    );
  }
});

export default Auth;
