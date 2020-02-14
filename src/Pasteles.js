import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'

function Pasteles ({setCarrito, Carrito}) {
    function Add (Producto){
      setCarrito([...Carrito, Producto])
    }
   
    return (
      <>
        <div  className="Pastelillos">  
            <span>
              {JSON.stringify(Carrito)}
            </span>       
          <Container>
            <h1>Pasteles.</h1>
            <h2>Tamaño</h2>            
            <Button onClick={() => Add({Nombre:"Pastel 6P", Costo: 165})} variant="primary" size="lg" active>
              apilar
            </Button>            
            <p>6 Personas</p>
            <ToggleButton type="radio" name="radio" value="2">
              $270
            </ToggleButton>
            <p>10 Personas</p>
            <ToggleButton type="radio" name="radio" value="3">
              $330
            </ToggleButton>
            <p>15 Personas</p>
          </Container>
          <Container>          
            <h2>Pan</h2>
            <ToggleButton type="radio" name="radio" value="1">
              Chocolate
            </ToggleButton>          
            <ToggleButton type="radio" name="radio" value="2">
              Vainilla
            </ToggleButton>           
            <ToggleButton type="radio" name="radio" value="3">
              Fresa
            </ToggleButton>            
          </Container>
          <Container>          
            <h2>Pan</h2>
            <ToggleButton type="radio" name="radio" value="1">
              Cajeta
            </ToggleButton>          
            <ToggleButton type="radio" name="radio" value="2">
              Cajeta y nuez
            </ToggleButton>           
            <ToggleButton type="radio" name="radio" value="3">
              Mermelada Fresa
            </ToggleButton>            
          </Container>
        </div>                         
      </>
    );
  }
  
  export default Pasteles;