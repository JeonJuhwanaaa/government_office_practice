import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register( CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels );

export default function RiskChartData() {
  const data = {
    labels: ['하', '중', '상'],
    datasets: [
      {
        label: '건수',
        data: [13, 25, 12], // ✅ 위험도별 건수로 교체
        backgroundColor: [
            '#FFD41D',
            '#F79A19',
            '#CF0F0F',
        ],
        borderWidth: 0,
        barThickness: 25, // 막대 두께 (선택)
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
        max: 30,
        ticks: {
          precision: 0, // 소수점 제거
        },
      },
    },
    plugins: {
      legend: {
        display: false, // label(건수) 굳이 안 보이게 (원하면 true)
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed.y}건`,
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value) => `${value}`,
        font: { size: 12, weight: 'bold' },
      },
    },
  };

  return <Bar data={data} options={options} />;
}