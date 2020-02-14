import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Footer(){
    return(
        <Card>
            <Card.Body>
                <Image style={{height:70, width:70,}} src={require("./media/wlogo.jpeg")} roundedCircle /> 
                <Card.Link href="https://api.whatsapp.com/send?phone=526621550249&text=&source=&data=">66 21 550249</Card.Link> 
                <Image style={{height:70, width:70,}} src={require("./media/ilogo.jpg")} roundedCircle />  
                <Card.Link href="https://www.instagram.com/sweetspothmo/">Instagram</Card.Link>
                <Image style={{height:70, width:70,}} src={require("./media/flogo.png")} roundedCircle />
                <Card.Link href="https://www.facebook.com/sweetspothmo/">Facebook</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Footer;