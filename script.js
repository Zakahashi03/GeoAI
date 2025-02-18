// Initialiser Leaflet-kartet og sett visningspunkt
var map = L.map('map').setView([58.146, 7.995], 13); // Kristiansand koordinater

// Legg til OpenStreetMap-fliser som bakgrunnskart
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Legg til en markør på kartet
L.marker([58.146, 7.995]).addTo(map)
    .bindPopup('Kristiansand sentrum')
    .openPopup();

    
var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);