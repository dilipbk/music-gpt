import Image from "next/image";
import React from "react";
import { CustomImageProps } from "./types";

const BASE_ICON_ROUTE = "/icons";
const BASE_IMAGE_ROUTE = "/images";

export const Icons = {
  tiktok: `${BASE_ICON_ROUTE}/tiktok.png`,
  twitch: `${BASE_ICON_ROUTE}/twitch.png`,
  instagram: `${BASE_ICON_ROUTE}/instagram.png`,
  spotify: `${BASE_ICON_ROUTE}/spotify.png`,
  broadcast: `${BASE_ICON_ROUTE}/broadcast.png`,
  wedding: `${BASE_ICON_ROUTE}/weddings.png`,
  nonprofit: `${BASE_ICON_ROUTE}/non-profit.png`,
  presentation: `${BASE_ICON_ROUTE}/presentation.png`,
  website: `${BASE_ICON_ROUTE}/website.png`,
  game: `${BASE_ICON_ROUTE}/game.png`,
  movies: `${BASE_ICON_ROUTE}/movies.png`,
  ads: `${BASE_ICON_ROUTE}/ads.png`,
  blogs: `${BASE_ICON_ROUTE}/blogs.png`,
  project: `${BASE_ICON_ROUTE}/project.png`,
  youtube: `${BASE_ICON_ROUTE}/youtube.png`,
  logo: `${BASE_IMAGE_ROUTE}/logo.png`,
  music: `${BASE_ICON_ROUTE}/music-icon.png`,
  guitar: `${BASE_ICON_ROUTE}/guitar-icon.png`,
  check: `${BASE_ICON_ROUTE}/check.png`,
  download: `${BASE_ICON_ROUTE}/download.png`,
  extend: `${BASE_ICON_ROUTE}/extend.png`,
  flash: `${BASE_ICON_ROUTE}/flash-icon.png`,
  infocircle: `${BASE_ICON_ROUTE}/info-circle.png`,
  replace: `${BASE_ICON_ROUTE}/replace.png`,
  remix: `${BASE_ICON_ROUTE}/remix.png`,
  sound: `${BASE_ICON_ROUTE}/sound-effect.png`,
  text: `${BASE_ICON_ROUTE}/text.png`,
  lockopen: `${BASE_ICON_ROUTE}/lock-open.png`,
};

const Icon: React.FC<CustomImageProps> = ({ name, ...rest }) => {
  return (
    <Image
      src={Icons[name]}
      alt="social icon"
      width={20}
      height={20}
      {...rest}
    />
  );
};

export default Icon;
