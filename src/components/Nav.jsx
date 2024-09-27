import React from 'react';
import { Link } from 'react-router-dom'
import {NavStyle} from '../css/NavStyle'

const Nav =()=>{
    return(
     
    <NavStyle>    
    <header>
      <h1>BikeElétrica</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </header>
    </NavStyle>   
    )
}
export default Nav