import React from 'react'

const Boton = ({ sumar }) => {
    return (
        <div>
            <button onClick={() => sumar(1)}>+</button>
        </div>
    )
}

export default Boton
