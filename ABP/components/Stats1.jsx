// Stats.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import React from 'react';



// Registramos los componentes del gráfico
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

function Stats1 ({ total, min, max, avg }) {
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
    title: {
      display: true,
      text: 'Estadísticas de Productos',
    },
  },
};

    const labels = ['Precio Mínimo', 'Precio Máximo', 'Promedio'];

    const data = {
        labels,
        datasets: [
                {
                    label: 'Valores',
        data: [total, min, max, avg],
        borderColor: 'rgb(96, 26, 74)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{maxWidth: '500px'}}>
    <Line options={options} data={data} />
    </div>
  );
}

export default Stats1;
