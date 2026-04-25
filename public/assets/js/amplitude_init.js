let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
  /*
    Ensure that on mouseover, CSS styles don't get messed up for active songs.
  */
  songElements[i].addEventListener('mouseover', function(){
    this.classList.add('sp-song-hover');
  });

  /*
    Ensure that on mouseout, CSS styles don't get messed up for active songs.
  */
  songElements[i].addEventListener('mouseout', function(){
    this.classList.remove('sp-song-hover');
  });

  /*
    Show and hide the play button container on the song when the song is clicked.
  */
  songElements[i].addEventListener('click', function(){
    this.classList.remove('sp-song-hover');
  });
}

/*
  Initializes AmplitudeJS
*/
Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
      },
    "songs": [
      {
        "name": "Stranded (Main Theme)",
        "artist": "Rex Revon",
        "album": "",
        "url": "/assets/audio/stranded.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover.webp"
      },
      {
        "name": "Intense",
        "artist": "Rex Revon",
        "album": "",
        "url": "/assets/audio/intense.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover.webp"
      },
      {
        "name": "Sun (Day)",
        "artist": "Rex Revon",
        "album": "",
        "url": "/assets/audio/sunday.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover.webp"
      },
      {
        "name": "Hopeless Harmony",
        "artist": "Rex Revon",
        "album": "",
        "url": "/assets/audio/hopeless.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover.webp"
      },
      {
        "name": "Chaotic Dumbass",
        "artist": "Rex Revon",
        "album": "",
        "url": "/assets/audio/chaotic.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover.webp"
      },
      {
        "name": "HeartFelt Midnight",
        "artist": "Zammu",
        "album": "",
        "url": "/assets/audio/heartfelt.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover2.webp"
      },
      {
        "name": "Sincerely",
        "artist": "Zammu",
        "album": "",
        "url": "/assets/audio/sincerely.ogg",
        "cover_art_url": "/assets/img/player/AlbumCover2.webp"
      }
    ],
    "default_album_art": "/assets/img/player/AlbumCover.webp",
    "volume": 100,
  });
