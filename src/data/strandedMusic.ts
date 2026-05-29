import albumCover from "../assets/stranded/player/AlbumCover.webp";
import albumCover2 from "../assets/stranded/player/AlbumCover2.webp";

export const strandedMusicTracks = [
  {
    title: "Stranded (Main Theme)",
    artist: "Rex Revon",
    duration: "1:33",
    src: "/assets/audio/stranded.ogg",
    cover: albumCover,
  },
  {
    title: "Intense",
    artist: "Rex Revon",
    duration: "1:23",
    src: "/assets/audio/intense.ogg",
    cover: albumCover,
  },
  {
    title: "Sun (Day)",
    artist: "Rex Revon",
    duration: "1:14",
    src: "/assets/audio/sunday.ogg",
    cover: albumCover,
  },
  {
    title: "Hopeless Harmony",
    artist: "Rex Revon",
    duration: "1:36",
    src: "/assets/audio/hopeless.ogg",
    cover: albumCover,
  },
  {
    title: "Chaotic Dumbass",
    artist: "Rex Revon",
    duration: "0:22",
    src: "/assets/audio/chaotic.ogg",
    cover: albumCover,
  },
  {
    title: "HeartFelt Midnight",
    artist: "Zammu",
    duration: "1:59",
    src: "/assets/audio/heartfelt.ogg",
    cover: albumCover2,
  },
  {
    title: "Sincerely",
    artist: "Zammu",
    duration: "2:20",
    src: "/assets/audio/sincerely.ogg",
    cover: albumCover2,
  },
  {
    title: "Downpour",
    artist: "Zammu",
    duration: "1:15",
    src: "/assets/audio/downpour.mp3",
    cover: albumCover2,
  },
  {
    title: "Pinky Promise",
    artist: "Zammu",
    duration: "2:46",
    src: "/assets/audio/pinkypromise.mp3",
    cover: albumCover2,
  },
];

export type AudioTrack = (typeof strandedMusicTracks)[number];
