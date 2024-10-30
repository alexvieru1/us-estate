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
      title: "Analiza Pieței și Tendințe",
      description:
        "Explorați cele mai recente tendințe de pe piața imobiliară de lux, previziuni de prețuri și informații valoroase despre evoluția acestui sector dinamic. Ne asigurăm că sunteți mereu la curent cu cele mai importante schimbări și oportunități din piață.",
      icon: <IconChartLine />,
    },
    {
      title: "Ghiduri pentru Achiziția de Proprietăți",
      description:
        "Oferim ghiduri detaliate care vă ajută să navigați prin procesul complex de achiziție a proprietăților de lux. De la selecția inițială a imobilului până la finalizarea tranzacției, suntem aici pentru a vă oferi suport și informații utile.",
      icon: <IconFileText />,
    },
    {
      title: "Proprietăți Recomandate și Studii de Caz",
      description:
        "Vă prezentăm o selecție a proprietăților noastre exclusive și poveștile de succes ale clienților satisfăcuți. Fiecare studiu de caz ilustrează modul în care am realizat visurile clienților noștri și cum am făcut posibilă găsirea locuinței ideale.",
      icon: <IconBuildingSkyscraper />,
    },
    {
      title: "Tendințe în Design Interior și Arhitectură",
      description:
        "Rămâneți la curent cu cele mai recente tendințe în designul interior și arhitectură pentru locuințele de lux. Vă oferim informații despre stiluri, materiale și soluții inovatoare care pot transforma un spațiu obișnuit într-un adevărat refugiu de eleganță.",
      icon: <IconBrush />,
    },
    {
      title: "Puncte de Atracție",
      description:
        "Descoperiți cele mai bune cartiere și regiuni pentru investiții imobiliare de lux. Vă oferim informații despre facilitățile locale, cultura comunității și avantajele fiecărei zone pentru a vă ajuta să faceți o alegere informată.",
      icon: <IconLocation />,
    },
    {
      title: "Resurse pentru Investitori",
      description:
        "Furnizăm sfaturi și resurse esențiale pentru cumpărători și vânzători pentru a maximiza succesul tranzacțiilor imobiliare. Indiferent dacă sunteți la prima achiziție sau un investitor experimentat, avem soluții adaptate nevoilor dumneavoastră.",
      icon: <IconBriefcase />,
    },
    {
      title: "Perspective de Investiții",
      description:
        "Beneficiați de sfaturi de la experți în investiții în proprietăți de mare valoare și învățați cum să maximizați randamentele. Vă ghidăm prin oportunitățile de pe piața imobiliară de lux pentru a vă ajuta să luați cele mai bune decizii financiare.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Sustenabilitate și Eco-Luxury",
      description:
        "Aflați despre practicile de construcție sustenabile și tendința tot mai mare a locuințelor eco-luxoase. Viziunea noastră se extinde dincolo de estetica luxului, punând accent pe responsabilitatea față de mediu și pe crearea unor locuințe care respectă natura.",
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
