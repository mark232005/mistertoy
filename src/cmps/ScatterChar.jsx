import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { toyService } from '../services/toy.service-remote.js';

export function ScatterChart({ toys = [] }) {
    console.log(toys)
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

    function maxPrice() {
        const prices = toys.map(toy => toy.price).filter(price => typeof price === 'number' && !isNaN(price));
        return prices.length > 0 ? Math.max(...prices) : 100;
    }

    const max = maxPrice();

    const labels = toyService.labels;

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: labels,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        datasets: [
            {
                label: 'Price of Toys',
                data: toys
                .filter(toy => toy.labels && toy.price && typeof toy.price === 'string'||'number' && !isNaN(parseFloat(toy.price))) // סינון הצעצועים עם מחירים תקינים
                .flatMap(toy => 
                  toy.labels.map(label => ({
                    x: label,  
                    y: parseFloat(toy.price), 
                  }))
                ),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    return <Scatter options={options} data={data} />;
}
