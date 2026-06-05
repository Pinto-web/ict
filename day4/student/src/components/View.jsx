import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const View = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => {
        setStudents(res.data);
      });

  });
  return (
    <div>
      <h1>view</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Mark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((students) => {
              return(
              <TableRow>
                <TableCell>{students.name}</TableCell>
                <TableCell>{students.age}</TableCell>
                <TableCell>{students.department}</TableCell>
                <TableCell>{students.mark}</TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
