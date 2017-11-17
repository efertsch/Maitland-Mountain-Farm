var locations = [
  { name: "Boston", latitude: 42.361145, longitude: -71.057083, type: "service" },
  { name: "Newburyport", latitude: 42.812358, longitude: -70.891095, type: "retail" }
]


function initMap() {
  var salem = {lat: 42.519539, lng: -70.896713};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
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
   
