import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyled } from '../styles/StylesGlobal'

export default class Navbar extends Component {
  render() {
    return (
      <NavBarStyled>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/about" >About</Link>
      </NavBarStyled>
    )
  }
};