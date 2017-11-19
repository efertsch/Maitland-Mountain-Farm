var locations = [
  { name: "The Lobster Shanty", latitude: 42.520396, longitude: -70.894639, type: "service", placeID: "ChIJmxCS2mQU44kR1d30Ke4dkiA"}
  // { name: "Sea Level", latitude: 42.520262, longitude: -70.887796, type: "service"},
  // { name: "The Blue Ox", latitude: 42.463266, longitude: -70.947593, type: "service", placeID: },
  // { name: "The Corner Butcher Shop", latitude: 42.556560, longitude: -70.889357, type: "retail"}
]


function initMap() {
  var salem = {lat: 42.519539, lng: -70.896713};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: salem
  });
  
  var icons = {
    service: {
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    },
    retail: {
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  };

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  
  locations.forEach(function(location){
    var coords = {};
      coords.lat = location.latitude; //dot notation for coords
      coords.lng = location.longitude; //dot notation for coords

    service.getDetails({
      placeId: location.placeID
      }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        var marker = new google.maps.Marker({
          icon: icons[location.type].icon,
          position: coords,
          map: map
         });

        google.maps.event.addListener(marker, "click", function() {
          infowindow.setContent("<div><strong><a href=" + place.website + ">" + place.name + "</a></strong><br>" +
            place.formatted_address + "</div>");
          infowindow.open(map, this);
        });
      }
    });
  });
}






