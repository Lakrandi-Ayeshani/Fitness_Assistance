import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllExercise } from '../../slice/exerciseSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DeletePopup from '../../component/DeletePopup';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

export const Exercise = () => {
  const dispatch = useDispatch();
  const fetchedAllExercises = useSelector((state) => state.Exercise.exercises);
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [clickedExercise, setClickedExercise] = useState({});

  const handleClose = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (fetchedAllExercises.length === 0) {
      dispatch(fetchAllExercise());
    }
  });

  const handleClick = (exercise) => {
    setClickedExercise(exercise);
    setShowDeleteModal(true);
  };

  const handleEdit = (ID) => {
    navigate(`/editExercise/${ID}`);
  };

  const handleAddExercise = () => {
    navigate('/addExercise');
  };

  return (
    <div className="exercise-list">
      {fetchAllExercise === null ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1 className="my-4">Exercise List</h1>
          <Row className="mx-1">
            <Row className="justify-content-end mx-0 mb-1">
              <Col className="exercise-form-col-addbutton">
                <Button
                  variant="primary"
                  onClick={handleAddExercise}
                  className="exercise-add-button submit-button button-hover"
                >
                  <i className="bi bi-file-earmark-plus-fill"></i> Add exercise
                </Button>
              </Col>
            </Row>
            {fetchedAllExercises.map((exer) => (
              <Card key={exer._id}>
                <Row className="exercise-list-row align-items-center" xs="auto">
                  <Col xs={1} md={'auto'}>
                    <i className="bi bi-activity"></i>
                  </Col>
                  <Col xs={2}>
                    <b>{exer.name}</b>
                  </Col>
                  <Col xs={7} md={8} className="p-0">
                    {exer.description}
                  </Col>
                  <Col xs={1} md="auto" className="p-0">
                    <Button
                      onClick={() => handleEdit(exer._id)}
                      className="edit-button button-hover"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </Col>
                  <Col xs={1} md="auto" className="p-0">
                    <Button
                      onClick={() => handleClick(exer)}
                      className="delete-button button-hover"
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </Row>
        </>
      )}
      <DeletePopup
        isOpen={showDeleteModal}
        onClose={handleClose}
        selectedExercise={clickedExercise}
        resource="Exercise"
      />
    </div>
  );
};
