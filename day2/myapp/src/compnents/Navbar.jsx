import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar >
            <Toolbar>
                <Link to="/login">
                <Button variant="contained" color="success">Login</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/signup">
                <Button variant="contained" color="secondary">SignUp</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/state">
                <Button variant="contained">State</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/counter">
                <Button variant="contained">Counter</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/clicker">
                <Button variant="contained">Click</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/api">
                <Button variant="contained">Api</Button>
                </Link>
                 &nbsp;&nbsp;
                <Link to="/product">
                <Button variant="contained">Product</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar