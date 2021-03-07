import React from 'react'
import Boton from './Boton';


const App = () => {

    const [numero, setNumero] = React.useState(0);

    const sumar = (num) => {
        setNumero(num + numero)
    }

    return (
        <div>
            {numero}
            {/* <button onClick={() => setNumero(numero + 1)}>+</button> */}
            <Boton sumar={sumar} />
        </div>
    )
}

export default App
