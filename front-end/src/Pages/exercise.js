import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllExercise, DeleteById } from '../Slice/exerciseSlice';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export const Exercise = () => {
const dispatch =  useDispatch();
const exercise = useSelector(state => state.Exercise.exercises);
console.log(exercise);

useEffect(() => {
    if (exercise.length === 0){
        dispatch(fetchAllExercise());
    }
})

const handleDelete = (ID) => {
    if(ID) {
    dispatch(DeleteById(ID));
    }
}

    return (
        <div>
            {exercise.map((exer) => (
                <Card style={{width: "18rem"}} key={exer._id}>
                    <Card.Body>
                    <Card.Title>{exer.name}</Card.Title>
                    <Card.Text>{exer.description}</Card.Text>
                    <Button variant="link" style={{textDecoration: "red"}} onClick={handleDelete(exer._id)}>Delete</Button> 
                    <Button variant="link">Edit</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}