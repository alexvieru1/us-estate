"use client";
import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBook,
  IconBulb,
  IconHome,
  IconHomeDollar,
  IconMail,
} from "@tabler/icons-react";

const page = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Our Story",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/our-story",
    },
    {
      title: "Properties",
      icon: (
        <IconHomeDollar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/properties",
    },
    {
      title: "Insights", // You can change this to "Blog" if preferred
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/insights",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
        INSIGHTS
      <FloatingDock items={links} />
    </div>
  );
};

export default page;
