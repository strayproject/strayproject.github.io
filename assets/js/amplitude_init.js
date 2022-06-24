let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
  /*
    Ensure that on mouseover, CSS styles don't get messed up for active songs.
  */
  songElements[i].addEventListener('mouseover', function(){
    this.style.backgroundColor = '#00A0FF';

    this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
    this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

    if( !this.classList.contains('amplitude-active-song-container') ){
      this.querySelectorAll('.play-button-container')[0].style.display = 'block';
    }
    this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
  });

  /*
    Ensure that on mouseout, CSS styles don't get messed up for active songs.
  */
  songElements[i].addEventListener('mouseout', function(){
    this.style.backgroundColor = '#FFFFFFBF';
    this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
    this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
    this.querySelectorAll('.play-button-container')[0].style.display = 'none';
    this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
  });

  /*
    Show and hide the play button container on the song when the song is clicked.
  */
  songElements[i].addEventListener('click', function(){
    this.querySelectorAll('.play-button-container')[0].style.display = 'none';
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