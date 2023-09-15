import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addExercise, editExercise } from 'slice/exerciseSlice';
import PropTypes from 'prop-types';

const ExerciseForm = ({ mode, selectedExercise, resource }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [exerciseData, setExerciseData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  // eslint-disable-next-line no-console
  console.log(mode, 'heoooo');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'Add') {
      dispatch(addExercise(exerciseData));
    } else if (mode === 'Edit') {
      dispatch(editExercise({ data: exerciseData, ID: selectedExercise._id }));
    }
    navigate('/exercise');
  };

  const handleEditFiller = () => {
    setExerciseData(selectedExercise);
  };

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('helooo');
    if (mode === 'Edit' && exerciseData.name === '') {
      // eslint-disable-next-line no-console
      console.log('helooo');
      handleEditFiller();
    }
  });

  return (
    <Card className="exercise-form-card">
      <Form onSubmit={handleSubmit} className="exercise-form-form">
        <h3 className="text-center">
          <b>
            {mode === 'Add' ? `${mode} ${resource}` : `${mode} ${resource}`}
          </b>
        </h3>
        <Row className="my-4">
          <Form.Group controlId="formGroupName">
            <Form.Label className="exercise-form-control">Name</Form.Label>
            <Form.Control
              className="exercise-form-control"
              placeholder="enter exercise name"
              onChange={handleChange}
              name="name"
              value={exerciseData.name}
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
              value={exerciseData.description}
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

ExerciseForm.propTypes = {
  mode: PropTypes.oneOf(['Add', 'Edit']).isRequired,
  selectedExercise: PropTypes.object,
  resource: PropTypes.string.isRequired,
};

ExerciseForm.defaultProps = {
  selectedExercise: null,
};

export default ExerciseForm;
