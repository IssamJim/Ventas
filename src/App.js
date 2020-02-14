import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarrousel from './ControlledCarrousel';
import Navegacion from './Navegacion';
import Footer from './Footer';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pasteles from './Pasteles'
import Local from './Local';
import Cart from './Cart'


function App () {
  const [pagina, setPagina] = useState(null) //Props
  const [Carrito, setCarrito] = useState([])  
  return (
    <>
      <div  className="Container1">
        <ControlledCarrousel/>
        <Navegacion setPagina={setPagina}/>           
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
            <Image style={{height:200, width:200, margin:50}} src={require("./media/logo.png")} roundedCircle /> 
          </Col>
        </Row>
        {pagina === "Pasteles" && <Pasteles setCarrito={setCarrito} Carrito={Carrito}/>}
        {pagina === "Local" && <Local/>}
        {pagina === "Cart" && <Cart Carrito={Carrito}/>}
        <Footer/> 
      </div>                         
    </>
  );
}

export default App;
