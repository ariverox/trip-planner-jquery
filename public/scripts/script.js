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


function addmarker(latilongi, type) {
    var marker = new google.maps.Marker({
        position: latilongi,
        icon: type,
        title: 'new marker',
        draggable: true,
        map: map
    });
    map.setCenter(marker.getPosition())
}


// var hotelLocation = [40.705137, -74.007624];
//       var restaurantLocations = [
//         [40.705137, -74.013940],  
//         [40.708475, -74.010846]
//       ];
//       var activityLocations = [
//         [40.716291, -73.995315],
//         [40.707119, -74.003602]
//       ];

//       function drawLocation (location, opts) {
//         if (typeof opts !== 'object') {
//           opts = {}
//         }
//         opts.position = new google.maps.LatLng(location[0], location[1]);
//         opts.map = map;
//         var marker = new google.maps.Marker(opts);
//       }

//       drawLocation(hotelLocation, {
//         icon: '/images/lodging_0star.png'
//       });
//       restaurantLocations.forEach(function (loc) {
//         drawLocation(loc, {
//           icon: '/images/restaurant.png'
//         });
//       });
//       activityLocations.forEach(function (loc) {
//         drawLocation(loc, {
//           icon: '/images/star-3.png'
//         });
//       });

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
  $('#hotels').append(gS +selection.name + gS2 );
  var myLatlng = new google.maps.LatLng(selection.place[0].location[0],selection.place[0].location[1])
  var icon = '/images/lodging_0star.png'
     addmarker(myLatlng,icon);


});



$('.btn-rest').click(function() {
  var selectionName = selBtn.call($(this));
  var selection;
  for (var i=0 ; i < all_restaurants.length; i++){
    if (all_restaurants[i].name === selectionName){
      selection = all_restaurants[i];
    }
  }
  $('#restuarants').append(gS +selection.name + gS2 );
      console.log(selection.place[0].location)
     var myLatlng2 = new google.maps.LatLng(selection.place[0].location[0],selection.place[0].location[1])
     var icon = '/images/restaurant.png'
     addmarker(myLatlng2,icon);
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
     addmarker(myLatlng3,icon);

});



$(document).on("click", ".remove", function() {
  $(this).parent().remove()

});

$('.adder-btn').click(function() {

  var addTo = $(this).prev()
  var nextDay = Number(addTo.text()) + 1;
  console.log(nextDay);
  addTo.after('<button class="btn btn-circle day-btn">' + nextDay + '</button>')

})


$(document).on("click", ".day-btn", function() {
  $(this).addClass('current-day')

});



//adadasdasd
