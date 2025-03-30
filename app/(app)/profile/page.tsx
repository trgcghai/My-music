"use client";

import AccountSection from "@components/Profile/AccountSection";
import ProfileHeader from "@components/Profile/ProfileHeader";
import ProfileInformation from "@components/Profile/ProfileInformation";
import SettingsContent from "@components/Profile/SettingsContent";
import { ConfigProvider, Tabs } from "antd";

export default function ProfilePage() {
  const items = [
    {
      key: "profile",
      label: "Profile",
      children: <ProfileInformation />,
    },
    {
      key: "settings",
      label: "Settings",
      children: <SettingsContent />,
    },
    {
      key: "account",
      label: "Account",
      children: <AccountSection />,
    },
  ];

  return (
    <div className="px-2">
      <ProfileHeader />

      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemColor: "var(--textColor)",
            },
            Card: {
              colorBgContainer: "var(--bgColorLight)",
              colorTextHeading: "var(--textColor)",
              colorText: "var(--textColor)",
              colorBorder: "var(--bgColorSuperLight)",
            },
            Input: {
              colorBgContainer: "var(--bgColorLight)",
              colorText: "var(--textColor)",
              colorBorder: "var(--bgColorSuperLight)",
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          items={items}
          className="profile-tabs mt-6"
          size="large"
        />
      </ConfigProvider>
    </div>
  );
}
