import { Box, Button, TextField } from "@mui/material";
import React from "react";

const AddTask = () => {
  return (
    <div style={{ width: "40%" }}>
      <h3>Agregar/Editar Tarea</h3>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Tarea" variant="standard" />
        <TextField id="outlined-basic" label="Imagen" variant="standard" />
        <TextField
          id="outlined-multiline-flexible"
          label="Descripción"
          multiline
          rows={4}
        />
        <Button variant="contained">Guardar</Button>
        {/* <Button variant="contained">Editar</Button> */}
      </Box>
    </div>
  );
};

export default AddTask;
