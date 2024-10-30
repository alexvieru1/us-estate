"use client";
import React from "react";
import { IconHammer, IconClock } from "@tabler/icons-react";

const UnderConstructionPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="text-center p-6 max-w-md">
        <IconHammer className="w-16 h-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Website Under Construction</h1>
        <p className="text-lg md:text-xl mb-6">
          We&apos;re working hard to launch our new website. Please check back soon!
        </p>
        <div className="flex items-center justify-center space-x-2">
          <IconClock className="w-6 h-6 text-yellow-500" />
          <span className="text-sm">Estimated Launch: Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
