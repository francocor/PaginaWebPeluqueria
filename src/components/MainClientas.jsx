import "../css/MainClientas.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import mod1 from "../assets/mod1.jpeg"
import mod2 from "../assets/mod2.jpeg"
import mod3 from "../assets/mod3.jpeg"
import mod4 from "../assets/mod4.jpeg"
import mod5 from "../assets/mod5.png"
import mod6 from "../assets/mod6.jpeg"
import mod7 from "../assets/mod7.png"
import mod8 from "../assets/mod8.png"
import Aos from "aos"
import "aos/dist/aos.css"






const MainClientas = () => {





    return (
      <div className="main-clientas-container">
        <Container className="main-clientas mt-5">

          <div className="TituloClientas" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="2500">
            <h2 className="text-center">Inspiraciones Creativas</h2>
          </div>

          <Row className="CardClientas">
          
            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod1} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod2} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod3} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod4} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod5} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod6} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod7} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={mod8} thumbnail />
            </Col>

              
          </Row>
        </Container>
      </div>
    );
  };
  
  export default MainClientas;