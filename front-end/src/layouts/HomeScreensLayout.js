import { Outlet } from 'react-router-dom';
import { SideBar } from '../screens/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SidebarLayout() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <Row>
          <Col xs={4} md={3} className="col-sidebar">
            <SideBar />
          </Col>
          <Col className="col-content">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SidebarLayout;
