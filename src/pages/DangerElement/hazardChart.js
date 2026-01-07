import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { hazardReportStatus } from "./hazardReportData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function HazardLineChart() {
    const data = {
        labels: hazardReportStatus.map(item => item.facilityType),
        datasets: [
            {
                label: "처리율",
                data: hazardReportStatus.map(item => item.processRate),
                borderColor: "#e74a3b",
                // pointBackgroundColor: "#e74a3b",
                pointRadius: 5,
                tension: 0.35,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            y: {
                min: 60,
                max: 95,
                ticks: {
                callback: v => `${v}%`,
                },
            },
        },
        plugins: {
            legend: { 
                position: "bottom" 
            },
        },
    };
    return <Line data={data} options={options} />;
}