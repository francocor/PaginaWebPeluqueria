import "../css/MainServicios.css";
import { useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import Aos from "aos";
import "aos/dist/aos.css";
import Color from "../assets/color.jpg";
import Corte from "../assets/Corte.jpg";
import diagnosticoCapilar from "../assets/diagnosticoCapilar.jpg";
import Mechas from "../assets/Mechas.jpg";
import Peinado from "../assets/Peinado.jpg";
import TratamientoCapilar from "../assets/TratamientoCapilar.jpg";
import balayage from "../assets/balayage.jpg";

const MainServicios = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Servicios">
      {/*<div className="TituloServicios" data-aos="fade-down">
        <h1 className="S text-center my-4">Servicios</h1>
      </div>*/}

      <div>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4" >
          <MDBCol >
            <MDBCard className="h-100" data-aos="flip-left">
              <MDBCardImage
                src={TratamientoCapilar}
                alt="Tratamiento Capilar"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Tratamiento capilar</MDBCardTitle>
                <MDBCardText>
                  ¡Dale a tu cabello la atención que merece! Repara, hidrata y
                  fortalece con tratamientos personalizados que dejarán tu
                  melena más saludable y brillante que nunca. ¡Cabello de
                  revista en cada visita!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-right">
              <MDBCardImage
                src={diagnosticoCapilar}
                alt="Diagnóstico Capilar"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Diagnóstico Capilar</MDBCardTitle>
                <MDBCardText>
                  ¿No sabes qué necesita tu cabello? Te lo decimos. Con nuestro
                  diagnóstico capilar, analizamos tu pelo y cuero cabelludo para
                  ofrecerte soluciones a medida. ¡Descubre el camino hacia un
                  cabello perfecto!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-left">
              <MDBCardImage
                src={Mechas}
                alt="Mechas"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Mechas</MDBCardTitle>
                <MDBCardText>
                  Ilumina tu look con mechas que transformarán tu estilo. Desde
                  sutiles reflejos hasta contrastes atrevidos, añade dimensión y
                  luz a tu cabello. ¡Un toque moderno que no pasa desapercibido!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-right">
              <MDBCardImage
                src={balayage}
                alt="Balayage"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Balayage</MDBCardTitle>
                <MDBCardText>
                  ¿Buscas un cambio natural y luminoso? El balayage es tu mejor
                  opción. Degradados suaves y elegantes que le dan a tu cabello
                  un acabado fresco, brillante y, sobre todo, ¡único!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-left">
              <MDBCardImage
                src={Corte}
                alt="Corte"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Corte</MDBCardTitle>
                <MDBCardText>
                  Renueva tu estilo con un corte de cabello a medida. Desde
                  looks modernos y atrevidos hasta cortes clásicos que nunca
                  fallan, saldrás de aquí sintiéndote totalmente renovado. ¡El
                  corte perfecto para cada personalidad!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-right">
              <MDBCardImage
                src={Peinado}
                alt="Peinado"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Peinado</MDBCardTitle>
                <MDBCardText>
                  ¿Evento especial o simplemente un día increíble? Elige el
                  peinado perfecto. Rizos, liso, ondas o recogidos
                  espectaculares, ¡tu cabello siempre impecable y listo para
                  cualquier ocasión!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="h-100" data-aos="flip-left">
              <MDBCardImage
                src={Color}
                alt="Color"
                position="top"
                className="card-img-top"
              />
              <MDBCardBody>
                <MDBCardTitle>Color</MDBCardTitle>
                <MDBCardText>
                  ¡Reinventa tu color! Desde tonos naturales hasta colores
                  vibrantes, dale a tu cabello ese toque especial que estabas
                  buscando. Cobertura de canas, cambio total o simplemente
                  reflejos de luz, ¡atrévete a cambiar y destacar!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default MainServicios;