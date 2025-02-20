export interface Song {
  key: string;
  name: string;
  author: string;
  isFavorite: boolean;
  length: number;
}

export interface SongData {
  _id: string;
  metadata: {
    format: {
      tagTypes: string[];
      codec: string;
      sampleRate: number;
      bitrate: number;
      duration: number;
    };
    common: {
      title: string;
      artist: string;
      artists: string[];
      album: string;
      year: string;
    };
  };
  originalName: string;
  size: number;
  url: string;
  publicId: string;
  format: string;
  duration: number;
}

export interface Playlist {
  _id: string;
  name: string;
  songs: SongData[];
  owner: {
    _id: string;
    username: string;
  };
  thumbnail: string;
  createdAt: Date;
  lastModified: Date;
}
