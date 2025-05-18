import React from "react";
import Icon from "../common/icon";
import Text from "../common/Text";
import UpgradeButton from "../common/Button/UpgradeButton";

const Header = () => {
  return (
    <header className="container mx-auto p-5 flex items-center justify-between">
      <div className="logo flex items-center gap-2">
        <Icon name="logo" width={36} height={36} />
        <Text size="md" className="text-white">
          MusicGPT
        </Text>
        <Text className="px-2 py-1.5 text-[12px] ml-1 text-white !font-medium border border-white rounded-md">
          Beta
        </Text>
      </div>
      <div className="flex items-center gap-8">
        <div className="upgrade bg-gradient-to-r from-orange-300/20 to-primary-100/30 p-3 pl-4 rounded-xl flex items-center gap-8">
          <div>
            <Text size="sm" className="!font-medium">
              Get unlimited AI music
            </Text>
            <Text className="text-[12px] mt-1">Get unlimited AI music</Text>
          </div>
          <UpgradeButton />
        </div>
        <div className="profile relative w-10 h-10 rounded-full border-2 border-primary-700 flex items-center justify-center">
          <Text size="lg" className="!font-normal !text-[20px]">
            J
          </Text>
          <div className="notification absolute w-5 h-5 flex items-center -top-2 -right-2 justify-center bg-[#6BFFAC] rounded-full">
            <Text className="text-[10px] !text-primary-100 !font-semibold">
              2
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
