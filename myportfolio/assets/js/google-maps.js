function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:18.2497312582890318, lng:78.24491093841247 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vishnu Marg, Madhapur' // Title Location
    });
}
