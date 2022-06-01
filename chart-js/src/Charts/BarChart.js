import React, {useState, useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var apiKey = "coinrankinge76c2e786a42059c4a28bf88a8598d9f4a1c293f18c687b3";
    const [chart,setChart] = useState([])

    useEffect(()=>{
        const fetchCoin = async () =>{
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Contenty-Type':'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': "*"
                }
            }).then(response =>{
                response.json().then(json=>{
                    setChart(json.data)
                })
            }).catch(error=>{
                console.log(error)
            })
        }

        fetchCoin()
    },[baseUrl,proxyUrl,apiKey])



    let data = {
        labels: chart.coins.map(item=>item.name),
        datasets: [{
            label: `${chart.coins.length} Coins Available `,
            data: chart.coins.map(item=>item.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var  options=  {
        mantainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
    }


  return (
    <div>
        <Bar
        height={400}
        data={data}
        options={options}
        />
    </div>
  )
}

export default BarChart