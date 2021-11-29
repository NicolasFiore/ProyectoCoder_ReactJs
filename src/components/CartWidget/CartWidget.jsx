import React from 'react'
import './CartWidget.css'
import Logo from '../../img/logos/carritoCompras.png'

const CartWidget = () => {
    return (
        <>
            <a href="#"><img src={Logo} alt="carrito" id="carrito" /></a>
        </>
    )
}

export default CartWidget

