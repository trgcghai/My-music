import { ButtonProps, ModalProps } from "antd";
import { LegacyButtonType } from "antd/es/button/button";

export interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
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
