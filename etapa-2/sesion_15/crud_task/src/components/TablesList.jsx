import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData } from '../helpers/getData'
import { H3TableList, TableStyled } from "../styles/ContentStyle";

const TablesList = ({ t, sT }) => {

  const deleteT = ({ target }) => {
    fetch(`http://localhost:4001/tareas/${target.id}`, {method: 'DELETE'})
      .then(async()=> {
        const data = await getData();
        sT(data)
      })
  }

  return (
    <div style={{ width: "60%" }}>
      <H3TableList>Lista de Tareas</H3TableList>
      <TableStyled borderless={true} bordered hover size="sm">
        <tbody>
            {
              t?.map( (task, i) => (
                <tr key={i}>
                  <td>{task.name}</td>
                  <td style={{ display: "flex", justifyContent: "flex-end", gap: ".5rem"}}>
                    <Button href={`/detail/${task.id}`} variant="success">Detalle</Button>{" "}
                    <Button id={task.id} onClick={deleteT} variant="danger">Borrar</Button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </TableStyled>
    </div>
  );
};

export default TablesList;
