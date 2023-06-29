import { useParams, useSearchParams } from "react-router-dom";
import ExerciseForm from "../Component/ExerciseForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExerciseById } from "../Slice/exerciseSlice";
import Spinner from 'react-bootstrap/Spinner';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EditExercise = () => {
    const dispatch = useDispatch();
    const { exerciseID } = useParams();
    const fetchedExerciseById = useSelector(state => state.Exercise.selectedExercise);
    
    useEffect(() => {
        dispatch(fetchExerciseById(exerciseID));
    }, [])

    return (
        <div>
            {fetchedExerciseById === null ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row className="exercise-form-row">
                    <Col className="exercise-form-col align-self-center">
                        <ExerciseForm mode="Edit" selectedExercise={fetchedExerciseById}/>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default EditExercise;