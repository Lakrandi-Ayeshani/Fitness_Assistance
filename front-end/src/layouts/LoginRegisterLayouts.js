import { Outlet } from 'react-router-dom';
import { Header } from 'screens/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function LoginRegisterLayout() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <Row className="mb-5">
          <Header />
        </Row>
        <Row className="mb-5">
          <Outlet />
        </Row>
      </Container>
    </div>
  );
}

export default LoginRegisterLayout;
