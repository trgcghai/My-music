import { Button } from "antd";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import Link from "next/link";
import FormSection from "./FormSection";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email is not valid",
    )
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginDialog = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (formData) => {
    // Login submit logic placeholder
    console.log(formData);
    console.log("submit form");
  };

  const handleGoogleLogin = () => {
    // Google login logic placeholder
  };

  return (
    <div className="w-[500px] rounded-lg bg-bgLightColor p-8 text-textColor">
      <h2 className="text-center text-2xl font-bold text-textColor">Login</h2>
      <div className="mb-5 text-center text-textColor">
        Don&apos;t have an account?
        <Link href="/register" className="ml-1 text-main">
          Register
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
        <Button
          type="primary"
          block
          htmlType="submit"
          className="mb-3 mt-6 text-lg"
        >
          Login
        </Button>
      </form>

      <div className="mb-4 cursor-pointer text-right text-main">
        Forgot Password?
      </div>

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
export default LoginDialog;
