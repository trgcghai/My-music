import { ButtonProps, ModalProps } from "antd";
import { LegacyButtonType } from "antd/es/button/button";

export interface RegisterFormData {
  email: string;
  username: string;
  password?: string;
  confirmPassword?: string;
  providerId: "form" | "google";
}

export interface LoginFormData {
  email: string;
  password?: string;
  providerId: "form" | "google";
}

export enum ModalType {
  DEFAULT = "DEFAULT",
  UPLOAD_SONG = "UPLOAD_SONG",
  CREATE_PLAYLIST = "CREATE_PLAYLIST",
  ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST",
  UPDATE_PLAYLIST = "UPDATE_PLAYLIST",
  REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST",
}

export interface DynamicModalProps extends ModalProps {
  closable: boolean;
  okText: string;
  okType: LegacyButtonType | undefined;
  okButtonProps: ButtonProps;
  cancelText: string;
  cancelButtonProps: ButtonProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalData?: any;
}

export interface SongRowProps {
  index: number;
  id: string;
  title: string;
  year: string;
  artist: string;
  album: string;
  length: number;
  key: string;
  picture: [
    {
      format: string;
      type: string;
      description: string;
      data: Uint8Array;
    },
  ];
  url: string;
}
