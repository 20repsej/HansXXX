var map = L.map('mapid').setView([60.499899, 15.426437], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([60.499899, 15.426437]).addTo(map)
    .bindPopup('Soltorgsgymnasiet')
    .openPopup();

function search() {
    query = 'hello world';
    url = 'http://www.google.com/search?q=' + query;
    window.open(url, '_blank');
}