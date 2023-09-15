import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteById } from 'slice/exerciseSlice';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import PropTypes from 'prop-types';

const DeletePopup = ({ isOpen, onClose, selectedExercise, resource }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteById(selectedExercise?._id));
    onClose();
  };

  return (
    <div>
      <Modal show={isOpen} onHide={onClose} className="exercise-delete-modal">
        <Modal.Header>
          <Modal.Title className="exercise-delete-modal-title">
            Are you sure you want to delete this {resource}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mx-2">
            <Col xs={3} className="exercise-delete-modal-col">
              <b>Name</b>
            </Col>
            <Col xs={9} className="exercise-delete-modal-col">
              {selectedExercise?.name}
            </Col>
            <Col xs={3} className="exercise-delete-modal-col">
              <b>Description</b>
            </Col>
            <Col xs={9} className="exercise-delete-modal-col">
              {selectedExercise?.description}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={onClose}
            className="home-button button-hover"
          >
            Close
          </Button>
          <Button
            variant="secondary"
            onClick={handleDelete}
            className="popup-delete-button button-hover"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

DeletePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedExercise: PropTypes.object.isRequired,
  resource: PropTypes.string.isRequired,
};

export default DeletePopup;
