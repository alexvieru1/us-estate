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
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconCalendarMonth,
  IconCar,
  IconCarGarage,
  IconCurrencyDollar,
  IconCurrencyEuro,
  IconDeviceDesktopAnalytics,
  IconFlame,
  IconHome,
  IconLeaf,
  IconMapPin,
  IconMountain,
  IconMovie,
  IconPlant,
  IconPool,
  IconRipple,
  IconRuler,
  IconSailboat,
  IconSwimming,
} from "@tabler/icons-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featureIcons: { [key: string]: JSX.Element } = {
  Pool: (
    <IconPool className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Piscina: (
    <IconSwimming className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Private Pool": (
    <IconPool className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Garden: (
    <IconLeaf className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Garage: (
    <IconCarGarage className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Balcony: (
    <IconBuildingSkyscraper className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Mountain View": (
    <IconMountain className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Rooftop Terrace": (
    <IconBuildingSkyscraper className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Lake Access": (
    <IconSailboat className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Gym: (
    <IconBarbell className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Home Theater": (
    <IconMovie className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Wine Cellar": (
    <IconBottle className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Smart Home System": (
    <IconDeviceDesktopAnalytics className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  Fireplace: (
    <IconFlame className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "Fire Pit": (
    <IconFlame className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
  "River View": (
    <IconRipple className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
  ),
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
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center lg:mb-8">
                  Book your viewing to <br />
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    {card.title}
                  </span>{" "}
                  <br />
                  now!
                </h4>
                {/* Carousel for Images */}
                <Carousel
                  className="w-full max-w-xl mx-auto"
                  opts={{ align: "start", loop: true }}
                >
                  <CarouselContent className="flex">
                    {card.images.map((image: string, idx: number) => (
                      <CarouselItem key={idx} className="flex-shrink-0 w-full">
                        <div className="h-96 w-full flex justify-center items-center rounded-lg">
                          <Image
                            src={image}
                            alt={`Image ${idx}`}
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-black rounded-full shadow p-2">
                    Previous
                  </CarouselPrevious>
                  <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-black rounded-full shadow p-2">
                    Next
                  </CarouselNext>
                </Carousel>
                <div className="py-2 flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                  <div className="flex  items-center justify-center">
                    <IconCurrencyEuro className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {card.price.toLocaleString("en-US")}
                      {card.price >= 1000 && card.price < 10000
                        ? " / luna"
                        : ""}
                    </span>
                  </div>
                  {card.bedrooms && (
                    <div className="flex items-center justify-center">
                      <IconBed className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        {card.bedrooms} camere
                      </span>
                    </div>
                  )}

                  {card.bathrooms && (
                    <div className="flex items-center justify-center">
                      <IconBath className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        {card.bathrooms < 2
                          ? `${card.bathrooms} grup sanitar`
                          : `${card.bathrooms} grupuri sanitare`}
                      </span>
                    </div>
                  )}
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
                      Construit in {card.yearBuilt}
                    </span>
                  </div>
                  {card.features?.map((feat: string, idx: string) => (
                    <div
                      key={"feature" + idx}
                      className="flex items-center justify-center"
                    >
                      {/* Check if the feature exists in the featureIcons mapping */}
                      {featureIcons[feat] || (
                        <IconBuildingCommunity className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      )}
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        {feat} {/* Display the feature name */}
                      </span>
                    </div>
                  ))}
                </div>
              </ModalContent>
              <ModalFooter className="">
                <Link href="/contact">
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
