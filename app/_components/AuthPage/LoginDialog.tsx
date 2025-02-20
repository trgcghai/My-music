import { Button, Divider } from "antd";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import FormSection from "./FormSection";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData } from "_types/component";
import { useLoginMutation } from "@services/rootApi";
import { useRouter } from "next/navigation";
import { useAppDispatch, useGoogleLogin } from "@libs/hooks";
import { signIn } from "@libs/features/auth/authSlice";

const message: string =
  "Password must have at least 1 lowercase character, 1 uppercase character, 1 numeric character, and 1 special character.";

const formSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, message)
    .matches(/[A-Z]/, message)
    .matches(/\d/, message)
    .matches(/[@$!%*?&]/, message)
    .required("Password is required"),
});

const LoginDialog = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login, { isLoading }] = useLoginMutation();
  const { loginGooglePopup, data: googleData } = useGoogleLogin();

  const onSubmit = async (formData: LoginFormData) => {
    const { data, error } = await login(formData);

    if (error) {
      console.log(error);
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
    }

    if (data.code == 200 && data.status == "success") {
      const {
        data: {
          accessToken,
          refreshToken,
          userInfo: { email, username },
        },
      } = data;
      dispatch(
        signIn({
          accessToken,
          refreshToken,
          isAuthenticated: true,
          userInfo: {
            email,
            username,
          },
        }),
      );
      router.push("/");
    }
  };

  // const handleForgotPassword = () => {
  //   setCurrentModal(1);
  //   setDirection(1);
  // };

  const handleGoogleLogin = async () => {
    // Google login logic placeholder
    await loginGooglePopup();

    console.log(googleData);
    const {
      data: { status, code },
    } = googleData;

    if (status == "success" && code == 200) {
      console.log("Google register success");
      // setCurrentModal(1);
      // setDirection(1);
    }
  };

  return (
    <div className="bg-bgColorLight w-[500px] rounded-lg p-8 text-textColor">
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
          inputType="password"
        />
        <Button
          type="primary"
          block
          loading={isLoading}
          htmlType="submit"
          className="mt-3 text-lg"
        >
          Login
        </Button>
      </form>
      <Divider className="!border-textColorDark mb-5 text-sm !text-textColor">
        Or
      </Divider>
      <Button
        icon={<GoogleIcon />}
        block
        className="bg-bgColorLight flex items-center justify-center py-4 text-lg text-textColor"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button>
    </div>
  );
};
export default LoginDialog;
