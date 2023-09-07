import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addExercise, editExercise as editWorkout } from 'Slice/exerciseSlice';
import PropTypes from 'prop-types';

const WorkoutForm = ({ mode, selectedWorkout, resource }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [workoutData, setWorkoutData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'Add') {
      dispatch(addExercise(workoutData));
    } else if (mode === 'Edit') {
      dispatch(editWorkout({ data: workoutData, ID: selectedWorkout._id }));
    }
    navigate('/');
  };

  const handleEditFiller = () => {
    setWorkoutData(selectedWorkout);
  };

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (mode === 'Edit' && workoutData.name === '') {
      handleEditFiller();
    }
  });

  return (
    <Card className="exercise-form-card">
      <Form onSubmit={handleSubmit} className="exercise-form-form">
        <h3 className="text-center">
          <b>
            {mode === 'Add' ? `${mode} ${resource}` : `${mode} ${resource}`}
          </b>{' '}
        </h3>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Name</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter exercise name"
              onChange={handleChange}
              name="name"
              value={workoutData.name}
            />
          </Form.Group>
        </Row>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">
              Description
            </Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter exercise description"
              onChange={handleChange}
              name="description"
              value={workoutData.description}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-end">
          <Col className="exercise-form-col-button">
            <Button
              className="button-hover home-button mx-1"
              type="submit"
              onClick={handleHome}
            >
              Back
            </Button>
            <Button className="button-hover submit-button" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

WorkoutForm.propTypes = {
  mode: PropTypes.oneOf(['Add', 'Edit']).isRequired,
  selectedWorkout: PropTypes.object,
  resource: PropTypes.string.isRequired,
};

WorkoutForm.defaultProps = {
  selectedWorkout: null,
};

export default WorkoutForm;
