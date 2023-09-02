import { useParams } from 'react-router-dom';
import ExerciseForm from '../../Component/ExerciseForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExerciseById } from 'Slice/exerciseSlice';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditExercise = () => {
  const dispatch = useDispatch();
  const { exerciseID } = useParams();
  const fetchedExerciseById = useSelector(
    (state) => state.Exercise.selectedExercise
  );
  // eslint-disable-next-line no-console
  console.log(fetchExerciseById);

  useEffect(() => {
    dispatch(fetchExerciseById(exerciseID));
  }, []);

  return (
    <div className="exerciseForm">
      {fetchedExerciseById === null ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="exercise-form-row justify-content-center">
          <Col className="exercise-form-col align-self-center">
            <ExerciseForm
              mode="Edit"
              selectedExercise={fetchedExerciseById}
              resource="Exercise"
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default EditExercise;
