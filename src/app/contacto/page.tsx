import type { Metadata } from "next";

import { ContactoSection } from "@/sections/contacto/contacto-section";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  return <ContactoSection />;
}
