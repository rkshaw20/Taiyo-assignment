import { Line } from "react-chartjs-2";
import { defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart = ({ chartData }: any) => {
  const dates = Object.keys(chartData?.cases);
  const cases = Object.values(chartData?.cases);
  const deaths = Object.values(chartData?.deaths);

  return (
    <div className="w-full h-full">
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              label: "Cases",
              data: cases,
              backgroundColor: "blue",
              borderColor: "blue",
              pointStyle: false,
            },
            {
              label: "Death",
              data: deaths,
              backgroundColor: "red",
              borderColor: "red",
              pointStyle: false,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
