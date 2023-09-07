import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Pages/dashboard';
import { Exercise } from 'Pages/exercise/exercise';
import './App.css';
import DeletePopup from './Component/DeletePopup';
import AddExercise from './Pages/exercise/AddExercise';
import EditExercise from './Pages/exercise/EditExercise';
import { Workout } from './Pages/workout/workout';
import AddWorkout from 'Pages/workout/addWorkout';
import EditWorkout from 'Pages/workout/editWorkout';
import { Login } from 'Pages/login';
import { Register } from 'Pages/register';
import SidebarLayout from 'Pages/sidebarLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<SidebarLayout />}>
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
            <Route path="/editWorkout/:workoutID" element={<EditWorkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
