function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(-1.3005085, 36.7824131),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

// // Creating a marker and positioning it on the map
// var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(-1.3005085, 36.7824131),
//     map: map
// });
//
//
// }


// function initialize() {
//     var latlng = new google.maps.LatLng(37.869565, -122.258786);
//     var myOptions = {
//         zoom: 17,
//         center: latlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     var map = new google.maps.Map(document.getElementById("map_canvas"),
//         myOptions);
