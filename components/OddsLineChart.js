import { useEffect } from "react"
import { Chart } from "chart.js";

export default function OddsLineChart({oddsArray}) {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    let goldLabels = [];
    for (let i = 0; i < 60; i += 2) {
        goldLabels.push(i);
    }
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: goldLabels,
        datasets: [{
          data: oddsArray,
          label: "Odds of Hitting",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Probability'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Gold Spent'
            }
          }]
        }     
      }
    });
  }, [oddsArray])

  return (
    <div>
      {/* line chart */}
      <h1 className="w-full text-center mt-10 text-xl font-semibold capitalize ">Total Odds</h1>
      <div className="w-[1100px] flex mx-auto">
        <div className='border border-gray-400 pt-0 mt-8 mb-20 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </div>
  )
}