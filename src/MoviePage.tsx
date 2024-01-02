import './App.css';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Movie } from './interfaces';
import { useParams } from 'react-router-dom';






function MoviePage(props: any){
  let {id} = useParams();
    const [movie, setMovie] = useState({} as Movie);
  useEffect(() => {
    fetch("http://localhost:8000/movies/"+ id).then(response =>
      response.json()).then(data => setMovie(data))
  }, [])
  console.log("Hello")
  return (
    <div><p>
            {movie.title}   
      </p>
      <p> 
      {movie.description}
        </p>
        <p>
        {movie.SecondaryDescriptor}
          </p>
          </div>
    
  )
}
export default MoviePage;