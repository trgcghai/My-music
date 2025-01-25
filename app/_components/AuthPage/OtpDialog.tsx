import { useVerifyOtpMutation } from "@services/rootApi";
import { Button, ConfigProvider, Input } from "antd";
import { useRouter } from "next/navigation";

const OtpDialog = () => {
  const router = useRouter();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const handleOnChange = async (e: string) => {
    console.log(e);

    const email = JSON.parse(localStorage.getItem("email"));

    const { data, error } = await verifyOtp({
      email,
      otp: e,
    });

    if (error) {
      // handle wrong otp error
      alert("Error: " + error);
    }

    if (data.code == 200 && data.status == "success") {
      // handle success and redirect to home page

      router.push("/");
    }
  };

  return (
    <div className="w-[500px] rounded-lg bg-bgLightColor p-8 text-textColor">
      <h2 className="text-center text-2xl font-bold text-textColor">
        Input the OTP
      </h2>
      <div className="mb-5 text-center text-textColor">
        Didn&apos;t get the OTP?
        <span className="ml-1 cursor-pointer text-main">Send again</span>
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
        <Button
          type="primary"
          block
          loading={isLoading}
          htmlType="submit"
          className="mb-3 mt-6 text-lg"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};
export default OtpDialog;
