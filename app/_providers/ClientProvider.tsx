"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "../_components/Navbar";
import PlayingController from "../_components/PlayingController/PlayingController";
import CustomModal from "../_components/Modal/CustomModal";

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
