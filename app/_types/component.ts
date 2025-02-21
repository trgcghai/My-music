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
