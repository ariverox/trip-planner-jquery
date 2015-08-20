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


});













//adadasdasd
