

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandGithubFilled,
  IconBrandMongodb,
  IconBrandAws,
  IconBrandOpenai,
  IconBrandPrisma
} from "@tabler/icons-react";

export function AnimatedTooltipPreview() {
  const links = [
    {
      title: "React",
      icon: (
        <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: "NextJS",
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "TypeScript",
      icon: (
        <IconBrandTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "MongoDB",
      icon: (
        <IconBrandMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "JavaScript",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300"  />
      ),
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "AWS",
      icon: (
        <IconBrandAws className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Prisma",
      icon: (
        <IconBrandPrisma className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "OpenAI",
      icon: (
        <IconBrandOpenai className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
