// Google Maps API initialization
function initMap() {
    // The location of the event
    var eventLocation = {lat: 37.4429964, lng: -122.1545229};
    // The map, centered at the event location
    var map = new google.maps.Map(
        document.getElementById('map'),
        {zoom: 15, center: eventLocation});
    // The marker, positioned at the event location
    var marker = new google.maps.Marker(
        {position: eventLocation, map: map});
}