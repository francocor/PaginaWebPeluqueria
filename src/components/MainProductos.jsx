import "../css/MainProductos.css";
import { useEffect } from "react";  
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import DueFaccettaMassimo from "../assets/due-faccetta-massimo-foto-home.png";
import CurlsFamilia from "../assets/curls-familia-foto-home.png"
import OmniRestoreFamilia from "../assets/omni-restore-familia-foto-home.png"
import FamiliaNourishingOils from "../assets/familia-nourishing-oils-nueva.png"
import DueFaccetaLungaDurata from "../assets/due-faccetta-lunga-durata.png"
import DueFaccetaGiornoPerGiorno from "../assets/due-faccetta-giorno-per-giorno-1.png"
import DesignerColorGallery from "../assets/designer-color-gallery.png"
import DesignerColorBrocha from "../assets/designer-color-brocha.png"
import DesignerColorCaja from "../assets/designer-color-caja.png"
import VibrantGallery1 from "../assets/vibrant-gallery1.png"
import VibrantColorsProduct from "../assets/vibrant-colors-product.png"
import VibrantGallery2 from "../assets/vibrant-gallery2.png"



const MainProductos = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Productos">

    
        <div className="product-card" data-aos="flip-left">
            <img src={CurlsFamilia} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title">Línea Curls</h3>
                <p className="product-description">
                    Aporta hidratación intensa, excelente suavidad evitando el encrespamiento y logrando gran definición y control dando como resultado rizos más luminosos y definidos. <br />
                    REFLEJA NUESTRA PASIÓN POR EL CABELLO ONDULADO Y RIZADO <br />
                    <a href="/ProductosLineaCurls">Mas info </a>
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-right">           
            <div className="product-content">
                <h3 className="product-title">Línea Omni Restore</h3>
                <p className="product-description">
                    Para cabello que está expuesto a procesos químicos, abuso de elementos para peinar y a la exposición a los radicales libres que dañan el cabello y hacen que no brille igual. <br />
                    PROTEGE, RESTAURA EL DAÑO Y PROLONGA LA DURACIÓN DEL COLOR <br />
                    <a href="/ProductosLineaOmni">Mas info </a>
                </p>
            </div>
            <img src={OmniRestoreFamilia} alt="Sample" className="product-image" />
        </div>

        <div className="product-card" data-aos="flip-left">
            <img src={FamiliaNourishingOils} alt="Sample" className="product-image" />
            <div className="product-content">
                <h3 className="product-title">Línea Nourishing Oil</h3>
                <p className="product-description">
                    Nutrición, sedosidad, brillo, cuidado del color, con resultados visibles desde la primera aplicación.
                    Cabello nutrido, suave y brillante, con resultados rápidos. <br />
                    CABELLO NUTRIDO, SUAVE Y BRILLANTE CON RESULTADOS RÁPIDOS <br />
                    <a href="/ProductosLineaNourishing">Mas info </a>
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-right">          
            <div className="product-content">
                <h3 className="product-title">Due Faccetta Massimo</h3>
                <p className="product-description">
                    Acondiciona y ayuda a reparar el cabello decolorado o sobreprocesado. Regula la porosidad del cabello. <br />
                    Para personas con cabello decolorado o sobreprocesado. <br />
                    Contiene extractos y aceites de ingredientes naturales que potencializan los resultados de reparación en la hebra capilar.
                </p>
            </div>
            <img src={DueFaccettaMassimo} alt="Sample" className="product-image" />
        </div>

        <div className="product-card" data-aos="flip-left">    
        <img src={DueFaccetaLungaDurata} alt="Sample" className="product-image" />       
            <div className="product-content">
                <h3 className="product-title">Due Faccetta Lunga Durata</h3>
                <p className="product-description">
                    Hidrata y acondiciona el cabello teñido. Evita la pérdida prematura del color. Facilita el desenredo y mejora la manejabilidad. <br />
                    Para personas con el cabello teñido. <br />
                    Sella la cutícula previniendo la pérdida del color.
                </p>
            </div>
        </div>

        <div className="product-card" data-aos="flip-right">           
            <div className="product-content">
                <h3 className="product-title">Due Faccetta Giorno Per Giorno</h3>
                <p className="product-description">
                    Ayuda a recuperar la humectación del cabello. Devuelve la suavidad y manejabilidad con resultados visibles. <br />
                    Para personas con cabello normal o seco. <br />
                    Contiene un concentrado exclusivo de ingredientes que proveen una hidratación intensiva que mejora visiblemente la apariencia del cabello.
                </p>
            </div>
            <img src={DueFaccetaGiornoPerGiorno} alt="Sample" className="product-image" />
        </div>


        <div className="product-card" data-aos="flip-left">

            <div className="designercolorimg">
                <img src={DesignerColorBrocha} alt="Brocha" className="small-image" />
                <img src={DesignerColorCaja} alt="Caja" className="small-image" />
                <img src={DesignerColorGallery} alt="Gallery" className="small-image" />
            </div>

            <div className="product-content">
                <h3 className="product-title">Designer Color</h3>
                <p className="product-description">Nueva fórmula con aroma suave y consistencia cremosa para una mejor 
                    aplicación y rendimiento. Enriquecida con OMEGACOLOR, Omega 6 y 9, que protegen e hidratan el cabello. 
                    Incluye aminoácidos que mejoran la elasticidad y reparan puntas abiertas, además de vitamina C como antioxidante. <br />
                    <a href="https://www.tecitaly.com.ar/coloracion/designer-color.html" target="_blank">Mas info </a>
                </p>
            </div>

        </div>


      
        <div className="product-card" data-aos="flip-right">

            <div className="product-content">
                <h3 className="product-title">Vibrant Colors</h3>
                <p className="product-description">Nueva coloración semipermanente con una paleta de colores de 
                    fantasía ideal para combinar, maximizando la creatividad del colorista, que logrará una inmensa 
                    gama multicolor: Intensos, vibrantes, pasteles, suaves, profundos u oscuros, ideales para la máxima 
                    personalización del color. <br />
                    <a href="https://www.tecitaly.com.ar/coloracion/vibrant-colors.html" target="_blank">Mas info </a>
                </p>
            </div>

            <div className="vibrantcolorimg">
                <img src={VibrantGallery1} alt="Gallery 1" className="small-image" />
                <img src={VibrantColorsProduct} alt="Product" className="small-image" />
                <img src={VibrantGallery2} alt="Gallery 2" className="small-image" />
            </div>

        </div>

    </div>
  );
};

export default MainProductos;