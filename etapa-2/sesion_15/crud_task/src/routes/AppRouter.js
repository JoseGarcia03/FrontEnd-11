import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavbarHome from '../components/NavbarHome'
import Detail from '../containers/Detail'
import Home from '../containers/Home'
import { getData } from '../helpers/getData'

const AppRouter = () => {
  // De esta forma genera renderizados innecesarios
  const [task, setTask] = useState([]);

  useEffect(() => {
    getData()
      .then( t => setTask(t))
  }, [])
  

  return (
    <BrowserRouter>
        <NavbarHome />
        <Routes>
            {/* Rutas Publicas */}
            <Route path='/' element={<Home t={task} sT={setTask} />} />
            <Route path='/detail/:id' element={<Detail t={task} />} />


            {/* Redireccionamiento */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default AppRouter