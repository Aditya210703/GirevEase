import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart,Tooltip,Title,ArcElement,Legend} from "chart.js"
import './PieChartData.css';
Chart.register(
    Tooltip,Title,ArcElement,Legend
)
const PieChartData = () => {
  // Mock data for the pie chart
  const data = {
    labels: ['Water-Works', 'Roads', 'Electricity', 'Waste','LawEnforcement','Miscellaneous'],
    datasets: [
      {
        data: [30, 20, 25, 15,12,3],
        backgroundColor: ['#00A9FF',  '#9E9FA5','#FFD95A', '#7D7C7C','#A7D397','#FF6384'],
        hoverBackgroundColor: ['#00A9FF',  '#9E9FA5', '#FFD95A','#7D7C7C','#A7D397','#FF6384'],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Doughnut data={data} />
    </div>
  );
};

export default PieChartData;
