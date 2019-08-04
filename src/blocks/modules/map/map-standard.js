// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        backgroundColor: '#212123',

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.7286986,37.6095727), // г. Москва, 1-я улица Измайловского Зверинца, д.8.

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]};

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('mapStandard');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var neighborhoods = [
        // Main
        {lat: 55.7111111, lng: 37.6666666, title: 'Ленинский проспект, д. 2А', icon: 'pin.svg'},
        {lat: 55.7222222, lng: 37.7777777, title: 'Ленинский проспект, д. 2А', icon: 'pin.svg'},
        {lat: 55.3333333, lng: 37.8888888, title: 'Ленинский проспект, д. 2А', icon: 'pin.svg'},
        {lat: 55.4444444, lng: 37.9999999, title: 'Ленинский проспект, д. 2А', icon: 'pin.svg'},
        {lat: 55.5555555, lng: 37.0000000, title: 'Ленинский проспект, д. 2А', icon: 'pin.svg'},
    ];

    var markers = [];

    function drop() {
        for (var i = 0; i < neighborhoods.length; i++) {
            addMarkerWithTimeout(neighborhoods[i], i * 10);
        }
    }

    function addMarkerWithTimeout(marker, timeout) {
        window.setTimeout(function() {
            markers.push(new google.maps.Marker({
                position: new google.maps.LatLng(marker["lat"], marker["lng"]),
                map: map,
                title: marker["title"],
                icon: {
                    url: "img/svg/" + marker["icon"]
                },
                animation: google.maps.Animation.DROP
            }));
        }, timeout);
    }

    drop();

}