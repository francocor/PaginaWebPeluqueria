import "../css/ProductoLineaCurls.css"
import CurlsConditioner from "../assets/curls-conditioner.png"
import CurlsGel from "../assets/curls-gel.png"
import CurlsLeaveInCream from "../assets/curls-leave-in-cream.png"
import CurlsShampoo from "../assets/curls-shampoo.png"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"

const ProductoLineaCurls = () => {

    useEffect(() => {
        Aos.init();
      }, []);


      
  return (
    <div className="Productos">

        <div className="product-card" data-aos="flip-left">
            <img src={CurlsShampoo} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#3a6581" }}>Curls Shampoo</h3> 
                <p className="product-description">
                Aporta suavidad a los rizos y evita el encrespamiento. <br />
                Para todo tipo de rizos. <br />
                Gracias a su BOUNCY TECHNOLOGY y su contenido de extractos de flores, 
                plantas y la mezcla en equilibrio con aceites naturales, 
                aporta definición e hidratación a los rizos, con un control suave y brillante al tacto, 
                dando un efecto de resorteo en el bucle de acción inmediata.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#39267c" }}>Curls Conditioner</h3>   
                <p className="product-description">
                Acondiciona suavemente el cabello hidratando los rizos, ayudando a evitar el encrespamiento. <br />
                Para todo tipo de rizos. <br />
                Gracias a su BOUNCY TECHNOLOGY y su contenido de extractos de flores, 
                plantas y la mezcla en equilibrio con aceites naturales, 
                aporta definición e hidratación a los rizos, con un control suave y brillante al tacto, 
                dando un efecto de resorteo en el bucle de acción inmediata.
                </p>
            </div>
            <img src={CurlsConditioner} alt="Sample" className="product-image" />
        </div>

        <div className="product-card" data-aos="flip-left">
            <img src={CurlsLeaveInCream} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#5a9d27" }}>Curls Leave In Cream</h3>    
                
                <p className="product-description">
                Brinda manejabilidad dando definición y forma a los rizos generando un efecto Anti-Frizz. <br />
                Para todo tipo de rizos. <br />
                Gracias a su BOUNCY TECHNOLOGY y su contenido de extractos de flores, 
                plantas y la mezcla en equilibrio con aceites naturales, 
                aporta definición e hidratación a los rizos, con un control suave y brillante al tacto, 
                dando un efecto de resorteo en el bucle de acción inmediata.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-left">
            <div className="product-content">
                <h3 className="product-title" style={{ color: "#970305" }}>Curls Definition Gel</h3>  
                <p className="product-description">
                Gel de fijación baja- media que aporta máximo control con efecto anti frizz. <br />
                Para todo tipo de rizos. <br />
                Gracias a su BOUNCY TECHNOLOGY y su contenido de extractos de flores, 
                plantas y la mezcla en equilibrio con aceites naturales, 
                aporta definición e hidratación a los rizos, con un control suave y brillante al tacto, 
                dando un efecto de resorteo en el bucle de acción inmediata .
                </p>
            </div>
            <img src={CurlsGel} alt="Sample" className="product-image" />
        </div>

    </div>
  )
}

export default ProductoLineaCurls