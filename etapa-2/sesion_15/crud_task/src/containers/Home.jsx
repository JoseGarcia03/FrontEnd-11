import React from 'react'
import Typography from "@mui/material/Typography";
import TablesList from '../components/TablesList';
import { DivContentStyled } from '../styles/ContentStyle';
import AddTask from '../components/AddTask';

const Home = ({ t, sT }) => {

  return (
    <>
    <Typography variant="h3" gutterBottom component="div">
        Tareas
      </Typography>
      <hr />
    <DivContentStyled>
      <TablesList t={t} sT={sT} />
      <AddTask sT={sT} />
    </DivContentStyled>
    </>
  )
}

export default Home