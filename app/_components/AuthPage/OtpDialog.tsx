import { Button, ConfigProvider, Input } from "antd";

const OtpDialog = ({ setCurrentModal, setDirection }) => {
  const handleOnInput = (e: string[]) => {
    console.log(e);
  };
  const handleOnChange = (e: string) => {
    console.log(e);

    setCurrentModal(0);
    setDirection(-1);
  };

  return (
    <div className="w-[500px] rounded-lg bg-bgLightColor p-8 text-textColor">
      <h2 className="text-center text-2xl font-bold text-textColor">
        Input the OTP
      </h2>
      <div className="mb-5 text-center text-textColor">
        Didn&apos;t get the OTP?
        <span className="ml-1 text-main">Send again</span>
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
          <Input.OTP
            size="large"
            onInput={handleOnInput}
            onChange={handleOnChange}
          />
        </ConfigProvider>
        <Button
          type="primary"
          block
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
