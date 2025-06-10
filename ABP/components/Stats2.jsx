import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Stats2 ({ total, min, max, avg }) {
    const data = {
  labels: [ 'Precio Mínimo', 'Precio Máximo', 'Promedio'],
  datasets: [
    {
      label: 'Estadísticas de precios',
      data: [ total, min, max, avg],
      backgroundColor: [
         'rgba(76, 0, 102, 0.2)',   // violeta oscuro
         'rgba(255, 255, 153, 0.2)',    // amarillo
         'rgba(178, 102, 255, 0.2)', // violeta claro
         'rgba(128, 0, 128, 0.2)',   // indigo
        ],
    
      borderColor: [
         'rgba(76, 0, 102, 1)',      // violeta oscuro
         'rgba(255, 255, 153, 0.2)',    // amarillo
         'rgba(178, 102, 255, 0.2)',   // violeta claro
         'rgba(128, 0, 128, 0.2)',   // indigo
        ],

      borderWidth: 1,
    },
  ],
};

  return (
  <div style={{maxWidth: '500px'}}> 
  <Pie data={data} />
  </div>);
}

export default Stats2;
