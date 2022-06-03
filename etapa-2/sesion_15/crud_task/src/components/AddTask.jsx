import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

const AddTask = ({ sT }) => {
  const [values, setValues] = useState({
    name: "",
    image: "",
    description: ""
  });

  const [valid, setValid] = useState(true)


  const handleChange = ({ target })=> setValues({
      ...values,
      [target.name]: target.value
    })

  const handleClick = async() => {
    if (values.name && values.image !== '') {
      setValid(true);
      await fetch("http://localhost:4001/tareas", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      sT(await getData());
    } else {
      setValid(false);
    }
  };

  // useEffect(() => {
  // }, [valid])
  

  return (
    <div style={{ width: "40%" }}>
      <h3>Agregar/Editar Tarea</h3>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        noValidate
        autoComplete="off"
      >
        <TextField name="name" onChange={handleChange} id="outlined-basic" label="Tarea" variant="standard" />
        <TextField onChange={handleChange} name="image" id="outlined-basic" label="Imagen" variant="standard" />
        <TextField
          onChange={handleChange}
          name="description"
          id="outlined-multiline-flexible"
          label="Descripción"
          multiline
          rows={4}
        />
        <Button onClick={handleClick} variant="contained">Guardar</Button>
        {
        valid === true 
        ? "" 
        : <Alert severity="error">¡Porfavor llena todos los campos!</Alert> 
        }
        {/* <Button variant="contained">Editar</Button> */}
      </Box>
    </div>
  );
};

export default AddTask;
