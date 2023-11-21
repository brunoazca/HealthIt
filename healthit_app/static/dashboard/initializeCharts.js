import Chart from 'chart.js/auto';
import { data } from './data.js';

export function initializeMediaAtvFisicaChart() {
    const ctx = document.getElementById('MediaAtvFisicaChart').getContext('2d');
    new Chart(ctx, {
        // ... MediaAtvFisicaChart configuration ...
    });
}

export function initializePesoTempoChart() {
    const ctx = document.getElementById('pesoTempoChart').getContext('2d');
    new Chart(ctx, {
        // ... PesoTempoChart configuration ...
    });
}

export function initializeDoughnutChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctx, {
        // ... DoughnutChart configuration ...
    });
}