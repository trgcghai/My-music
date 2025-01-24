import { Input } from "antd";
import { ReactNode } from "react";
import { Control, Controller, FieldError } from "react-hook-form";

const FormSection = ({
  name,
  label,
  control,
  error,
  inputType = "text",
  suffix = null,
}: {
  name: string;
  label: string;
  control: Control;
  error: FieldError;
  inputType?: string;
  suffix?: ReactNode;
}) => {
  return (
    <div className="my-3">
      <label className="text-lg text-textColor" htmlFor="">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Input
              value={value}
              type={inputType}
              onChange={onChange}
              suffix={suffix}
              name={name}
              variant="outlined"
              className={`!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main ${error?.message && "border-red-500"}`}
            />
          );
        }}
      />
      {error && error?.message && (
        <span className="text-sm text-red-500">{error?.message}</span>
      )}
    </div>
  );
};
export default FormSection;
