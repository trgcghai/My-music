import { Button, Divider } from "antd";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import Link from "next/link";
import FormSection from "./FormSection";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid",
    )
    .required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Password is required"),
});

const RegisterDialog = ({ setCurrentModal, setDirection }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = () => {
    setCurrentModal(1);
    setDirection(1);
  };

  const handleGoogleLogin = () => {};

  return (
    <div className="w-[500px] rounded-lg bg-bgLightColor p-8 text-textColor">
      <h2 className="text-center text-2xl font-bold text-textColor">
        Register
      </h2>
      <div className="mb-5 text-center text-textColor">
        Already have an account?
        <Link href="/login" className="ml-1 text-main">
          Login
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection
          name="email"
          label="Email"
          control={control}
          error={errors["email"]}
        />
        <FormSection
          name="username"
          label="Username"
          control={control}
          error={errors["username"]}
        />
        <FormSection
          name="password"
          label="Password"
          control={control}
          error={errors["password"]}
          inputType={showPassword ? "text" : "password"}
          suffix={
            showPassword ? (
              <VisibilityIcon onClick={() => setShowPassword(false)} />
            ) : (
              <VisibilityOffIcon onClick={() => setShowPassword(true)} />
            )
          }
        />
        <FormSection
          name="confirmPassword"
          label="Confirm password"
          control={control}
          error={errors["confirmPassword"]}
          inputType={showPassword ? "text" : "password"}
          suffix={
            showConfirmPassword ? (
              <VisibilityIcon onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <VisibilityOffIcon onClick={() => setShowConfirmPassword(true)} />
            )
          }
        />
        <Button
          type="primary"
          block
          htmlType="submit"
          className="mb-3 mt-6 text-lg"
        >
          Register
        </Button>
      </form>

      <Divider className="mb-5 !border-textDark text-sm !text-textColor">
        Or
      </Divider>

      <Button
        icon={<GoogleIcon />}
        block
        className="flex items-center justify-center bg-bgLightColor py-4 text-lg text-textColor"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button>
    </div>
  );
};
export default RegisterDialog;
