import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWorkoutById } from 'Slice/workoutSlice';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkoutForm from 'Component/workoutFrom';

const EditWorkout = () => {
  const dispatch = useDispatch();
  const { workoutID } = useParams();
  const fetchedWorkoutById = useSelector(
    (state) => state.Workout.selectedWorkout
  );
  // eslint-disable-next-line no-console
  console.log(fetchWorkoutById);

  useEffect(() => {
    dispatch(fetchWorkoutById(workoutID));
  }, []);

  return (
    <div className="exerciseForm">
      {fetchedWorkoutById === null ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="exercise-form-row justify-content-center">
          <Col className="exercise-form-col align-self-center">
            <WorkoutForm
              mode="Edit"
              selectedWorkout={fetchedWorkoutById}
              resource="Workout"
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default EditWorkout;
