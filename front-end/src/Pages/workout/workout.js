import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllWorkout as fetchAllWorkout } from 'Slice/workoutSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DeletePopup from 'Component/DeletePopup';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Workout = () => {
  const dispatch = useDispatch();
  const fetchedAllWorkouts = useSelector((state) => state.Workout.workouts);
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [clickedWorkout, setClickedWorkout] = useState({});

  const handleClose = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (fetchedAllWorkouts.length === 0) {
      dispatch(fetchAllWorkout());
    }
  });

  const handleClick = (workout) => {
    setClickedWorkout(workout);
    setShowDeleteModal(true);
  };

  const handleEdit = (ID) => {
    navigate(`/editWorkout/${ID}`);
  };

  const handleAddWorkout = () => {
    navigate('/addWorkout');
  };

  return (
    <div className="exercise-list">
      <h1 className="my-4">Workout List</h1>
      <Row className="mx-1">
        <Row className="justify-content-end mx-0 mb-1">
          <Col className="exercise-form-col-addbutton">
            <Button
              variant="primary"
              onClick={handleAddWorkout}
              className="exercise-add-button submit-button button-hover"
            >
              <i className="bi bi-file-earmark-plus-fill"></i> Add workout
            </Button>
          </Col>
        </Row>
        {fetchedAllWorkouts.map((workout) => (
          <Card key={workout._id}>
            <Row className="exercise-list-row align-items-center" xs="auto">
              <Col xs={1} md={'auto'}>
                <i className="bi bi-activity"></i>
              </Col>
              <Col xs={2}>
                <b>{workout.name}</b>
              </Col>
              <Col xs={7} md={8} className="p-0">
                {workout.description}
              </Col>
              <Col xs={1} md="auto" className="p-0">
                <Button
                  onClick={() => handleEdit(workout._id)}
                  className="edit-button button-hover"
                >
                  <i className="bi bi-pencil-square"></i>
                </Button>
              </Col>
              <Col xs={1} md="auto" className="p-0">
                <Button
                  onClick={() => handleClick(workout)}
                  className="delete-button button-hover"
                >
                  <i className="bi bi-trash-fill"></i>
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Row>
      <DeletePopup
        isOpen={showDeleteModal}
        onClose={handleClose}
        selectedExercise={clickedWorkout}
        resource="Workout"
      />
    </div>
  );
};
