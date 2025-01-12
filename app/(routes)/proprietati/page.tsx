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
      title: "Acasa",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Despre Noi",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/despre-noi",
    },
    {
      title: "Proprietati",
      icon: (
        <IconHomeDollar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/proprietati",
    },
    {
      title: "Resurse", // You can change this to "Blog" if preferred
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resurse",
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
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/a90f728194b0acd4aec6ab3d9be7210c/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108955/61bd4ac2-5b65-4960-ae1b-05acfe42d46d.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/93f927cd070d2b36a678bb41a683768b/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108958/3b7ade5f-b71b-4941-bc0d-3a265f73ecc3.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/afca367696ee1ba7ed77a86db5e8d513/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108960/8d880d87-aba0-4a1c-958c-ab6e1dcece03.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/05c6fd17ad419dcf0e9997fdfb7ef8ff/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82380743/ef8b9d40-125f-4625-b693-539c52cfe451.jpeg",
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
      title: "Spatiu Comercial One Cotroceni Park",
      src: "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/96dac4cdb3361e1cf69947b975046f6f/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83109439/8b078c0d-5946-417a-b3f2-bf2d1468469b.jpg",
      images: [
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/dacb89cea3657c59d966801e13e08d7a/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108826/7034eaa4-fabd-44c2-9cc6-09ce09e85f94.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/8aaf63de79394e72a80e31bdf76d00a3/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82379385/559fc9e8-48de-433d-ad7c-19539a7f1213.jpeg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/d012461744984826433beafdaaa319c5/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83108796/8929cc79-e5a5-4bc0-ba13-55508ed6c6b1.jpg",
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
      title: "Cabana la Sinaia",
      src: "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/a1e1927ce2bc299ba4538b146d0a8744/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84164649/e858dce8-adbe-4880-a593-b84296108ea5.jpg",
      images: [
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/9637690da962d570de80a43fbee6b640/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84164848/198cfc99-5eb0-4a28-b85a-22b2ce3aa538.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/958e53fa0264012e0dfed7c9c3546762/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84164875/fca0cbb0-aa89-44bd-8ee6-e901313ef340.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/1cfeabea6f116bd2d3ca9f25cd5f03eb/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84164921/b1bd0184-6760-469a-a0c3-916c765c0f27.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/b575e18e18b3e87dc9efe0d4220a956f/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84165016/58d9db14-7f9a-43d8-8e9f-e93a1b39e9ce.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/c9d26b67ff2f047feed5ace0fe88098c/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84165018/813ca0d7-80f6-4b03-969d-e6d910b5a997.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/a11f1195d12589657ef33ebd6e6a4206/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84165047/0267f9a7-471e-4701-9304-696e5940d502.jpg",
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
      src: "https://i.roamcdn.net/prop/imo/gallery-main-900w-watermark/4518394ca5eb118f986c1391f74623ec/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/84170316/d302a6df-43cd-495f-86ad-b401e6af7426.jpeg",
      images: [
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/28df244076e5a0cee6960f2d85c89402/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83403971/975a8f24-e58c-405e-b6e0-caa231ea2415.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/d68b9ca3a760c021c3ba9dc0ac87b68a/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83403973/8139730b-3b49-4f4f-b4a0-8949f286cfb2.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/1ebec93eb1cf0829c2a30b81464c47e3/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83403977/58c84886-87e8-4d91-9638-04624f365ef8.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/ee448b126a3005f046613dcb2a10585c/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83404017/8d071830-cb3f-4a3d-9655-f09bb16615af.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/7ab3902e72468fbd3b79316784589ddc/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83404020/6d0f4b18-5852-45cf-aba9-df5423cb72a8.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/c4f929ba7e947e22b4e9da0388a2a235/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83404021/93303324-4531-451d-a339-8ee6497040eb.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/3dfc05b0424e4c4c9def8991d7406524/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/83404125/9a9428f2-1297-4c4e-a809-4342883304b1.jpg",
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
        // "Internet Fibra Optica",
        "Incalzire in Pardoseala",
        "Terasa",
      ], // Random features
    },
    {
      title: "Apartament Herastrau",
      src: "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/1caffae98ce06a4726a04af1028531c3/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212425/dd8aa4d5-eb7b-4a4c-bfde-05834aae3b19.jpg",
      images: [
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/fa6b42b9a1d38399b48cd0f2458fcf56/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212426/d23b5d39-e266-4480-80a7-361c68cede10.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/20dd00aee99657a2db70a30a2250d8cb/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212428/741a5009-53ab-45f7-903a-391d2f568e7a.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/6f2ff9a04030c85c9b9bf954a20ce0b2/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212446/fcda364c-633e-4626-bfd8-891f81d3b1c8.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/2e7a815ab75a388276c3ff3351dcb126/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212547/b9eec3c0-bf84-414b-9eff-93864bc25f08.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/d0eeba169f27296975191dc83d3daaa6/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212556/6f8e85a5-3d87-4604-a556-b9ba109028ef.jpg",
        "https://i.roamcdn.net/prop/imo/gallery-full-1200w-watermark/d16da5f5c35cebf397178ec139be8368/-eyJvdyI6IkNFTlRSQUxOT1JEIn0%3D/prod-property-core-backend-media-imo/82212665/18c00b90-6dbe-45fc-9cad-1839ce3bd6b9.jpg",
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
