import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SideBar } from './Pages/SideBar';
import { Dashboard } from './Pages/dashboard';
import { Exercise } from './Pages/exercise';
import './App.css';
import DeletePopup from './Component/DeletePopup';

function App() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <BrowserRouter>
          <Row>
            <Col xs={4} className="col-sidebar">
              <SideBar/>
            </Col>
            <Col className="col-content">
              <Routes>         
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/exercise" element={<Exercise/>} />
                <Route path="/popup" element={<DeletePopup/>}/>
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
