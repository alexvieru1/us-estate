"use client";
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBook,
  IconBulb,
  IconHome,
  IconHomeDollar,
  IconMail,
} from "@tabler/icons-react";
import { sendContactForm } from "@/lib/api";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState<null | { type: string; message: string }>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert(null);

    try {
      setIsSubmitting(true);
      await sendContactForm({
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      setAlert({ type: "success", message: "Mesajul a fost trimis cu succes!" });
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setAlert({
        type: "error",
        message: "Eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      title: "Insights",
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
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="mt-10 lg:mt-20 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contactați-ne
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Aveți întrebări sau nelămuriri? Nu ezitați să ne contactați folosind
          formularul de mai jos.
        </p>

        {alert && (
          <div
            className={`p-2 my-4 rounded-md ${
              alert.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form className="my-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullName">Nume complet</Label>
            <Input
              id="fullName"
              placeholder="Ion Popescu"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Email */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Adresă de email</Label>
            <Input
              id="email"
              placeholder="ionpopescu@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Subject */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subiect</Label>
            <Input
              id="subject"
              placeholder="Subiectul mesajului dumneavoastră"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* Message */}
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              id="message"
              placeholder="Scrieți mesajul dumneavoastră aici..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-md"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
          </button>
        </form>
      </div>
      <FloatingDock items={links} />
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactPage;
