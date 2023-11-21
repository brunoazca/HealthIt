import { data } from './data.js';
import { updateDisplay } from './updateDisplay.js';
import { initializeMediaAtvFisicaChart, initializePesoTempoChart, initializeDoughnutChart } from './initializeCharts.js';
import { initializeMap } from './mapInitialization.js';

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay(data.horasDormidas, data.horasDormidasIdeal, 'sonoUser', 'sonoIdeal');
    updateDisplay(data.mediaAtividadeFisica, data.mediaIdealAtividadeFisica, 'atvFisicaUser', 'atvFisicaIdeal');

    initializeMediaAtvFisicaChart();
    initializePesoTempoChart();
    initializeDoughnutChart();
    initializeMap();
});