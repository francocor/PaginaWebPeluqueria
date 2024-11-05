import "../css/ProductosLineaNourishing.css"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"
import EssentialOilShampoo from "../assets/essential-oil-shampoo.png"
import EssentialOilConditioner from "../assets/essential-oil-conditioner.png"
import EssentialOilMask from "../assets/essential-oil-mask.png"
import EssentialOilTreatment from "../assets/essential-oil-treatment.png"



const ProductosLineaNourishing = () => {
    useEffect(() => {
        Aos.init();
      }, []);


  return (
    <div className="Productos">

    <div className="product-card" data-aos="flip-left">  
            <img src={EssentialOilShampoo} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#c9574c" }}>Essential Oil Shampoo</h3>
                <p className="product-description">
                Proporciona una limpieza suave y nutrición. <br />
                Para personas con todo tipo de cabello. <br />
                Desarrollado con una fusión de aceites naturales y una fragancia de larga duración. Proporciona una limpieza suave y nutrición al cabello.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#c9574c" }}>Essential Oil Conditioner</h3>
                <p className="product-description">
                Proporciona acondicionamiento suave y nutrición al cabello. <br />
                Para personas con cabello sobreprocesado. <br />
                Contiene un exclusivo concentrado de aceites e ingredientes naturales que brinda una limpieza suave y una experiencia de baño por su aromática fragancia.
                </p>
            </div>
            <img src={EssentialOilConditioner} alt="Sample" className="product-image" />
        </div>

        <div className="product-card" data-aos="flip-left">
            <img src={EssentialOilMask} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#c9574c" }}>Essential Oil Mask</h3>
                <p className="product-description">
                Mejora la peinabilidad y desenredo además de contribuir a proveer una mayor luminosidad en el cabello. <br />
                Para personas con todo tipo de cabello. <br />
                Contiene un exclusivo concentrado de aceites e ingredientes naturales que brinda una limpieza suave y una experiencia de baño por su aromática fragancia.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#c9574c" }}>Essential Oil Treatment</h3>
                <p className="product-description">
                Proporciona suavidad y nutre el cabello sin dejar residuos y con sensación ligera. Minimiza puntas abiertas y es ideal para estilizar con herramientas de calor. <br />
                Para personas con cabello sobreprocesado. <br />
                Contiene ingredientes naturales que brindan una limpieza suave y una experiencia de baño por su aromática fragancia.
                </p>
            </div>
            <img src={EssentialOilTreatment} alt="Sample" className="product-image" />
        </div>

    </div>
  )
}

export default ProductosLineaNourishing