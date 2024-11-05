import { Container, Row, Col } from 'react-bootstrap';
import '../css/MainHistoria.css';
import MiHistoria from "../assets/MiHistoria.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const MainHistoria = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="main-historia">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="historia-content">
            <div className="historia-text bg-semi-transparente" data-aos="fade-right">
              <h2 className="tituloHistoria">Detrás del Color: Mi Camino en la Peluquería</h2>
              <span className="textoHistoria">
                Líder en la formación nacional de la reconocida marca Tec Italy en Argentina, 
                cuento con 18 años de experiencia y una sólida especialización en colorimetría. 
                Me formé en el Grupo Crear (Peluqueros-Tuc) y he completado cursos en atención al cliente y marketing, 
                como el de 2021. Actualmente, formo parte del equipo de formación de Tec Italy Argentina, 
                colaborando en la capacitación de nuevos talentos.

                A lo largo de mi carrera, he tenido la oportunidad de participar activamente en importantes eventos de peluquería en el país, 
                como Artelleza 2022, la Capacitación del Centro del Peinado 2022 y Rosario Beauty Expo 2022, 
                donde compartí escenario con otros expertos. En 2023, fui parte del Festival Experience en Buenos Aires, 
                representando a Tec Italy. También tuve el honor de participar en Beauty Highlights Opalo by Tec Latam.

                Mi pasión por la educación y el desarrollo de nuevos profesionales me lleva a realizar visitas a salones de belleza y 
                a participar en diversas actividades educativas de la marca. Además, organizo talleres privados especializados en técnicas de 
                mechas y balayage, ofreciendo siempre lo mejor en técnica y estilo.
              </span>
            </div>
          </Col>
          <Col md={6} className="historia-content">
            <div className="historia-img bg-semi-transparente" data-aos="fade-left">
              <img src={MiHistoria} alt="Historia" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHistoria;