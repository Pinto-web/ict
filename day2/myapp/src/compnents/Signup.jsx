import React from 'react'
import { Button, TextField } from '@mui/material'

const Signup = () => {
  return (
    <div>
      <br />
      <h4>signup page</h4>
      <TextField label="Name" variant='outlined'/>
      <br />
      <TextField label="password" name="outlined"/>
      <br />
      <Button variant="contained">Signup</Button>


    </div>
  )
}

export default Signup