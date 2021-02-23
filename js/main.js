var map = L.map('mapid').setView([60.492695, 15.416517], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([60.492695, 15.416517]).addTo(map)
    .bindPopup('Soltorgsgymnasiet')
    .openPopup();

function search() {
    query = 'hello world';
    url = 'http://www.google.com/search?q=' + query;
    window.open(url, '_blank');
}