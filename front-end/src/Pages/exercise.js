import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllExercise } from '../Slice/exerciseSlice';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import DeletePopup from '../Component/DeletePopup';
import { useNavigate } from 'react-router-dom';

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
                <Card style={{width: "18rem"}} key={exer._id}>
                    <Card.Body>
                    <Card.Title>{exer.name}</Card.Title>
                    <Card.Text>{exer.description}</Card.Text>
                    <Button variant="link" style={{textDecoration: "red"}} onClick={() => handleClick(exer)}>Delete</Button> 
                    <Button variant="primary" onClick={() => handleEdit(exer._id)}>Edit</Button>
                    </Card.Body>
                </Card>
            ))}
            <DeletePopup isOpen={showDeleteModal} onClose={handleClose} selectedExercise={clickedExercise}/>
        </div>
    )
}

