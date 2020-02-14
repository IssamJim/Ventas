import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cart ({Carrito}) {
    return (
      <>
        <div  className="Container1">
          <h1>CART</h1>
          {Carrito.map(Producto => (<div>{Producto.Nombre}{Producto.Costo}</div>))}
        </div>                         
      </>
    );
  }
  
  export default Cart;