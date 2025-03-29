export interface SongData {
  _id: string;
  originalName: string;
  asset_id: string;
  publicId: string;
  url: string;
  secure_url: string;
  playback_url: string;
  format: string;
  duration: number;
  buffer: Buffer;
  mimetype: string;
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
      artists: string[];
      artist: string;
      album: string;
      year: number;
      picture?: [
        {
          format: string;
          type: string;
          description: string;
          data: Uint8Array;
        },
      ];
    };
  };
  createdAt: Date;
  lastModified: Date;
}

export interface Playlist {
  _id: string;
  name: string;
  songs: SongInPlaylist[];
  owner: {
    _id: string;
    username: string;
  };
  thumbnail: string;
  createdAt: Date;
  lastModified: Date;
}

export interface SongInPlaylist {
  _id: string;
  originalName: string;
  publicId: string;
  url: string;
  format: string;
  duration: number;
  common: {
    title: string;
    artists: string[];
    artist: string;
    album: string;
    year: number;
    picture?: [
      {
        format: string;
        type: string;
        description: string;
        data: Uint8Array;
      },
    ];
  };
}
