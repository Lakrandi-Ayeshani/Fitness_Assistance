import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { userRegister } from 'slice/authSlice';
import { Link } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();

  const [userRegisterData, setuserRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserRegisterData({ ...userRegisterData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegister(userRegisterData));
  };

  return (
    <Card className="exercise-form-card">
      <Form onSubmit={handleSubmit} className="exercise-form-form">
        <h3 className="text-center">
          <b>REGISTER FORM</b>
        </h3>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Username</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter username"
              onChange={handleChange}
              name="username"
              value={userRegisterData.username}
            />
          </Form.Group>
        </Row>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Email</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter password"
              onChange={handleChange}
              name="email"
              value={userRegisterData.email}
            />
          </Form.Group>
        </Row>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Password</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter password"
              onChange={handleChange}
              name="password"
              value={userRegisterData.password}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-end pb-1">
          <Col>
            <Button className="button-hover submit-button" type="submit">
              Register
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="exercise-form-control">
            Already have an account? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Register;
