// Select and set the hotel
// Select and add a restaurant
// Select and add an activity
// Remove the hotel
// Remove a restaurant
// Remove an activity
// Add a day
// Remove a day
// Switch days


// dom select the add button
// when clicked, find the data
// construct an itinerary item (temporary)
// push(add) the item to proper place (actual itinerary)
// update the map

////////////////////////////// maps api ////////////////////////////

function initialize_gmaps() {
      // initialize new google maps LatLng object
      var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
      // set the map options hash
      var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styleArr
      };
      // get the maps div's HTML obj
      var map_canvas_obj = document.getElementById("map-canvas");
      // initialize a new Google Map with the options
      map = new google.maps.Map(map_canvas_obj, mapOptions);
      // Add the marker to the map
      var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
      });

      // draw some locations on the map
      
    }

    $(document).ready(function() {
      initialize_gmaps();
    });

    var styleArr = [{
      featureType: "landscape",
      stylers: [{
        saturation: -100
      }, {
        lightness: 60
      }]
    }, {
      featureType: "road.local",
      stylers: [{
        saturation: -100
      }, {
        lightness: 40
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "transit",
      stylers: [{
        saturation: -100
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "administrative.province",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      stylers: [{
        visibility: "on"
      }, {
        lightness: 30
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ef8c25"
      }, {
        lightness: 40
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{
        color: "#b6c54c"
      }, {
        lightness: 40
      }, {
        saturation: -40
      }]
    }];

///////////////////////////////////////////////////////////////////////////

/////////////////////////////

var markers = [];

function addmarker(latilongi, type, markerId) {
    var marker = new google.maps.Marker({
        position: latilongi,
        icon: type,
        title: 'new marker',
        draggable: true,
        map: map,
        markerId: markerId
    });
    map.setCenter(marker.getPosition())
    markers.push(marker)
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}


function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function deleteOneMarker(input) {
  input = input.substr(0,input.length-1)
  markers.forEach(function (marker) {
    if (marker.markerId === input) {
      marker.setMap(null);
    }
  });
};

////////////////////////////
var selBtn = function() {
  return $(this).prev().val();
};

var gS= '<div class="itinerary-item"><span class="title">'
 var gS2 = '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';




$('.btn-hotel').click(function() {
  var selectionName = selBtn.call($(this));
  var selection;
  for (var i=0 ; i < all_hotels.length; i++){
    if (all_hotels[i].name === selectionName){
      selection = all_hotels[i];
    }
  }
  $('#hotels').append(gS +selection.name + gS2 ).data(selection.name, selection)

  var myLatlng = new google.maps.LatLng(selection.place[0].location[0],selection.place[0].location[1])
  var icon = '/images/lodging_0star.png'
  var markerId = selection.name;
     addmarker(myLatlng,icon,markerId);


});
  


$('.btn-rest').click(function() {
  var selectionName = selBtn.call($(this));
  var selection;
  for (var i=0 ; i < all_restaurants.length; i++){
    if (all_restaurants[i].name === selectionName){
      selection = all_restaurants[i];
    }
  }
  $('#restuarants').append(gS +selection.name + gS2 )
     var myLatlng2 = new google.maps.LatLng(selection.place[0].location[0],selection.place[0].location[1])
     var icon = '/images/restaurant.png'
     var markerId = selection.name;
     addmarker(myLatlng2,icon,markerId);
});



$('.btn-act').click(function() {
  var selectionName = selBtn.call($(this));
  var selection;
  for (var i=0 ; i < all_activities.length; i++){
    if (all_activities[i].name === selectionName){
      selection = all_activities[i];
    }
  }


  $('#activities').append(gS + selection.name + gS2 );
var myLatlng3 = new google.maps.LatLng(selection.place[0].location[0],selection.place[0].location[1])
  var icon = '/images/star-3.png'
     var markerId = selection.name;
     addmarker(myLatlng3,icon,markerId);

});



$(document).on("click", ".remove", function() {
  $(this).parent().remove()
  deleteOneMarker($(this).parent().text())
});


$('.adder-btn').click(function() {

  var addTo = $(this).prev()
  var nextDay = Number(addTo.text()) + 1;
  addTo.after('<button class="day-clicker btn btn-circle day-btn">' + nextDay + '</button>')

})

$(document).on("click", ".day-clicker", function() {
  $(this).addClass('current-day');
  $(this).siblings().removeClass('current-day');
  $('#day-title').html('<span>' + "Day " + $(this).text() + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></span>')
});




