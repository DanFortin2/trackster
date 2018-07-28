$(document).ready(function() {
  /*When search button is clicked*/
  $('#search-button').click(function() {
    var searchText = $('#search-input').val();
    Trackster.searchTracksByTitle(searchText);
  });


  var Trackster = {};



/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
  Trackster.renderTracks = function(tracks) {

  };

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
  Trackster.searchTracksByTitle = function(title) {

  };
});
