"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

type FormData = {
  name: string;
  email: string;
  solution: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  solution: "Energia / paneles solares",
  message: "",
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotice(null);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.error || "Error al enviar el mensaje");
      }

      setNotice({
        type: "success",
        text: "Mensaje enviado correctamente. Te contactaremos pronto.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setNotice({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="premium-panel grid gap-5 rounded-lg p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <label className="text-sm text-muted-foreground" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-muted-foreground" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-muted-foreground" htmlFor="solution">
          Solucion de interes
        </label>
        <select
          id="solution"
          name="solution"
          value={formData.solution}
          onChange={handleChange}
          className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
        >
          <option>Energia / paneles solares</option>
          <option>Ingenieria</option>
          <option>Sistemas</option>
          <option>Electronica</option>
          <option>Consultoria</option>
          <option>Helpdesk</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-muted-foreground" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-white outline-none focus:border-eliot-cyan"
        />
      </div>

      {notice && (
        <div
          className={`rounded-md p-4 text-sm ${
            notice.type === "success"
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {notice.text}
        </div>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  );
}
