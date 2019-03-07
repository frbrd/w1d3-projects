var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  // console.log(library['playlists']['p01']['id']);
  // console.log(library['playlists']['p01']['name']);
  // console.log(library['playlists']['p01']['tracks'].length);
  for (var playlist_id in library.playlists) {
   // console.log(playlist_id);
   // console.log(library.playlists[playlist_id]);

  console.log(library['playlists'][playlist_id]['id'] + ': ' + library['playlists'][playlist_id]['name'] + ' - ' + library['playlists'][playlist_id]['tracks'].length + ' tracks');
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
 var number2 = library["tracks"]
 for (var tracks2 in number2) {
   console.log(number2[tracks2].id +": " + number2[tracks2].name + " by " + number2[tracks2].artist + " " + "(" + number2[tracks2].album + ")")
 }
}



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
console.log(library['playlists'][playlistId]['id'] + ': ' + library['playlists'][playlistId]['name'] + ' - ' + library['playlists'][playlistId]['tracks'].length + ' tracks');
var list = library.playlists[playlistId].tracks;
 for (var trackId of list) {
   let chanson = library.tracks[trackId];
   console.log(chanson['id'] + ': ' + chanson.name + ' by ' + chanson['artist'] + ' (' + chanson['album']  + ')');
}
}



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var a = trackId;
  var b = playlistId;
  library['playlists'][b]['tracks'].push(a);

  console.log(library);

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var name = name;
  var artist = artist;
  var album = album;
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  var id = uid();

  library.tracks[id] = {id, name, artist, album};

  console.log(library['tracks']);
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var name = name;
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  var random = uid();
  var id = 'p' + random;


  library.playlists[id] = {id: id, name: name, tracks: []};


  console.log(library['playlists']);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
