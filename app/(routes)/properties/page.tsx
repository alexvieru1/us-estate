"use client";
import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBook,
  IconBulb,
  IconHome,
  IconHomeDollar,
  IconMail,
  IconTaxEuro,
} from "@tabler/icons-react";
import { FocusCards } from "@/app/components/ui/focus-cards";

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

  const cards = [
    {
      title: "Spatiu Comercial / One Cotroceni Park",
      src: "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/48ccb417550390ad7aab2ddeedfa2732/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108949/7622d6d9-a252-42ff-864c-484c3d3de70c.jpg",
      images: [
        "https://img.freepik.com/free-photo/living-room-with-large-window-plants-wall_1340-34198.jpg?t=st=1729852943~exp=1729856543~hmac=52a630d054a5d2d526091d48e994d273c6976e7100a698940c7a921997fb1e9c&w=1380",
        "https://img.freepik.com/free-photo/photorealistic-timber-house-interior-with-wooden-decor-furnishings_23-2151263599.jpg?t=st=1729852964~exp=1729856564~hmac=cfd0d5bcafdd578ffc34a956fbaba3d9904c7b0d3d4e17b090479ac550abc638&w=1380",
        "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794641.jpg?t=st=1729852889~exp=1729856489~hmac=76c89efa6c0c813309385d00561bf2e9214e2830901e8ce90ec50b89f3234899&w=1380",
        "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794641.jpg?t=st=1729852889~exp=1729856489~hmac=76c89efa6c0c813309385d00561bf2e9214e2830901e8ce90ec50b89f3234899&w=1380",
      ],
      price: 4305, // Random price
      // bedrooms: 4, // Random bedrooms
      // bathrooms: 3, // Random bathrooms
      surface: 123, // Random surface in sqm
      type: "Spatiu Comercial", // Random property type
      location: "Bucuresti, One Cotroceni Park", // Random location
      yearBuilt: 2023, // Random year built
      features: [
        "Parcare Privata",
        "Zona Centrala",
        "Certificare Leed Platinum",
      ], // Random features
    },
    {
      title: "Spatiu Comercial / One Cotroceni Park 1",
      src: "https://img.freepik.com/free-photo/low-angle-shot-beautiful-historical-architectural-structure-paris-france_181624-22776.jpg?t=st=1729853210~exp=1729856810~hmac=d355bf6aaeac8a17f94b6a3f33986d0c8b06d32a1e04bba6bdf3eb7c57d11300&w=1380",
      images: [
        "https://img.freepik.com/free-photo/luxury-living-room-with-city-skyline-view-generative-ai_188544-46252.jpg?t=st=1729853037~exp=1729856637~hmac=2f45f24ced229c7b48a52ec16d9d3bf75a8a5025abb9e44504fd9fd668aca381&w=1380",
        "https://img.freepik.com/free-photo/modern-apartment-interior-with-elegant-decor-comfort-generative-ai_188544-12683.jpg?t=st=1729853065~exp=1729856665~hmac=bf7096233370b756f05f9d9ecb1117e2003b0bfac703727783a14414ea33712a&w=1380",
      ],
      price: 4300, // Random price
      // bedrooms: 5, // Random bedrooms
      // bathrooms: 4, // Random bathrooms
      surface: 159, // Random surface in sqm
      type: "Casa/Vila", // Random property type
      location: "Bucuresti, One Cotroceni Park", // Random location
      yearBuilt: 2023, // Random year built
      features: [
        "Parcare Privata",
        "Zona Centrala",
        "Certificare Leed Platinum",
      ], // Random features
    },
    {
      title: "Cabana La Sinaia",
      src: "https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037460.jpg?t=st=1729853255~exp=1729856855~hmac=79236cfdd5d7ef04357638ac7f1bcfe4e11ea136d7a24f8fe6adddafc11c6595&w=1380",
      images: [
        "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp-wood-decor-loft-style_105762-2261.jpg?t=st=1729853242~exp=1729856842~hmac=1f5f0546938af482d44e7e6fdc617e73ec42b167f3763b992ffe0839954920b9&w=1380",
        "https://img.freepik.com/free-photo/3d-rendering-dining-room-kitchen-with-luxury-decor_105762-2054.jpg?t=st=1729853281~exp=1729856881~hmac=e09e28728ca233b5407fd463ca53e129569b80ae5d24a28dda15a15572be66b7&w=1380",
      ],
      price: 189000, // Random price
      bedrooms: 4, // Random bedrooms
      bathrooms: 2, // Random bathrooms
      surface: 158, // Random surface in sqm
      type: "Cabana", // Random property type
      location: "Sinaia, Valea Prahovei", // Random location
      yearBuilt: 1995, // Random year built
      features: ["Terasa", "Parcare Privata"], // Random features
    },
    {
      title: "Apartament One Verdi",
      src: "https://img.freepik.com/free-photo/young-woman-standing-pool_23-2149037094.jpg?t=st=1729853313~exp=1729856913~hmac=0b7c2c0ab8e4e54e9c2f654a0d1146800b7e58e8bc20218c27ad1e0f50a4bdd1&w=1380",
      images: [
        "https://img.freepik.com/free-photo/outdoor-deck_1203-3200.jpg?t=st=1729853343~exp=1729856943~hmac=3e6b6302cc54c87b2bc2fedebab863375737b64e989630875776065017f1b9d8&w=1380",
      ],
      price: 3000, // Random price
      bedrooms: 4, // Random bedrooms
      bathrooms: 3, // Random bathrooms
      surface: 133, // Random surface in sqm
      type: "Apartament", // Random property type
      location: "Bucuresti, Floreasca", // Random location
      yearBuilt: 2023, // Random year built
      features: [
        "Parcare Privata",
        "Internet Fibra Optica",
        "Incalzire in Pardoseala",
        "Terasa",
      ], // Random features
    },
    {
      title: "Apartament Herastrau",
      src: "https://img.freepik.com/free-photo/clean-city-streets-prague_23-2149417733.jpg?t=st=1729853369~exp=1729856969~hmac=fa81ac054cec597664106de40624776d0db6da5f8e499cbd15bf85e1edf74a5c&w=1380",
      images: [
        "https://img.freepik.com/free-photo/rome-statue-street_181624-2831.jpg?t=st=1729853385~exp=1729856985~hmac=5fc5549c6a53e3c0acb00e4b2d61225f8e11277ac2b804f245dd0115b860c4be&w=1380",
      ],
      price: 599000, // Random price
      bedrooms: 3, // Random bedrooms
      bathrooms: 2, // Random bathrooms
      surface: 169, // Random surface in sqm
      type: "Apartament", // Random property type
      location: "Bucuresti, Herastrau, Soseaua Nordului", // Random location
      yearBuilt: 2012, // Random year built
      features: ["Parcare Privata", "Terasa"], // Random features
    },
    // {
    //   title: "Lux la Înălțime",
    //   src: "https://img.freepik.com/free-photo/low-angle-father-with-baby-city_23-2150167097.jpg?t=st=1729853414~exp=1729857014~hmac=2c4e174cf84bf3e986f6d4e1fa79a744903eadfc987f7682d2e83a9c5cc949cc&w=1380",
    //   images: [
    //     "https://img.freepik.com/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?t=st=1729853450~exp=1729857050~hmac=c0d98b1b4d2889cc5c0092f3dccb22eb611bc17f700066efd761f83c19ef3dc2&w=1380",
    //   ],
    //   price: 990000, // Random price
    //   bedrooms: 7, // Random bedrooms
    //   bathrooms: 6, // Random bathrooms
    //   surface: 520, // Random surface in sqm
    //   type: "Loft", // Random property type
    //   location: "Bucuresti", // Random location
    //   yearBuilt: 2023, // Random year built
    //   features: ["Infinity Pool", "Terasa Panoramica", "Smart Home System"], // Random features
    // },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <FocusCards cards={cards} />
      <FloatingDock items={links} />
    </div>
  );
};

export default page;
