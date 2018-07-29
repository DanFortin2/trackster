$(document).ready(function() {
  /*When search button is clicked*/
  $('#search-button').click(function() {
    var searchText = $('#search-input').val();
    Trackster.searchTracksByTitle(searchText);
  });

  const API_KEY = 'c2e05b0963a93c365395afd60103ad60';
  var Trackster = {};



/*       $.ajax({
      url: 'https://api.wunderground.com/api/4e1fe0d302980707/geolookup/conditions/q/NY/Manhattan.json',
      datatype: 'jsonp',
      success: function(data) {
        $('.weather').html('<p class="data"> </p>');
      }
    });
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
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
      datatype: 'jsonp',
      success: function(data) {
        console.log(data);
      }
    });
  };
});


/* API Info

Application name	School Project
API key	c2e05b0963a93c365395afd60103ad60
Shared secret	79586a816e1e61792b2b6c6cd2cdcc4b
Registered to	danfortin75

test API

http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=c2e05b0963a93c365395afd60103ad60&format=json
*/
