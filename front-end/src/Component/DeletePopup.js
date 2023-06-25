import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteById } from "../Slice/exerciseSlice";

const DeletePopup = ({isOpen, onClose, selectedExercise}) => {

    const dispatch =  useDispatch();

    const handleDelete = () => {
        dispatch(deleteById(selectedExercise?._id));
        onClose();
    }

    return (
        <div>
            <Modal show={isOpen} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>Are you sure you want to delete this exercise?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{selectedExercise?.name}</h4>
                    <h4>{selectedExercise?.description}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button variant="secondary" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeletePopup;