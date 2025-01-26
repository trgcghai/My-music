import { Input } from "antd";

const TextInput = ({ variant = "outlined", ...props }: TextInputProps) => {
  return <Input {...props} variant={variant} />;
};
export default TextInput;

interface TextInputProps {
  value: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  disabled?: boolean;
  variant?: "outlined" | "borderless" | "filled";
  className?: string;
}
