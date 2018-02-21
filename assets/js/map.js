var locations = [
  { name: "The Lobster Shanty", latitude: 42.520396, longitude: -70.894639, placeID: "ChIJmxCS2mQU44kR1d30Ke4dkiA"},
  { name: "Sea Level - Salem", latitude: 42.520262, longitude: -70.887796, placeID: "ChIJG0J0XWYU44kRYH0-R6Wu5Lc"},
  { name: "The Blue Ox", latitude: 42.463266, longitude: -70.947593, placeID: "ChIJ-YpYw-Zs44kRk3GMD4hLj6w"},
  { name: "The Corner Butcher Shop", latitude: 42.556560, longitude: -70.889357, placeID: "ChIJa9UTCqQW44kRzpLiAP22Ud4"},
  { name: "Milk and Honey Green Grocer", latitude: 42.522704, longitude: -70.895471, placeID: "ChIJXxJZs3oU44kRxdLl8l-ed3Y"},
  { name: "Sea Level - Newburyport", latitude: 42.811776, longitude: -70.870265,  placeID: "ChIJK7wwHqjh4okR0v87dolGAPY"},
  { name: "The Common Crow", latitude: 42.630152, longitude: -70.638249, placeID: "ChIJD2fEGhsl44kRjT8zv3Vr54s"}
]


function initMap() {
  var salem = {lat: 42.519539, lng: -70.896713};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: salem
  });

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
        var marker = new google.maps.Marker({
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

var button = document.getElementsByClassName("btn");
button[0].addEventListener("click", function(){
  alert("clicked!");
});
