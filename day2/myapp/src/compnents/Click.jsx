import { Button } from '@mui/material'
import React ,{ useState }from 'react'

const Click = () => {
     var[name,setName]=useState()

const pythonc=()=>{
    setName("Python")
}
const javac = () => {
    setName("Javascript")
}
const cc = () => {
    setName("C")
}
  return (
    <div>
        <h1>welcome {name}</h1>
        <Button variant='contained' color="success" onClick={pythonc}>Python</Button>&nbsp;&nbsp;
        <Button variant='contained' color="success" onClick={javac}>JavaScript</Button>&nbsp;&nbsp;
        <Button variant='contained' color="success" onClick={cc}>C</Button>

    </div>
  )
}

export default Click