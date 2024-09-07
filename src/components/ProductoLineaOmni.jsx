import "../css/ProductosLineaOmni.css"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"
import OmniRestoreShampoo from "../assets/omni-restore-shampoo.png"
import OmniRestoreConditioner from "../assets/omni-restore-conditioner.png"
import OmniRestoreTreatment from "../assets/omni-restore-treatment.png"
import OmniRestoreProtector from "../assets/omni-restore-protector.png"


const ProductoLineaOmni = () => {
    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div className="Productos">
        
        <div className="product-card" data-aos="flip-left">
            <img src={OmniRestoreShampoo} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#8eb0de" }}>Omni Restore Shampoo</h3>
                <p className="product-description">
                Limpia, protege y comienza el proceso de mantenimiento y restauración para el cabello. <br />
                Para personas con todo tipo de cabello. <br />
                Contiene un concentrado exclusivo de ingredientes activos con resultados inmediatos.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#8eb0de" }}>Omni Restore Conditioner</h3>
                <p className="product-description">
                Protege y promueve la resistencia y restauración para el cabello. <br />
                Para personas con todo tipo de cabello. <br />
                Gracias a sus protectores solares, prolonga la vida del color por más tiempo.
                </p>
            </div>
            <img src={OmniRestoreConditioner} alt="Sample" className="product-image" />
        </div>

        <div className="product-card" data-aos="flip-left">
            <img src={OmniRestoreTreatment} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#8eb0de" }}>Omni Restore Treatment</h3>
                <p className="product-description">
                Recupera el brillo y la sedosidad, acondiciona, reduce la estática, promueve la hidratación. <br />
                Para personas con todo tipo de cabello. <br />
                Gracias a sus protectores solares prolonga la vida del color por más tiempo.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#8eb0de" }}>Omni Restore Protector</h3>
                <p className="product-description">
                Reduce la estática, facilita el peinado, acondiciona y ayuda a resistir los procesos de peinado. <br />
                Para personas con cabello procesado. <br />
                Gracias a sus protectores solares prolonga la vida del color por más tiempo.
                </p>
            </div>
            <img src={OmniRestoreProtector} alt="Sample" className="product-image" />
        </div>

    </div>
  )
}

export default ProductoLineaOmni