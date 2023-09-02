import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SideBar } from './Pages/SideBar';
import { Dashboard } from './Pages/dashboard';
import { Exercise } from 'Pages/exercise/exercise';
import './App.css';
import DeletePopup from './Component/DeletePopup';
import AddExercise from './Pages/exercise/AddExercise';
import EditExercise from './Pages/exercise/EditExercise';
import { Workout } from './Pages/workout/workout';
import AddWorkout from 'Pages/workout/addWorkout';
import EditWorkout from 'Pages/workout/editWorkout';

function App() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        <BrowserRouter>
          <Row>
            <Col xs={4} md={3} className="col-sidebar">
              <SideBar />
            </Col>
            <Col className="col-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/popup" element={<DeletePopup />} />
                <Route path="/addExercise" element={<AddExercise />} />
                <Route
                  path="/editExercise/:exerciseID"
                  element={<EditExercise />}
                />
                <Route path="/workout" element={<Workout />} />
                <Route path="/addWorkout" element={<AddWorkout />} />
                <Route
                  path="/editWorkout/:workoutID"
                  element={<EditWorkout />}
                />
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
