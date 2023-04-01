import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_logo">Goro's Gaming Lair</div>
            <div className="nav_items">
                <a href="/public/index.html"> INICIO</a>
                <a href="#"> JUEGOS</a>
                <a href="#"> CONTACTO</a>
            </div>
            <div className="nav_toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar

