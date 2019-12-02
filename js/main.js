function toggleMenu(x) {
    x.classList.toggle('responsive-opened');
    document.getElementById('main-nav').classList.toggle('responsive-opened')
}

function myMap() {
    // Sets coordinates, zoom level (0-20) and displays map in div with #map
    var coords = new google.maps.LatLng(45.3391794, 17.6716303);
    var mapProperties = {
        center: coords,
        zoom: 12,
        // Set cantrols to SMALL
        zoomControl: true
    };
    // Displays map in div with #map
    var map = new google.maps.Map(document.getElementById("map"), mapProperties);
    // Animated marker
    var marker = new google.maps.Marker({position: coords});
    marker.setMap(map);
    // Info Window
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>Dr. Teeth</h3><h4>117 Crown Street,</h4><h4>Camberwell,</h4><h4>London, UK</h4>'
    });
    // Click The Marker to open Info Window
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });
}