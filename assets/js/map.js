

function initMap() {
  var salem = {lat: 42.519539, lng: -70.896713};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
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

var supplierTable = document.getElementById("tableHolder");
var listButton = document.getElementById("listButton");
var collapseButton = document.getElementById("collapseButton");

//refactor into one function with params
// listButton.addEventListener("click", function(){
//   listButton.style.display = "none";
//   supplierTable.style.display = "block";
//   collapseButton.style.display = "inline-block";
// });
//
// collapseButton.addEventListener("click", function(){
//   listButton.style.display = "inline-block";
//   supplierTable.style.display = "none";
//   collapseButton.style.display = "none";
// });

function showTable(button1, table, button2) {
    button1.addEventListener("click", function(){
    button1.style.display = "none";
    table.style.display = "block";
    button2.style.display = "inline-block";
  });
}

function hideTable(button1, table, button2) {
  button2.addEventListener("click", function(){
    button1.style.display = "inline-block";
    table.style.display = "none";
    button2.style.display = "none";
  })
}

showTable(listButton, supplierTable, collapseButton);
hideTable(listButton, supplierTable, collapseButton);
