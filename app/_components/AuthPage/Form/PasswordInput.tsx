import { Input } from "antd";

const PasswordInput = ({
  variant = "outlined",
  ...props
}: PasswordInputProps) => {
  return <Input.Password {...props} variant={variant} />;
};
export default PasswordInput;

interface PasswordInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  value: string;
  name: string;
  variant?: "outlined" | "borderless" | "filled";
  className?: string;
}
