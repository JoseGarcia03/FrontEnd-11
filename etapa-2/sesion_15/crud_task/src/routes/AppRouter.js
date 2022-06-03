import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavbarHome from '../components/NavbarHome'
import Detail from '../containers/Detail'
import Home from '../containers/Home'
import { getData } from '../helpers/getData'

const AppRouter = () => {
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
            <Route path='/' element={<Home t={task} />} />
            <Route path='/detail/:id' element={<Detail />} />


            {/* Redireccionamiento */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default AppRouter