import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { userLoggin } from 'slice/authSlice';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();

  const [userLoginData, setuserLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserLoginData({ ...userLoginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLoggin(userLoginData));
  };

  return (
    <Card className="exercise-form-card">
      <Form onSubmit={handleSubmit} className="exercise-form-form">
        <h3 className="text-center">
          <b>LOGIN FORM</b>
        </h3>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Username</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter username"
              onChange={handleChange}
              name="username"
              value={userLoginData.username}
            />
          </Form.Group>
        </Row>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">password</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter password"
              onChange={handleChange}
              name="password"
              value={userLoginData.password}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-end">
          <Col>
            <Button className="button-hover submit-button" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="exercise-form-control">
            New user? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Login;
