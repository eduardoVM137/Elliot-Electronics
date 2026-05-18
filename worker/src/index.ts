interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL?: string;
  FROM_EMAIL?: string;
  ALLOWED_ORIGIN?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  solution?: string;
  message?: string;
}

const DEFAULT_TO_EMAIL = "contacto@elliot-electronics.com";
const DEFAULT_FROM_EMAIL = "contacto@elliot-electronics.com";

const json = (
  body: unknown,
  status: number,
  headers: HeadersInit = {},
) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

const corsHeaders = (request: Request, env: Env) => {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigin = env.ALLOWED_ORIGIN || origin || "*";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return json({ error: "Metodo no permitido" }, 405, cors);
    }

    let data: ContactPayload;

    try {
      data = await request.json();
    } catch {
      return json({ error: "Solicitud invalida" }, 400, cors);
    }

    const name = data.name?.trim() || "";
    const email = data.email?.trim() || "";
    const solution = data.solution?.trim() || "Sin especificar";
    const message = data.message?.trim() || "";

    if (!name || !email || !message) {
      return json({ error: "Nombre, email y mensaje son requeridos" }, 400, cors);
    }

    if (!isEmail(email)) {
      return json({ error: "El email no es valido" }, 400, cors);
    }

    const fromEmail = env.FROM_EMAIL || DEFAULT_FROM_EMAIL;
    const toEmail = env.TO_EMAIL || DEFAULT_TO_EMAIL;

    if (!env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return json({ error: "El envio no esta configurado" }, 500, cors);
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Elliot Electronics <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Nuevo contacto de ${name} - ${solution}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Solucion de interes:</strong> ${escapeHtml(solution)}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend error:", await resendResponse.text());
      return json({ error: "No se pudo enviar el mensaje" }, 502, cors);
    }

    return json({ success: true }, 200, cors);
  },
};
