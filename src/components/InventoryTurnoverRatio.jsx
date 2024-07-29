import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend } from 'chart.js';
import './charts/ChartSetup'; // Import the Chart setup

Chart.register(ArcElement, Tooltip, Legend);

const InventoryTurnoverRatio = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['0.6', '1.2', '1.8', '2.4', '3.0', '3.6', '4.2', '4.8', '5.4', '30.0'],
                datasets: [{
                    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                cutout: '70%'
            }
        });

        return () => {
            chartInstance.destroy();
        };
    }, []);

    return (
        <div className="card chart-container">
            <h3>Inventory Turnover Ratio</h3>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default InventoryTurnoverRatio;
