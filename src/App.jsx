import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MainServicios from './pages/MainServicios';
import MainProductos from "./pages/MainProductos"
/*import MainCursos from "./pages/MainCursos"*/
import MainTurnos from './pages/MainTurnos';
import ProductosLineaCurls from "./pages/ProductosLineaCurls"
import ProductosLineaOmni from "./pages/ProductosLineaOmni"
import ProductosLineaNourishing from "./pages/ProductosLineaNourishin"


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainServicios" element={<MainServicios />} />
        <Route path="/MainProductos" element={<MainProductos />} />
        {/*<Route path="/MainCursos" element={<MainCursos />} />*/}
        <Route path="/MainTurnos" element={<MainTurnos />} />
        <Route path="/ProductosLineaCurls" element={<ProductosLineaCurls />} />
        <Route path="/ProductosLineaOmni" element={<ProductosLineaOmni />} />
        <Route path="/ProductosLineaNourishing" element={<ProductosLineaNourishing />} />
      </Routes>

  );
}

export default App;