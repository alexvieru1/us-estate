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
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import Image from "next/image";

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

  const content = [
    {
      title: "Central Nord",
      description: (
        <>
          <p>
            CentralNord este mai mult decât o agenție imobiliară – este
            partenerul tău în căutarea perfecțiunii. De la apartamente
            sofisticate la case unicat, portofoliul nostru este conceput să
            satisfacă cele mai exigente gusturi. Fiecare proprietate este atent
            selectată, astfel încât clienții noștri să beneficieze de confort,
            stil și siguranță într-un cadru urban de lux.
          </p>

          <p>
            La CentralNord, ne dedicăm să redefinim experiența locuirii printr-o
            selecție de proprietăți premium care îmbină rafinamentul
            arhitectural cu confortul suprem. Portofoliul nostru include
            proprietăți atent selectate în cele mai exclusiviste locații,
            destinate celor care caută un stil de viață sofisticat și un nivel
            de calitate fără compromisur
          </p>
        </>
      ),
      badge: "Despre Noi",
      image:
        "https://img.freepik.com/free-photo/landscape-sunset-architectural-matrix-stunning-modern-villa-with-swimming-pool_1409-5155.jpg?t=st=1729848897~exp=1729852497~hmac=3deac45bc681c16c92c4b8e2569115c1738c27afa57ed0ae100c38cc99bd40b0&w=1380",
    },
    {
      title: "De ce Central Nord?",
      description: (
        <>
          <p>
            Misiunea noastră este să oferim o experiență de locuire care
            depășește așteptările, asigurând un proces de achiziție transparent
            și dedicat. Credem că fiecare proprietate de lux merită o abordare
            atentă și personalizată, iar pentru noi, fiecare client este unic.
            De aceea, am dezvoltat un sistem de consultanță care pune accent pe
            nevoile și dorințele fiecărui cumpărător, oferindu-i suport constant
            și soluții adaptate la fiecare etapă a procesului de achiziție.
            Dincolo de standardele înalte pe care le impunem în selectarea
            proprietăților, ne străduim să construim relații de încredere și să
            simplificăm cât mai mult procesul, astfel încât fiecare tranzacție
            să fie o experiență plăcută și lipsită de stres.
          </p>
          <p>
            Viziunea noastră este să stabilim noi standarde în imobiliarele de
            lux, devenind prima opțiune pentru cei care apreciază un stil de
            viață premium. Aspirăm să devenim un punct de referință în
            imobiliarele exclusiviste, cunoscuți nu doar pentru calitatea
            portofoliului nostru, ci și pentru nivelul ridicat al serviciilor
            oferite. Dorim să oferim fiecărui client acces la o colecție de
            proprietăți de excepție, situate în locații emblematice și
            proiectate cu un simț profund pentru detalii și estetică. Împingând
            constant limitele calității și profesionalismului, visăm să
            redefinim piața imobiliară de lux și să devenim partenerul de
            încredere al celor care caută nu doar un simplu spațiu de locuit, ci
            o experiență de viață de neegalat.
          </p>
        </>
      ),
      badge: "Misiunea Noastra",
      image:
        "https://img.freepik.com/free-photo/modern-minimalist-office_23-2151780700.jpg?t=st=1729851409~exp=1729855009~hmac=931cea8188a986da3dbff624770d4af4fb1e5a9856926076a86af59703a0bdbd&w=1380",
    },
    {
      title: "Experti in domeniu",
      description: (
        <>
          <p>
            CentralNord reunește o echipă de experți dedicați din domenii
            esențiale precum imobiliare, arhitectură și design interior, care
            colaborează pentru a transforma fiecare proiect într-o experiență de
            neegalat pentru clienții noștri. Fiecare specialist contribuie cu
            cunoștințele și pasiunea sa pentru a crea un parcurs de achiziție
            fluid și plăcut, dar și pentru a oferi acces exclusiv la proprietăți
            unice, remarcabile prin calitate și eleganță. Atenția noastră la
            detalii, fie că este vorba despre localizarea perfectă, finisajele
            de top sau adaptarea fiecărei proprietăți la stilul de viață al
            cumpărătorului, se reflectă în fiecare etapă a experienței cu
            CentralNord. Profesionalismul și dedicarea sunt trăsături
            definitorii pentru echipa noastră, iar fiecare membru este profund
            implicat în oferirea unui serviciu de încredere, personalizat și
            adaptat nevoilor fiecărui client. Având un nivel ridicat de exigență
            și dorința de a excela în tot ceea ce facem, ne asigurăm că procesul
            de tranzacție este gestionat impecabil, de la prima consultare până
            la încheierea actelor și predarea proprietății. Împărtășim un
            angajament comun de a crea nu doar tranzacții, ci relații de durată
            bazate pe încredere, transparență și respect, considerând fiecare
            colaborare un parteneriat de lungă durată cu cei care caută mai mult
            decât o simplă locuință – caută o experiență de locuire autentică și
            rafinată.
          </p>
        </>
      ),
      badge: "Echipa CentralNord",
      image:
        "https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151065000.jpg?t=st=1729852622~exp=1729856222~hmac=0d041eaad956f7485bb13ab0af9f9764b0ffc83cd500a6bc8c319db8eb542ba7&w=1060",
    },
    {
      title: "Pasiune pentru Lux și Excelență",
      description: (
        <>
          <p>
            La CentralNord, ne dedicăm să transformăm visurile imobiliare în
            realitate printr-o abordare personalizată și atentă la detalii. Cu o
            echipă de profesioniști cu experiență în imobiliare, arhitectură și
            design interior, ne angajăm să oferim clienților noștri nu doar
            proprietăți de lux, ci și o experiență de achiziție care să
            depășească toate așteptările. Într-o lume în continuă schimbare, ne
            străduim să fim mereu cu un pas înainte, adaptându-ne la tendințele
            emergente și asigurându-ne că fiecare colaborare este marcată de
            integritate, transparență și angajament față de excelență.
            Indiferent dacă căutați o locuință de vis sau o oportunitate de
            investiție, CentralNord este partenerul de încredere care vă va
            ghida pe parcursul întregului proces
          </p>
        </>
      ),
      badge: "Echipa CentralNord",
      image:
        "https://img.freepik.com/free-photo/view-automatic-smart-feeder-household-pets_23-2151482452.jpg?t=st=1729852842~exp=1729856442~hmac=820c098091ee75ec601a923b610d7ad116be0c0d63c76252a4fcccc0dd0cd4c4&w=1380",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <TracingBeam className="px-14 0mt-10 mb-6 lg:mb-24">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-[#6344F5] text-white text-xl px-2 rounded-full font-semibold w-fit mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      <FloatingDock items={links} />
    </div>
  );
};

export default page;
