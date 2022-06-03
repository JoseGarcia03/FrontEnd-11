import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ t }) => {
  const { id } = useParams();

  const element = t.find( (tarea) => tarea.id === Number(id))

  return (
    <div>
      <h1>{element?.name}</h1>
      <img src={element?.image} alt="" width="250px" />
    </div>
  )
}

export default Detail