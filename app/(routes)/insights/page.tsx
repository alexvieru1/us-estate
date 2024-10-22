"use client";
import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBook,
  IconBulb,
  IconHome,
  IconHomeDollar,
  IconMail,
  IconCurrencyDollar,
  IconTree,
  IconBriefcase,
  IconLocation,
  IconBuildingSkyscraper,
  IconFileText,
  IconChartLine,
  IconBrush,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

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

  const features = [
    {
      title: "Market Trends and Analysis",
      description: "Explore the latest market trends, pricing forecasts, and insights into the luxury real estate market.",
      icon: <IconChartLine />,
    },
    {
      title: "Property Buying Guides",
      description: "Detailed guides to help you navigate the process of buying high-end properties.",
      icon: <IconFileText />,
    },
    {
      title: "Featured Properties & Case Studies",
      description: "Showcase of our exclusive properties and success stories from satisfied buyers.",
      icon: <IconBuildingSkyscraper />,
    },
    {
      title: "Interior Design & Architecture Trends",
      description: "Stay ahead of the latest trends in interior design and architecture for luxury homes.",
      icon: <IconBrush />,
    },
    {
      title: "Local Area Highlights",
      description: "Discover the best neighborhoods and regions for luxury real estate investment.",
      icon: <IconLocation />,
    },
    {
      title: "Buyer & Seller Resources",
      description: "Tips and resources for buyers and sellers to maximize their real estate transactions.",
      icon: <IconBriefcase />,
    },
    {
      title: "Investment Insights",
      description: "Expert advice on investing in high-value properties and maximizing returns.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Sustainability & Eco-Luxury",
      description: "Learn about sustainable building practices and the growing trend of eco-luxury homes.",
      icon: <IconTree />,
    },
  ];

  const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative lg:mt-52 max-w-7xl p-4 mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <FloatingDock items={links} />
    </div>
  );
  
};

export default page;
