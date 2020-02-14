import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
//import { Media } from 'react-bootstrap';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./media/canela11.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./media/canela22.jpg")}
            alt="Second slide"
          />         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./media/canela3.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>      
    );
  }
  export default ControlledCarousel;