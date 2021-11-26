import React from 'react'
import '../index.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
        <nav id="nav">
            <img src="/src/img/logo.jpg" alt="logo" className="logo " />
            <h1 className="titulo ">Fiore Compain</h1>
            <ul className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Contacto</a></li>
            <CartWidget/>
            </ul>
        </nav>
        </>
    )
}

export default NavBar
