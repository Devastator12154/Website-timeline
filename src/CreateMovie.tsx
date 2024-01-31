import './App.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import React from 'react';
import { Movie } from './interfaces';
import { Form, useParams } from 'react-router-dom';






function CreateMovie(props: any) {
    const [moviename, setMovieName] = useState("");
    const [moviedescription, setMovieDescription] = useState("");
    const [movieseconddescription, setMovieSecondDescription] = useState("");
    const handleSubmit = (event:any) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("title", moviename);
        formData.append("description", moviedescription);
        formData.append("SecondaryDescriptor", movieseconddescription);
        var object = {}
        // formData.forEach((key, value) => object = Object.assign(object,{key:value}))
        console.log(object); 
        fetch("http://localhost:8000/movies/",{
            method:"POST", mode:"cors",body:JSON.stringify(Object.fromEntries(formData)),
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormLabel>Enter a movie</FormLabel>
                <TextField onChange={x=>setMovieName(x.target.value)} value={moviename} required></TextField>
                <FormLabel>Enter a description</FormLabel>
                <TextField onChange={x=>setMovieDescription(x.target.value)} value={moviedescription} required></TextField>
                <FormLabel>Enter a secondary description</FormLabel>
                <TextField onChange={x=>setMovieSecondDescription(x.target.value)} value={movieseconddescription}></TextField>
                <Button type="submit">Submit</Button>
            </form>
        </div>

    )
}
export default CreateMovie;