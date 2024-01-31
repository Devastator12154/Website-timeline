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
import { MovieData,Movie } from './interfaces';
import { Link, useLoaderData } from 'react-router-dom';






export async function loader() {
  return fetch("http://localhost:8000/movies").then(response =>
  response.json()).then(data => data)
}

function MovieTable(props: any){
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/movies").then(response =>
      response.json()).then(data => setMovies(data))
  }, [])
  // const {movies} = useLoaderData() as MovieData;
  return (
    <div>
    <TableContainer
        component={Paper}
        variant="outlined"
      >
        <Table aria-label="demo table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie:Movie) => (
              
              <TableRow key={movie.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                <Link to={ `/movies/${movie.id}`}>
                  {movie.title}
                  </Link>
                </TableCell>
                <TableCell>{movie.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/createmovie">Create Movie</Link>
   </div>
  )
}
export default MovieTable;