import { ButtonProps, ModalProps } from "antd";
import { LegacyButtonType } from "antd/es/button/button";

export interface Song {
  key: string;
  name: string;
  author: string;
  isFavorite: boolean;
  length: number;
}

export interface FileProps {
  path: string;
  relativePath: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface SongMetadata {
  _id: string;
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
  path: {
    audio: string;
    thumbnail: string;
  };
  createdAt: Date;
  lastModified: Date;
}

export interface Playlist {
  _id: string;
  name: string;
  songs: {
    _id: string;
    title: string;
    artist: string;
    duration: number;
    path: {
      audio: string;
      thumbnail: string;
    };
  }[];
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
  title: string;
  artist: string;
  duration: number;
  path: {
    audio: string;
    thumbnail: string;
  };
}

export interface SongResponse {
  code: number;
  result: SongMetadata[];
  status: string;
}

export interface PlaylistResponse {
  code: number;
  result: Playlist[];
  status: string;
}

export enum ModalType {
  DEFAULT = "DEFAULT",
  UPLOAD_SONG = "UPLOAD_SONG",
  CREATE_PLAYLIST = "CREATE_PLAYLIST",
}

export interface DynamicModalProps extends ModalProps {
  closable: boolean;
  okText: string;
  okType: LegacyButtonType | undefined;
  okButtonProps: ButtonProps;
  cancelText: string;
  cancelButtonProps: ButtonProps;
}
