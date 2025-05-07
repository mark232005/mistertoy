import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
export function PieChart({ toys }) {
    console.log(labelCounts());
    function labelCounts() {
        return  toys.filter(toy=>toy.inStock).reduce((acc, toy) => {
            toy.labels.forEach(label => {
                acc[label] = (acc[label] || 0) + 1;
            });
            return acc;
        }, { 'On wheels': 0, 'Box game': 0, 'Art': 0, 'Baby': 0, 'Doll': 0, 'Puzzle': 0, 'Outdoor': 0, 'Battery Powered': 0 });

    }
    ChartJS.register(ArcElement, Tooltip, Legend);
    const labels = ['Art', 'Baby', 'Battery Powered', 'Box game', 'Doll', 'On wheels', 'Outdoor', 'Puzzle']
    const counts = labelCounts();
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: labels.map(label => counts[label] || 0),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(0, 204, 102, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(0, 204, 102, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}
