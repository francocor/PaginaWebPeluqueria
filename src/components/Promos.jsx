import "../css/promoDelMes.css";
import Aos from "aos";
import { useEffect } from "react";

const Promos = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const treatments = [
    { name: "Corte", corto: 15000, medio: null, largo: null, extraLargo: null },
    { name: "Brushing", corto: 5400, medio: 6600, largo: 8000, extraLargo: 9200 },
    { name: "Secado/Modelado", corto: 3500, medio: 4200, largo: 5200, extraLargo: 6800 },
    { name: "Brushing c/Plancha", corto: 6700, medio: 8200, largo: 9700, extraLargo: 14000 },
    { name: "Color", corto: 25000, medio: 29000, largo: 39000, extraLargo: 45000 },
    { name: "Reflejos", corto: 39500, medio: 48000, largo: 71000, extraLargo: 84000 },
    { name: "Lavado", corto: 4900, medio: 4900, largo: 4900, extraLargo: 4900 },
    { name: "Lavado Especial", corto: 5700, medio: 5700, largo: 5700, extraLargo: 6800 },
    { name: "Nutrición", corto: 6400, medio: 7500, largo: 8700, extraLargo: 11400 },
    { name: "Tratam. Botox", corto: 22700, medio: 24900, largo: 28200, extraLargo: 34000 },
    { name: "Tratam. Color Plex", corto: 26000, medio: 29000, largo: 34000, extraLargo: 38000 },
    { name: "Permanente", corto: 30000, medio: 38000, largo: 52000, extraLargo: 63000 },
    { name: "Tratam. Karsell", corto: 25000, medio: 30000, largo: 39000, extraLargo: 49000 },
    { name: "Botox/Keratina", corto: 25000, medio: 29200, largo: 38000, extraLargo: 43000 },
    { name: "Alisado", corto: 35000, medio: 39000, largo: 43000, extraLargo: 49000 },
    { name: "Balayage", corto: 49000, medio: 59000, largo: 79000, extraLargo: 89000 },
    { name: "Deco. Global", corto: 70000, medio: 90000, largo: 110000, extraLargo: 130000 },
    { name: "Peinado Recogido", corto: 45000, medio: null, largo: null, extraLargo: null },
    { name: "P. Semi Recogido", corto: 45000, medio: null, largo: null, extraLargo: null },
    { name: "Maquillaje Salón", corto: 80000, medio: null, largo: null, extraLargo: null },
  ];

  return (
    <div className="Promos">
      <h1>Lista de Precios</h1>
      <table className="price-table">
        <thead>
          <tr>
            <th>Tratamiento</th>
            <th>Corto</th>
            <th>Medio</th>
            <th>Largo</th>
            <th>Extra Largo</th>
          </tr>
        </thead>
        <tbody>
  {treatments.map((treatment, index) => (
    <tr key={index}>
      <td data-label="Tratamiento">{treatment.name}</td>
      <td data-label="Corto">{treatment.corto || "-"}</td>
      <td data-label="Medio">{treatment.medio || "-"}</td>
      <td data-label="Largo">{treatment.largo || "-"}</td>
      <td data-label="Extra Largo">{treatment.extraLargo || "-"}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default Promos;
