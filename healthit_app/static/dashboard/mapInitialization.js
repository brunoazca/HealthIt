import L from 'leaflet';

export function initializeMap() {
    const map = L.map('map').setView([51.505, -0.09], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // ... Tile layer configuration ...
    }).addTo(map);

    L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('You are here.')
        .openPopup();
}