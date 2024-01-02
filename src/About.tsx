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







function About(props: any){
  //   const [movie, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/movies").then(response =>
  //     response.json()).then(data => setMovies(data))
  // }, [])
  console.log("Hello")
  return (
    <div><p>
            Hello World
      </p></div>
    
  )
}
export default About;