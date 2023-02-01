import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { WindowWidthContext } from '../App';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart( { dataUser }) {

  const windowWidth = useContext(WindowWidthContext);

  const data = {
    labels: dataUser.map(sector=>sector.sector),
    datasets: [
      {
        label: '% of interactions for each sector',
        data: dataUser.map(sector=>sector.percentage),
        backgroundColor: [
          'rgba(128,0,0, 0.2)',
          'rgba(240,128,128, 0.2)',
          'rgba(255,215,0, 0.2)',
          'rgba(119,136,153, 0.2)',
          'rgba(0,100,0, 0.2)',
          'rgba(0,255,255, 0.2)',
          'rgba(25,25,112, 0.2)',
          'rgba(238,130,238, 0.2)',
          'rgba(250,235,215, 0.2)',
          'rgba(139,69,19, 0.2)',
          'rgba(255,0,0, 0.2)',
        ],
        borderColor: "white",
        borderWidth: 3,
        
        datalabels: {
          display: "auto",
          font: {
            weight: 'bold',
            size: windowWidth >= 640 ? 14 : 12
          },
          align: windowWidth >= 640 ? "end" : "center",
          anchor: windowWidth >= 640 ? 'end' : "center",
          offset: 16,
          formatter: function(value, context) {
            return windowWidth > 1024 ? `${context.chart.data.labels[context.dataIndex]}: ${value}%` : `${value}%`;}
        }
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout:{
      padding: {
        left: 200,
        right: 200,
        bottom: 300
   }
  },
    plugins: {
      legend: {
        display: false
      }
    },
    
  };

  

  return <Pie data={data} options={options} />;
}
