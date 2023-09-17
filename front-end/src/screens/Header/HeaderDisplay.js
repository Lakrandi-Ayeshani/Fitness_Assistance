import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import HomeIcon from 'Icons/HomeIcon';

const HeaderDisplay = () => {
  return (
    <div className="py-5 header-container">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center bg-light w-75 headerdisplay-card">
          {/* <Row className="sidebar-row-header justify-content-center text-center">
            <Col className="align-self-center">
              <h1>Fitness Assistant</h1>
            </Col>
          </Row> */}
          <Row className="m-1">
            <h1>Fitness Assistant</h1>
          </Row>
          <Row>
            <p className="justify-content-center text-center">
              A web application developed by myself that allows the user to
              create and maintain a list of exercises and workout plans. The
              exercises can be combined to create workouts and fitness plans.
              includes custom-written CSS and JWT-based authentication
            </p>
          </Row>
          <Row>
            <div className="Home-header-app-icon mx-auto">
              <HomeIcon />
            </div>
          </Row>
          <Row className="d-flex">
            <Col>
              <Link to="/login">
                <Button
                  variant="primary"
                  className="home-login-button button-hover"
                >
                  Sign In
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/register">
                <Button
                  variant="secondary"
                  className="home-register-button button-hover"
                >
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default HeaderDisplay;
