import { Input } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";
import TextInput from "./Form/TextInput";

const FormSection = ({
  name,
  label,
  control,
  error,
  inputType = "text",
}: {
  name: string;
  label?: string;
  control: Control;
  error: FieldError;
  inputType?: "text" | "password" | "otp";
}) => {
  return (
    <div className="my-3">
      {label && (
        <label className="text-lg text-textColor" htmlFor="">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          switch (inputType) {
            case "text":
              return (
                <TextInput
                  value={value}
                  name={name}
                  onChange={onChange}
                  className={`!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main ${error?.message && "border-red-500"}`}
                />
              );
            case "password":
              return (
                <Input.Password
                  value={value}
                  onChange={onChange}
                  name={name}
                  variant="outlined"
                  className={`!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main ${error?.message && "border-red-500"}`}
                />
              );
          }
        }}
      />
      {error && error?.message && (
        <span className="text-sm text-red-500">{error?.message}</span>
      )}
    </div>
  );
};
export default FormSection;
