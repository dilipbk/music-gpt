import { ImageProps } from "next/image";
import { Icons } from ".";

export interface CustomImageProps extends Omit<ImageProps, "src" | "alt"> {
  name: keyof typeof Icons;
}
