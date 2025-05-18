import { Icons } from "@/components/common/icon";

export const coreFeatures: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}[] = [
  {
    icon: "music",
    title: "Songs",
    description: "Create full songs and add your own lyrics",
  },
  {
    icon: "guitar",
    title: "Instrumentals",
    description: "Generate instrumental songs without vocals",
  },
  {
    icon: "sound",
    title: "Sound Effects",
    description: "Create sound effects and samples",
  },
];

export const allFeatures: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}[] = [
  ...coreFeatures,
  {
    icon: "music",
    title: "Song generation",
    description: "Create songs, instrumentals, sound effects",
  },
  {
    icon: "text",
    title: "Text to Speech",
    description: "Speak text in any voice",
  },
  {
    icon: "guitar",
    title: "Remix",
    description: "Remix a song with custom style or lyrics",
  },
  {
    icon: "replace",
    title: "Replace",
    description: "Replace a part of a song with something new",
  },
  {
    icon: "extend",
    title: "Extend",
    description: "Continue a track beyond the original",
  },
  {
    icon: "download",
    title: "Stem download",
    description: "Dowload instrumental and vocals individually",
  },
];
