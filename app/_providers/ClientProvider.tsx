"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import CustomModal from "@components/Modal/CustomModal";
import Navbar from "@components/Navbar";
import PlayingController from "@components/PlayingController/PlayingController";

const ClientProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <AntdRegistry>
        <div className="flex h-screen w-full">
          <Navbar />

          <div className="flex-[5] bg-bgColor px-16 py-8 text-textColor">
            {children}
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-50">
            <PlayingController />
          </div>
        </div>
        <CustomModal />
      </AntdRegistry>
    </div>
  );
};
export default ClientProvider;
