import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Colors,


}
    from "chart.js";

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ICanalsData, IChartData} from "../../types/ContextCanal";


ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Colors,


);


export const PieChart = () =>
{

    const [chartData, setChartData] = useState<IChartData>({
        datasets: [], labels: undefined
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(()=> {


        async function fetchdata() {
            const apiCanals = await axios.get('canals')
                .then((response) => {
                    setChartData
                    (
                        {
                            labels: response.data.data.map((data:ICanalsData) => data.name),
                            datasets: [{
                                label: "Users amount",
                                data: response.data.data.map((data:ICanalsData) => data.amount),

                            }]

                        })


                    setChartOptions({
                        responsive: true,
                        plugins:
                            {
                            legend: {
                                position: "top",
                            },
                            title: {
                                display: true,
                                text: "Canals ",
                            },
                            colors: {
                                forceOverride: true,
                            },

                            datalabels:
                                {

                                    formatter: (value:number, ctx:any) => {
                                        let sum = 0;
                                        let dataArr = ctx.chart.data.datasets[0].data;
                                        dataArr.map((data: number) => {
                                            sum += data;
                                        });
                                        let percentage = (value*100 / sum).toFixed(2)+"%";
                                        return percentage;
                                    },
                                    color: '#000',
                                }

                        },
                    });


                })
        }
        fetchdata()




    }, []);


    return (

        <div style={{width:500}}>
            <div>
                 <Pie options={chartOptions} plugins={[ChartDataLabels]} data={chartData}/>
            </div>
        </div>
    );
}

