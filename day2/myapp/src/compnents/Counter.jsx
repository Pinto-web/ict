import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
const Counter = () => {
     var [count,setCount]=useState(0)

const add=()=>{
    setCount(count+1)
}
const back = () => {
    setCount(count - 1)
}
  return (
    <div>
        
       
        <h5>count : {count}</h5>
        <br />
        <Button variant="contained" onClick={add} >Increment</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={back} >Decrement</Button>
        </div>
  )
}

export default Counter