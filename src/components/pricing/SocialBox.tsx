import Image from "next/image";
import React from "react";
import Icon, { Icons } from "../common/icon";

const SocialBox = ({ name }: { name: keyof typeof Icons }) => {
  return (
    <div className="min-h-[45px] rounded-xl bg-white/4 flex items-center justify-center gap-2 py-3 px-5">
      {/* <Image src="/icons/tiktok.png" alt="tiktok" width={20} height={20} /> */}
      <Icon name={name} />
      {name}
    </div>
  );
};

export default SocialBox;
