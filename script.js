$('#hw').dialog({
  close:function(){
    alert('Welcome to the World\'s #1 site on the New Orleans Music Scene')
  }
})

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
