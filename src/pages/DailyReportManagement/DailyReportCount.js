import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ChartDataLabels);

export default function DailyReportCount() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const counts = [4, 6, 3, 7, 5, 6, 4, 3, 4, 3, 3, 2];

  const data = {
    labels,
    datasets: [
      {
        label: '신고 건수',
        data: counts,
        borderColor: '#456882',
        // backgroundColor: 'rgba(54, 162, 235, 0.15)',
        tension: 0.25,
        pointRadius: 1,
        pointHoverRadius: 3,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          precision: 0,
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.parsed.y}건`,
        },
      },
      // ✅ 점 위에 숫자 표시(원치 않으면 이 블록 삭제)
      datalabels: {
        align: 'top',
        anchor: 'end',
        formatter: (value) => `${value}`,
        font: { size: 11, weight: 'bold' },
      },
    },
  };

  return <Line data={data} options={options} />;
}