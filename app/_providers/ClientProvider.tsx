"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Loading from "@components/Loading";
import CustomModal from "@components/Modal/CustomModal";
import Navbar from "@components/Navbar";
import PlayingController from "@components/PlayingController/PlayingController";
import { useVerifyTokenQuery } from "@services/rootApi";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const ClientProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const { data, isLoading, isError, error } = useVerifyTokenQuery();

  const handleRedirect = useCallback(() => {
    router.push("/login");
  }, [router]);

  useEffect(() => {
    if (isError && "status" in error && error.status == 401) {
      handleRedirect();
    }
  }, [data, error, isError, handleRedirect]);

  if (isLoading) {
    return <Loading />;
  }

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
