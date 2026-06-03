import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>login to open</h3>
       email: <input type="email" name="" id="" />
        <br />
        password:<input type="password" name="" id="" />
        <br />
        <TextField name="nope" label="username"variant="outlined"/>
        <br />
        <button>submit</button>
        <br />
    </div>
  )
}

export default Login