import { Playlist, SongMetadata } from "./entity";

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

export interface AuthResponse {
  error?: Error;
  code: number;
  message: string;
  status: string;
}

export interface RegisterResponse {
  code: number;
  message: string;
  status: string;
}
