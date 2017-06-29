//AIzaSyB1Rl2lwZOs1GIl1XZR90ye6aHqhj7x8CA

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 29.938963,
    lng: -90.114215
  },
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var marker = new google.maps.Marker({
          position: {
            lat: 29.938963,
            lng: -90.114215
          },
          map: map
        });
}