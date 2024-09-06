import promoDelMes from "../assets/promosDelMes.mp4";
import "../css/promoDelMes.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Aos from "aos";
import { HiFire } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useEffect } from "react";

const Promos = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Promos">
      <Container fluid className="promo-container pt-5 mt-5 d-flex justify-content-center align-items-center">
        <Row className="align-items-center justify-content-center w-100">
          {/* Card para el video */}
          <Col xs={12} md={6} className="d-flex justify-content-center promo-video" data-aos="zoom-in-right">
            <Card className="card-video p-3">
              <video
                className="video-responsive"
                src={promoDelMes}
                autoPlay
                muted
                loop
                playsInline
              >
                Tu navegador no soporta el video.
              </video>
            </Card>
          </Col>

          {/* Card para el texto de la promo */}
          <Col xs={12} md={6} className="promo-text d-flex flex-column justify-content-center" data-aos="zoom-in-left">
            <Card className="card-text p-3 text-center text-md-start">
              <h1 className="mb-4">
                <HiFire /> Promos de Agosto <HiFire />
              </h1>
              <a href="./MainTurnos" className="botonpromo d-block my-2" target="_blank">
                <p><FaHeart /> Lavado + Corte + Brushing/Plancha $</p>
              </a>
              <a href="./MainTurnos" className="botonpromo d-block my-2" target="_blank">
                <p><FaHeart /> Color (retoque crecimiento) + Tratamiento + Modelado $</p>
              </a>
              <a href="./MainTurnos" className="botonpromo d-block my-2" target="_blank">
                <p><FaHeart /> Mechas/Balayage + Tratamiento + Modelado $</p>
              </a>
              <a href="./MainTurnos" className="botonpromo d-block my-2" target="_blank">
                <p><FaHeart /> Color (completo) + Tratamiento + Modelado $</p>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Promos;
