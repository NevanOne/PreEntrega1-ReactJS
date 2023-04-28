import "./Navbar.css"
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"


export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_logo"></div>
            <div className="nav_items">
            <Link className='link' to="./Components/Inicio">Inicio</Link>
            <Link className='link' to="/productos/Juegos">Juegos</Link>
            <Link className='link' to="/">Peliculas</Link>
            <Link className='link' to='/CartScreen'><CartWidget/></Link>
            </div>
            <div className="nav_toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;