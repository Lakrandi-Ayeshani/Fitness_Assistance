import Row from "react-bootstrap/esm/Row";
import ExerciseForm from "../Component/ExerciseForm";
import Col from "react-bootstrap/esm/Col";

const AddExercise= () => {
    return (
        <Row className="exercise-form-row justify-content-center">
            <Col className="exercise-form-col align-self-center">
                <ExerciseForm mode="Add"/>
            </Col>
        </Row>
    )
}

export default AddExercise;