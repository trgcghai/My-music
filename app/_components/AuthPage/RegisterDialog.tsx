import { Button, Divider } from "antd";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import FormSection from "./FormSection";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "_types/component";
import { useRegisterMutation } from "@services/rootApi";
import { useGoogleRegister } from "@hooks/useGoogleRegister";
import { useAppDispatch } from "@hooks/hooks";
import { saveUserInfo } from "@libs/features/auth/authSlice";

const message: string =
  "Password must have at least 1 lowercase character, 1 uppercase character, 1 numeric character, and 1 special character.";

const formSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, message)
    .matches(/[A-Z]/, message)
    .matches(/\d/, message)
    .matches(/[@$!%*?&]/, message)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegisterDialog = ({ setCurrentModal, setDirection }) => {
  const {
    control,
    setError,
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
  const [register, { isLoading }] = useRegisterMutation();
  const {
    signInGooglePopup,
    data: googleData,
    isLoading: isGoogleLoading,
  } = useGoogleRegister();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const submitData: RegisterFormData = {
        ...formData,
        providerId: "form",
      };
      const data = await register(submitData).unwrap();

      if (data.code == 200 && data.status == "success") {
        setCurrentModal(1);
        setDirection(1);
        dispatch(
          saveUserInfo({
            email: formData.email,
            username: formData.username,
          }),
        );
      }
    } catch (error) {
      if (error.data.error.code == 11000) {
        setError("email", {
          type: "manual",
          message: "Email already exists ! Chose another email",
        });
      }
    }
  };

  const handleGoogleRegister = async () => {
    // handle google register
    await signInGooglePopup();

    console.log(googleData);
    const {
      data: { status, code },
    } = googleData;

    if (status == "success" && code == 200) {
      console.log("Google register success");
      setCurrentModal(1);
      setDirection(1);
    }
  };

  return (
    <div className="w-[500px] rounded-lg bg-bgColorLight p-8 text-textColor">
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
          inputType="password"
        />
        <FormSection
          name="confirmPassword"
          label="Confirm password"
          control={control}
          error={errors["confirmPassword"]}
          inputType="password"
        />
        <Button
          type="primary"
          block
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
          className="mb-3 mt-6 text-lg"
        >
          Register
        </Button>
      </form>

      <Divider className="mb-5 !border-textColorDark text-sm !text-textColor">
        Or
      </Divider>

      <Button
        icon={<GoogleIcon />}
        block
        className="flex items-center justify-center bg-bgColorLight py-4 text-lg text-textColor"
        loading={isGoogleLoading}
        disabled={isGoogleLoading}
        onClick={handleGoogleRegister}
      >
        Continue with Google
      </Button>
    </div>
  );
};
export default RegisterDialog;
