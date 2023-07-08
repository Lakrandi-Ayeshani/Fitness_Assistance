import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExercise, editExercise } from "../Slice/exerciseSlice";

const ExerciseForm = ({ mode, selectedExercise }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ exerciseData, setExerciseData ] = useState({
        name: "",
        description: ""
    });

    const handleChange = (event) => {
        const { name, value} = event.target;
        setExerciseData({...exerciseData, [name]:value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(mode === "Add") {
            dispatch(addExercise(exerciseData));
        }
        else if (mode === "Edit") {
            dispatch(editExercise({data: exerciseData,
                ID: selectedExercise._id}))
        }
        navigate("/");
    };

    const handleEditFiller = () => { 
       setExerciseData(selectedExercise);
    };

    const handleHome = () => {
        navigate("/")
    }
 
    useEffect(() => {
        if(mode === "Edit" && exerciseData.name === "" ) {
            handleEditFiller();
        }
    })

    return (
        <Card className="exercise-form-card">
            <Form onSubmit={handleSubmit} className="exercise-form-form"> 
                <h3 className="text-center"><b>{mode === "Add" ? "Add Exercise" : "Edit Exercise"}</b></h3>
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
                        <Form.Label className="exercise-form-control">Description</Form.Label>
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
                        <Button className="button-hover home-button mx-1" type="submit" onClick={handleHome}>Back</Button>
                        <Button className="button-hover submit-button" type="submit" >Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default ExerciseForm;