import React, {useRef, useState,useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import {FormatNumber} from './utils'
ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    LineElement,
    PointElement
)

const createBackgroundGradient = (ctx) =>{
    let gradient = ctx.createLinearGradient(0,0,0,150);
    gradient.addColorStop(0, "rgba(0,124,194, 0.1)")
    gradient.addColorStop(0.5, "rgba(0,124,194, 0.3)")
    gradient.addColorStop(1, "rgba(0,124,194, 0.7)")
    return gradient
}


// return {
const sampleData = {
    labels: [0,14,59,79],
    datasets:[
        {
        data:[
            {x:0,y:20948},
            {x:14,y:20092},
            {x:59,y:19900},
            {x:79,y:19900}
        ],
    },
  ]
}



const CustomizedView = () => {
    const chartRef = useRef(null);
    const [chartData,setChartData] = useState(sampleData)

    useEffect(() => {
        const chart = chartRef.current;
      
        if (chart) {
          setChartData({
            labels: [0,14,59,79],
            datasets: [{
                fill:true,
                backgroundColor: createBackgroundGradient(chart.ctx),
                data:[
                    {x:0,y:20948},
                    {x:14,y:20092},
                    {x:59,y:19900},
                    {x:79,y:19900}
                ],
            }]
          });
        }
      }, []);
 
  return (
    <Line
    ref={chartRef}
    width={600}
    data={chartData}
    options={{
        legend:{
            display:false,
        },
        layout:{padding:20},
        elements:{
            line:{
                borderWidth:3,
                tension:1,
                borderColor:'#007cc2',
                stepped:true
            },
            point:{
                borderColor: '#027DC4',
                borderWidth:2,
                backgroundColor: '#fff',
                radius:5,
                hoverRadius:7,
                hoverBorderWidth:2
            },
        },
        scales:{
            yAxes:
                {
                    gridLines: {
                        color:'#F7F7F7',
                        lineWidth:2,
                        zeroLineColor:'#F7F7F7'
                    },
                    ticks: {
                        fontColor:'#888',
                        padding:15,
                        stepSize:500,
                        callback: (value)=>{
                            return `$${FormatNumber(value)}`
                        }
                    }
                },
            xAxes:
                {
                    gridLines: {
                        color:'#F7F7F7',
                        lineWidth:2,
                        zeroLineColor:'#F7F7F7'
                    },
                    ticks: {
                        fontColor:'#888',
                        padding:15,
                        stepSize:500,
                        callback: (value)=>{
                            return `${FormatNumber(value)} days`
                        }
                    }
                }
            
        }

        
    }}
    type='line'>
    </Line>
  )
}

export default CustomizedView