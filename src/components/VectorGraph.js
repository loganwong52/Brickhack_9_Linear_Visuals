
import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

export const options = {
  scales: {
    x: {
      beginAtZero: false,
      min: -5,
      max: 5,
      ticks: {
        stepSize: 1
      }
    },
    y: {
      beginAtZero: false,
      min: -5,
      max: 5,
      ticks: {
        stepSize: 1
      }
    },
  },
  responsive:true,
  maintainAspectRatio:false,
  animation: {
    duration: 0,
  },
};

const arr = Array.from({ length: 121 }, (_, index) => {
  const newX = Math.floor(index / 11) - 5;
  const newY = (index % 11) - 5;
  return {
    data: [
      { x: 0, y: 0},
      { x: newX, y: newY },
    ],
    showLine: true,
    pointBackgroundColor: `rgba(${(newX+5)*255/10}, ${(newY+5)*255/10}, ${255-(newX+5)*255/10}`,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    pointRadius: 5,
  };
});

const transform = (r0c0, r0c1, r1c0, r1c1) => {
  const newLines = arr.map((line) => {
      const oldX = line.data[1].x;
      const oldY = line.data[1].y;
      let newLine = JSON.parse(JSON.stringify(line));
      newLine.data[1].x = oldX * r0c0 + oldY * r0c1;
      newLine.data[1].y = oldX * r1c0 + oldY * r1c1;
      return newLine;
  });
  console.log("transform ran");
  return newLines;
}

export default function VectorGraph({startAnimation, setStartAnimation, r0c0, r0c1, r1c0, r1c1}) {
  ChartJS.register(LinearScale, PointElement, LineElement);

  const [data, setData] = useState({
    datasets: arr
  });
  
  useEffect(() => {
    console.log(startAnimation)
    if (startAnimation) {
      const newLines = transform(r0c0, r0c1, r1c0, r1c1);
      setData({
        datasets: newLines
      });
      console.log(newLines);
      setStartAnimation(true);
    }
  }, [startAnimation]);
  
  return <Scatter options={options} data={data} />;
}