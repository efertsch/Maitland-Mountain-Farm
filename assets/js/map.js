var locations = [
  { name: "The Lobster Shanty", latitude: 42.520396, longitude: -70.894639, type: "service"},
  { name: "Sea Level", latitude: 42.520262, longitude: -70.887796, type: "service"},
  { name: "The Blue Ox", latitude: 42.463266, longitude: -70.947593, type: "service"},
  { name: "The Corner Butcher Shop", latitude: 42.556560, longitude: -70.889357, type: "retail"}
]


function initMap() {
  var salem = {lat: 42.519539, lng: -70.896713};
  var map = new google.maps.Map(document.getElementById('map'), {
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
  
  locations.forEach(function(location){
    var coords = {};
      coords["lat"] = location.latitude
      coords["lng"] = location.longitude
    var marker = new google.maps.Marker({
      icon: icons[location.type].icon,
      position: coords,
      map: map
    });
  });
}





