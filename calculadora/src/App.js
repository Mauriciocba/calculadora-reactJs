import './App.css';
import Boton from './Componentes/Boton.js'
import Pantalla from './Componentes/Pantalla.js'
import BotonBorrar from './Componentes/BotonBorrar.js';
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input , setInput] = useState("")

  const ingresarValor = valor => {
    setInput(input + valor)
  }

  
    const calcularResultado = () => {
      if (input) {
        setInput(evaluate(input))
      }else{
        alert("Por favor ingrese valores, para realizar los calculos!")
      }
      
    }
  
  

  return (
    <div className="App">
     <div className='Contenedor-Principal'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={ingresarValor}>1</Boton>
          <Boton manejarClic={ingresarValor}>2</Boton>
          <Boton manejarClic={ingresarValor}>3</Boton>
          <Boton manejarClic={ingresarValor}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresarValor}>4</Boton>
          <Boton manejarClic={ingresarValor}>5</Boton>
          <Boton manejarClic={ingresarValor}>6</Boton>
          <Boton manejarClic={ingresarValor}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresarValor}>7</Boton>
          <Boton manejarClic={ingresarValor}>8</Boton>
          <Boton manejarClic={ingresarValor}>9</Boton>
          <Boton manejarClic={ingresarValor}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={ingresarValor}>0</Boton>
          <Boton manejarClic={ingresarValor}>.</Boton>
          <Boton manejarClic={ingresarValor}>/</Boton>
        </div>
        <div className='fila'>
          <BotonBorrar manejarBorrar={()=> setInput('')}>
            Borrar
          </BotonBorrar>
        </div>
     </div>
    </div>
  );
}

export default App;
