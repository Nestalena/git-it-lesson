var map = L.map("map").setView([66.8261, 133.44361], 4.5);
map.zoomControl.setPosition('topright');

var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 12
});
Esri_NatGeoWorldMap.addTo(map);

//setMaxBounds (map, 104.765625, 74.44935750063425, 162.158203125, 49.55372551347579);