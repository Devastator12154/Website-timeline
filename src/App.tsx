// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MovieTable,{loader as movieloader} from './MovieTable';
import {
  createBrowserRouter,
  RouterProvider, Link
} from "react-router-dom";
import MoviePage from './MoviePage';
import About from './About';
import Root from './Root';
import CreateMovie from './CreateMovie';
import useToken from './useToken';
import Login from './Login';




function App() {
  const {token, setToken} = useToken()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path:"about",
          element: <About />,
          // loader: rootLoader
        },
        {
          path:"/movies",
          element: <MovieTable />
        },
        {
          path: "/movies/:id",
          element: <MoviePage />,
          // loader: 
        },
        {
          path: "/CreateMovie",
          element: <CreateMovie />,
        },
      ],
    },
  ]);
  if (!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div>
      
    <RouterProvider router={router} />
    </div>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <MovieTable></MovieTable>
    // </div>
  );
}

export default App;
