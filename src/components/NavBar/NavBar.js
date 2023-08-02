import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(){
    return(
        <nav id="navbar" className="navbar">
            <h1>Red-Line</h1>

            <button>Inicio</button>
            <button>¿Quienes somos?</button>
            <button>Como contactarnos</button>
        <CartWidget />
        </nav>
    )
}

export default NavBar