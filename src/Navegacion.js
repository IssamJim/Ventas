import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
//import Pasteles from './Pasteles'



function Navegacion({setPagina}) {
    return (
    <div className="Container">
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Navbar.Brand className="px-4 mx-4" href="Home">
                <Image style={{height:70, width:70}} src={require("./media/logo.png")} roundedCircle />     
            </Navbar.Brand>             
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">                
                <Nav justify className="mr-auto">
                    <Nav.Link className="px-4 mx-4" onClick={()=>setPagina('Pasteles')}>Pasteles</Nav.Link>
                    <Nav.Link className="px-4 mx-4" href="#Galletas">Galletas</Nav.Link>
                    <Nav.Link className="px-4 mx-4" href="#Cupcakes">Cupcakes</Nav.Link>
                    <Nav.Link className="px-4 mx-4" href="#About us">About us</Nav.Link>
                    <Nav.Link className="px-4 mx-4" onClick={()=>setPagina('Local')}>Local</Nav.Link>
                    <Nav.Link className="px-4 mx-4" onClick={()=>setPagina('Cart')}>Cart</Nav.Link>                    
                </Nav>                                               
            </Navbar.Collapse>
        </Navbar>
    </div> 
    );
}
export default Navegacion;