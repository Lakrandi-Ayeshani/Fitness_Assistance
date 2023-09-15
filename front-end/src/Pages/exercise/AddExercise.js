import Row from 'react-bootstrap/Row';
import ExerciseForm from '../../Component/ExerciseForm';
import Col from 'react-bootstrap/Col';

const AddExercise = () => {
  return (
    <Row className="exercise-form-row justify-content-center">
      <Col className="exercise-form-col align-self-center">
        <ExerciseForm mode="Add" resource="Exercise" />
      </Col>
    </Row>
  );
};

export default AddExercise;
