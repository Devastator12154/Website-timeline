import { useState } from 'react';
import React from 'react';
import './Login.css';

async function loginUser(username:string, password:string) {
  return fetch ("http://localhost:8000")

}

export default function Login(props:any) {
  const {setToken} = props;
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={e=>setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

/// Add Login Properties 2/13/24 ////