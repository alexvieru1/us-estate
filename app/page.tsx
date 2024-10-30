"use client";
import React from "react";
// import { FloatingDock } from "./components/ui/floating-dock";
// import {
//   IconBook,
//   IconBulb,
//   IconHome,
//   IconHomeDollar,
//   IconMail,
// } from "@tabler/icons-react";
// import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
// import { motion } from "framer-motion";
import UnderConstructionPage from "./components/UnderConstructionPage";

export default function Home() {
  // const links = [
  //   {
  //     title: "Home",
  //     icon: (
  //       <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "/",
  //   },
  //   {
  //     title: "Our Story",
  //     icon: (
  //       <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "/our-story",
  //   },
  //   {
  //     title: "Properties",
  //     icon: (
  //       <IconHomeDollar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "/properties",
  //   },
  //   {
  //     title: "Insights", // You can change this to "Blog" if preferred
  //     icon: (
  //       <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "/insights",
  //   },
  //   {
  //     title: "Contact",
  //     icon: (
  //       <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "/contact",
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center items-center">
      <UnderConstructionPage/>
      {/* <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Intră într-o lume a luxului redefinit. <br />
          <Highlight className="text-black dark:text-white">
            Excepțional. Distins. Remarcabil.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <FloatingDock items={links} /> */}
    </div>
  );
}
