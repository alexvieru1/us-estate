/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import {
  IconBarbell,
  IconBath,
  IconBed,
  IconBottle,
  IconBuildingSkyscraper,
  IconCalendarMonth,
  IconCar,
  IconCurrencyDollar,
  IconDeviceDesktopAnalytics,
  IconFlame,
  IconHome,
  IconMapPin,
  IconMountain,
  IconMovie,
  IconPlant,
  IconPool,
  IconRipple,
  IconRuler,
  IconSailboat,
} from "@tabler/icons-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const featureIcons: { [key: string]: JSX.Element } = {
  Pool: <IconPool className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Infinity Pool": <IconPool className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Private Pool": <IconPool className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  Garden: <IconPlant className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  Garage: <IconCar className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  Balcony: <IconBuildingSkyscraper className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Mountain View": <IconMountain className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Rooftop Terrace": <IconBuildingSkyscraper className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Lake Access": <IconSailboat className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  Gym: <IconBarbell className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Home Theater": <IconMovie className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Wine Cellar": <IconBottle className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Smart Home System": <IconDeviceDesktopAnalytics className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  Fireplace: <IconFlame className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "Fire Pit": <IconFlame className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
  "River View": <IconRipple className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex justify-between items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        <div className="ml-4 flex items-center justify-center">
          <Modal>
            <ModalTrigger className="bg-transparent border-2 border-white text-white flex text-center justify-center group/modal-btn">
              Book a viewing
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Book your viewing to{" "}
                  <br />
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    {card.title}
                  </span>{" "}
                  <br />
                  now!
                </h4>
                <div className="flex justify-center items-center">
                  {card.images.map(
                    (image: string | StaticImport, idx: string) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 dark:bg-neutral-100 dark:border-neutral-100 border border-neutral-700 flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt="bali images"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                      </motion.div>
                    )
                  )}
                </div>
                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                  <div className="flex  items-center justify-center">
                    <IconCurrencyDollar className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.price.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconBed className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.bedrooms} bedrooms
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconBath className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.bathrooms} bathrooms
                    </span>
                  </div>
                  <div className="flex  items-center justify-center">
                    <IconRuler className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.surface} m&sup2;
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconHome className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconMapPin className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconCalendarMonth className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Built in {card.yearBuilt}
                    </span>
                  </div>
                  {card.features?.map((feat: string, idx: string) => (
                    <div
                      key={"feature" + idx}
                      className="flex items-center justify-center"
                    >
                      {/* Check if the feature exists in the featureIcons mapping */}
                      {featureIcons[feat] || (
                        <IconMapPin className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      )}
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        {feat} {/* Display the feature name */}
                      </span>
                    </div>
                  ))}
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <Link href='/contact'>
                  <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                    Book Now
                  </button>
                </Link>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  // Function to handle scrolling, wrapped in useCallback to prevent unnecessary re-creations
  const handleScroll = useCallback(() => {
    if (hovered !== null) {
      setHovered(null); // Reset hover state on scroll
    }
  }, [hovered]);

  // Add scroll event listener on mount and remove it on cleanup
  useEffect(() => {
    // Throttle scroll handling
    let scrollTimeout: NodeJS.Timeout;
    const handleThrottledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 150); // Reset hover state after scroll delay
    };

    window.addEventListener("scroll", handleThrottledScroll);

    return () => {
      window.removeEventListener("scroll", handleThrottledScroll);
    };
  }, [handleScroll]); // Ensure handleScroll is included as a dependency

  return (
    <div className="grid grid-cols-1 px-8 my-10 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
