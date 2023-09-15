import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './screens/dashboard';
import { Exercise } from 'screens/exercise/exercise';
import './App.css';
import DeletePopup from './component/DeletePopup';
import AddExercise from './screens/exercise/AddExercise';
import EditExercise from './screens/exercise/EditExercise';
import { Workout } from './screens/workout/workout';
import AddWorkout from 'screens/workout/addWorkout';
import EditWorkout from 'screens/workout/editWorkout';
import { Login } from 'screens/login';
import { Register } from 'screens/register';
import LoginRegisterLayout from './layouts/LoginRegisterLayouts';
import SidebarLayout from 'layouts/HomeScreensLayout';
import AuthGuard from 'AuthGuard';
import HeaderDisplay from 'screens/Header/HeaderDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegisterLayout />}>
            <Route path="/" element={<HeaderDisplay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route
            element={
              <AuthGuard>
                <SidebarLayout />
              </AuthGuard>
            }
          >
            <Route path="/home" element={<Dashboard />} />
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
