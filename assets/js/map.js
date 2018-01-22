var locations = [
  { name: "The Lobster Shanty", latitude: 42.520396, longitude: -70.894639, type: "service", placeID: "ChIJmxCS2mQU44kR1d30Ke4dkiA"},
  { name: "Sea Level", latitude: 42.520262, longitude: -70.887796, type: "service", placeID: "ChIJG0J0XWYU44kRYH0-R6Wu5Lc"},
  { name: "The Blue Ox", latitude: 42.463266, longitude: -70.947593, type: "service", placeID: "ChIJ-YpYw-Zs44kRk3GMD4hLj6w"},
  { name: "The Corner Butcher Shop", latitude: 42.556560, longitude: -70.889357, type: "retail", placeID: "ChIJa9UTCqQW44kRzpLiAP22Ud4"},
  { name: "Milk and Honey Green Grocer", latitude: 42.522704, longitude: -70.895471, type: "retail", placeID: "ChIJXxJZs3oU44kRxdLl8l-ed3Y"},
  { name: "Sea Level", latitude: 42.811776, longitude: -70.870265, type: "service", placeID: "ChIJK7wwHqjh4okR0v87dolGAPY"},
  { name: "The Common Crow", latitude: 42.630152, longitude: -70.638249, type: "retail", placeID: "ChIJD2fEGhsl44kRjT8zv3Vr54s"}
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



var collapseButton = document.getElementById("collapseButton");
var listButton = document.getElementById("listButton");
var tableDiv = document.getElementById("tableHolder");


function toggleDisplay(elem){
  if (elem.style.display !== "none") {
    elem.style.display = "none";
  } else {
    elem.style.display = "block";
  }
}

listButton.addEventListener("click", function(){
  listButton.style.display = "none";
  tableDiv.style.display = "block";
  collapseButton.style.display = "inline-block";
});

collapseButton.addEventListener("click", function(){
  collapseButton.style.display = "none";
  tableDiv.style.display = "none";
  listButton.style.display = "inline-block";
});


// click on list supplier button (display is now set to none)
// table data appears (display now set to block)
// collapse button appears (display is now set to block (inline-block?) )




