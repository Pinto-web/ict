import { Button, TextField } from '@mui/material'
import React, {useState} from 'react'

const Statebasics = () => {
    var[name,setName]=useState("")
    var[a,seta]=useState()
const inputHandler=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
}
const submitHandler=()=>{
    seta(name)
}
  return (
    <div>
<h1>welcome {name}</h1>
<TextField label="Enter name" onChange={inputHandler}/>
<br />
<br />
<Button variant="contained" onClick={submitHandler} >add Name</Button>
<h1>{a}</h1>
    </div>
  )
}

export default Statebasics