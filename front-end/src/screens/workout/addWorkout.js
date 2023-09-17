import Row from 'react-bootstrap/Row';
import WorkoutForm from '../../component/WorkoutForm.js';
import Col from 'react-bootstrap/Col';

const AddWorkout = () => {
  return (
    <Row className="exercise-form-row justify-content-center">
      <Col className="exercise-form-col align-self-center">
        <WorkoutForm mode="Add" resource="Workout" />
      </Col>
    </Row>
  );
};

export default AddWorkout;
