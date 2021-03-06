var Trackster = {};
const API_KEY = 'c2e05b0963a93c365395afd60103ad60';

$(document).ready(function() {
  /*When search button is clicked*/
  $('#search-button').click(function() {
    var searchText = $('#search-input').val();
    Trackster.searchTracksByTitle(searchText);
  });

  $('#search-input').keydown(function(event) {
  var key = event.which;
  var searchText = $('#search-input').val();
  if(key === 13){
    Trackster.searchTracksByTitle(searchText);
  }
 });

//   track.name.data(sort((function(a,b){return a.localeCompare(b)})));

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
  Trackster.renderTracks = function(tracks) {
    var $tracklist = $('#track-list');
    $tracklist.empty();
    for (var trackItem = 0; trackItem < tracks.length; trackItem++) {
      var track = tracks[trackItem];
      var mediumAlbumArt = track.image[1]["#text"];
      track.listeners = numeral(track.listeners).format('0,0');
      var htmlTrackRow =
       '<div class="row" id="songs">' +
       '<a href="' + track.url + '" target="_blank"><i class="col-xs-1 col-xs-offset-1 fa fa-play-circle-o fa-2x" aria-hidden="true" id="play-button"></i></a>' +
       '<span class="col-xs-4 sort">' + track.name + '</span>' +
       '<span class="col-xs-2">' + track.artist + '</span>' +
       '<span class="col-xs-2" id="album-pic"><img src="' + mediumAlbumArt + '" alt="Album cover picture"></span>' +
       '<span class="col-xs-2">' + track.listeners + '</span>' +
        '</div>';
      $tracklist.append(htmlTrackRow);
      $('h1').removeClass('logo');
    }
  };



/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
  Trackster.searchTracksByTitle = function(title) {
    $('h1').addClass('logo');
    $.ajax({
      url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
      datatype: 'jsonp',
      success: function(response) {
        Trackster.renderTracks(response.results.trackmatches.track);
        console.log(response);
      }
    });
  };
});
