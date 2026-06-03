import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Api = () => {
    const [user, setuser] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setuser(res.data)
            })
            .catch((err) => {
                console.error("Error fetching data:", err)
            })
    }, [])

    return (
        <div>
            <h3>Api</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow key={val.id}>
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.username}</TableCell>
                                    <TableCell>{val.email}</TableCell>
                                    <TableCell>{val.address.city}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Api