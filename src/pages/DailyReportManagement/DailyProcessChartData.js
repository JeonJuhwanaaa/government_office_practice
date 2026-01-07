import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ProcessChartData() {
  const data = {
    labels: ['미조치', '조치중', '완료'],
    datasets: [{
        data: [12, 25, 13],
        backgroundColor: [
            '#CF0F0F', // 미조치
            'rgb(255, 205, 86)', // 조치중
            'rgb(54, 162, 235)' // 완료
        ],
        borderWidth: 0,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          font: { size: 12 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}건`,
        },
      },
      datalabels: {
        formatter: (value) => `${value}`
      }
    },
    cutout: '65%', // 도넛 두께
  };

  return <Doughnut data={data} options={options} />;
}
