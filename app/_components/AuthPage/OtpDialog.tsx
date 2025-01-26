import { useReSendOtpMutation, useVerifyOtpMutation } from "@services/rootApi";
import { Button, ConfigProvider, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OtpDialog = ({ email }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [verifyOtp, { isLoading: verifyLoading }] = useVerifyOtpMutation();
  const [reSendOtp, { isSuccess }] = useReSendOtpMutation();
  const handleOnChange = async (e: string) => {
    const { data, error } = await verifyOtp({ email, otp: e });
    if (error) {
      setError(error);
    }
    if (data.code == 200 && data.status == "success") {
      router.push("/login");
    }
  };

  const handleReSendOtp = async () => {
    await reSendOtp(email).unwrap();
  };

  return (
    <div className="w-[500px] rounded-lg bg-bgLightColor p-8 text-textColor">
      <h2 className="text-center text-2xl font-bold text-textColor">
        Input the OTP
      </h2>
      <div className="mb-5 mt-2 text-center text-textColor">
        Didn&apos;t get the OTP?
        <span
          className="ml-1 cursor-pointer text-main"
          onClick={handleReSendOtp}
        >
          Send again
        </span>
        {isSuccess && (
          <p className="my-2 text-center text-textColor">
            We have sent the OTP again, check your email
          </p>
        )}
      </div>

      <form action="">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                fontSize: 20,
              },
            },
          }}
        >
          <Input.OTP size="large" onChange={handleOnChange} />
        </ConfigProvider>
        {error && error.data.message && (
          <span className="mt-2 block text-sm text-red-500">
            {error.data.message}
          </span>
        )}
        <Button
          type="primary"
          block
          loading={verifyLoading}
          htmlType="submit"
          className="mb-3 mt-4 text-lg"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};
export default OtpDialog;
