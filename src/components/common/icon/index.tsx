import Image from "next/image";
import React from "react";

const BASE_ICON_ROUTE = "/icons";

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
};

const Icon = ({
  name,
  ...rest
}: {
  name: keyof typeof Icons;
  rest?: React.ImgHTMLAttributes<HTMLImageElement>;
}) => {
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
