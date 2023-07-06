import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllExercise } from '../Slice/exerciseSlice';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import DeletePopup from '../Component/DeletePopup';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

export const Exercise = () => {
const dispatch =  useDispatch();
const fetchedAllExercises = useSelector(state => state.Exercise.exercises);
const navigate = useNavigate();

const [ showDeleteModal, setShowDeleteModal ] = useState(false);
const [ clickedExercise, setClickedExercise ]  = useState({});

const handleClose = () => {
    setShowDeleteModal(false);
}

useEffect(() => {
    if (fetchedAllExercises.length === 0){
        dispatch(fetchAllExercise());
    }
})

const handleClick = (exercise) => {
    setClickedExercise(exercise);
    setShowDeleteModal(true);
}

const handleEdit = (ID) => {
    navigate(`/editExercise/${ID}`)
}

const handleAddExercise = () => {
    navigate("/addExercise")
}

    return (
        <div className="exercise">
            <Button variant="primary" onClick={handleAddExercise}> Add exercise</Button>
            {fetchedAllExercises.map((exer) => (
                <Card key={exer._id}>
                    <Row>
                        <Col><b>{exer.name}</b></Col>
                        <Col>{exer.description}</Col>
                        <Col>
                            <Button  onClick={() => handleEdit(exer._id)}><i class="bi bi-pencil-square">edit</i></Button>
                        </Col>
                        <Col>                           
                        <Button variant="danger" style={{textDecoration: "red"}} onClick={() => handleClick(exer)}><i class="bi bi-trash-fill">delete</i></Button> 
                        </Col>
                    </Row>
                </Card>
            ))}
            <DeletePopup isOpen={showDeleteModal} onClose={handleClose} selectedExercise={clickedExercise}/>
        </div>
    )
}

