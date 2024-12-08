/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { Chart, registerables } from 'chart.js';

/**
 * Write any other JavaScript below
 */


Chart.register(...registerables);

const ctx = document.getElementById('graficoBarras').getContext('2d');

const data = {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [{
    label: 'Asistentes anuales',
    data: [10, 20, 30, 40, 50],
    backgroundColor: 'hwb(5 35% 15% / 0.6)',
    borderColor: 'hwb(192 0% 71%)',
    borderWidth: 2
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

new Chart(ctx, config);
