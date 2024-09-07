import "../css/MainServicios.css";
import { useEffect } from "react";
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

  const servicios = [
    {
      imagen: TratamientoCapilar,
      titulo: "Tratamiento Capilar",
      texto:
        "¡Dale a tu cabello la atención que merece! Repara, hidrata y fortalece con tratamientos personalizados que dejarán tu melena más saludable y brillante que nunca. ¡Cabello de revista en cada visita!",
    },
    {
      imagen: diagnosticoCapilar,
      titulo: "Diagnóstico Capilar",
      texto:
        "¿No sabes qué necesita tu cabello? Te lo decimos. Con nuestro diagnóstico capilar, analizamos tu pelo y cuero cabelludo para ofrecerte soluciones a medida. ¡Descubre el camino hacia un cabello perfecto!",
    },
    {
      imagen: Mechas,
      titulo: "Mechas",
      texto:
        "Ilumina tu look con mechas que transformarán tu estilo. Desde sutiles reflejos hasta contrastes atrevidos, añade dimensión y luz a tu cabello. ¡Un toque moderno que no pasa desapercibido!",
    },
    {
      imagen: balayage,
      titulo: "Balayage",
      texto:
        "¿Buscas un cambio natural y luminoso? El balayage es tu mejor opción. Degradados suaves y elegantes que le dan a tu cabello un acabado fresco, brillante y, sobre todo, ¡único!",
    },
    {
      imagen: Corte,
      titulo: "Corte",
      texto:
        "Renueva tu estilo con un corte de cabello a medida. Desde looks modernos y atrevidos hasta cortes clásicos que nunca fallan, saldrás de aquí sintiéndote totalmente renovado.",
    },
    {
      imagen: Peinado,
      titulo: "Peinado",
      texto:
        "¿Evento especial o simplemente un día increíble? Elige el peinado perfecto. Rizos, liso, ondas o recogidos espectaculares, ¡tu cabello siempre impecable!",
    },
    {
      imagen: Color,
      titulo: "Color",
      texto:
        "¡Reinventa tu color! Desde tonos naturales hasta colores vibrantes, dale a tu cabello ese toque especial que estabas buscando.",
    },
  ];

  return (
    <div className="servicios-container">
      <div className="cards-grid">
        {servicios.map((servicio, index) => (
          <div className="card" key={index} data-aos="fade-up">
            <div className="card-img-container">
              <img src={servicio.imagen} alt={servicio.titulo} className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{servicio.titulo}</h3>
              <p className="card-textt">{servicio.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainServicios;