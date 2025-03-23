import { Playlist, SongData } from "./entity";

export interface SongResponse {
  code: number;
  result: SongData[];
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
  data?: {
    userInfo: {
      email: string;
      username: string;
      avatar: string;
    };
  };
}

export interface RegisterResponse {
  code: number;
  message: string;
  status: string;
}

export interface VerifyTokenResponse {
  status: string;
  code: number;
  message: string;
  error?: Error;
  result?: object;
}

export interface RefreshTokenResponse {
  status: string;
  code: number;
  message: string;
}

export interface UploadResponse {
  success: boolean;
  files: {
    url: string;
    publicId: string;
    originalName: string;
  }[];
}

export interface DeletePlaylistResponse {
  code: number;
  result: object;
  status: string;
}
