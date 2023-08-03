import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function NavBar(){
    return(
        <nav id="navbar" className="navbar">
            <h1>
                Red-Line <span className='Project'>Project</span>
            </h1>

            <ButtonGroup variant="text" aria-label="text button group" className="ButtonGroup">
                <Button>Inicio</Button>
                <Button>¿Quienes somos?</Button>
                <Button>Como contactarnos</Button>
            </ButtonGroup>

            <CartWidget/>
        </nav>
    )
}

export default NavBar