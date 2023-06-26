import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
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

    useEffect(() => {
        if(mode === "Edit" && exerciseData.name === "" ) {
            handleEditFiller();
        }
    })

    return (
       <Form onSubmit={handleSubmit}> 
       <h3><b>{mode === "Add" ? "Add Exercise" : "Edit Exercise"}</b></h3>
        <Row>
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="enter exercise name"
                    onChange={handleChange}
                    name="name"
                    value={exerciseData.name}
                />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group controlId="formGroupName">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    placeholder="enter exercise description"
                    onChange={handleChange}
                    name="description"
                    value={exerciseData.description}
                />
            </Form.Group>
        </Row>
            <Button variant="light" type="submit" ><Link to="/" style={{textDecoration:"none"}}>Back Home</Link></Button>
            <Button type="submit" >Submit</Button>
       </Form>
    )
}

export default ExerciseForm;