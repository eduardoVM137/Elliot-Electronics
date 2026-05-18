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

const parseRecipients = (value?: string) =>
  (value || DEFAULT_TO_EMAIL)
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

const buildEmailHtml = ({
  name,
  email,
  solution,
  message,
  copyEmail,
}: {
  name: string;
  email: string;
  solution: string;
  message: string;
  copyEmail: string;
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSolution = escapeHtml(solution);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const replyUrl = `mailto:${email}?cc=${copyEmail}&subject=${encodeURIComponent(
    `Re: ${solution}`,
  )}`;

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nuevo contacto - Elliot Electronics</title>
  </head>
  <body style="margin:0;padding:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f6fb;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #dbe3ef;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="background:#07111f;padding:28px 30px;">
                <div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#5ee4ff;">Elliot Electronics</div>
                <h1 style="margin:10px 0 0;font-size:24px;line-height:1.25;color:#ffffff;">Nuevo mensaje desde el formulario</h1>
                <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#b9c6d6;">Un cliente envio una solicitud desde elliot-electronics.com.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 30px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 14px;">
                      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#64748b;">Nombre</div>
                      <div style="margin-top:5px;font-size:17px;font-weight:700;color:#0f172a;">${safeName}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px;">
                      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#64748b;">Email</div>
                      <a href="mailto:${safeEmail}" style="display:inline-block;margin-top:5px;font-size:15px;color:#0369a1;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 22px;">
                      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#64748b;">Solucion de interes</div>
                      <div style="display:inline-block;margin-top:8px;padding:7px 11px;border-radius:999px;background:#e0f7ff;color:#075985;font-size:13px;font-weight:700;">${safeSolution}</div>
                    </td>
                  </tr>
                </table>

                <div style="border-top:1px solid #e5eaf2;padding-top:22px;">
                  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:#64748b;">Mensaje</div>
                  <div style="margin-top:10px;padding:18px;border-radius:10px;background:#f8fafc;border:1px solid #e5eaf2;font-size:15px;line-height:1.7;color:#1f2937;">${safeMessage}</div>
                </div>

                <div style="padding-top:24px;">
                  <a href="${replyUrl}" style="display:inline-block;background:#07111f;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 18px;border-radius:8px;">Responder al cliente</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafc;border-top:1px solid #e5eaf2;padding:18px 30px;font-size:12px;line-height:1.6;color:#64748b;">
                Este correo fue generado automaticamente por el formulario de contacto de Elliot Electronics. Puedes responder directamente a este mensaje.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

const buildEmailText = ({
  name,
  email,
  solution,
  message,
}: {
  name: string;
  email: string;
  solution: string;
  message: string;
}) => `Nuevo mensaje desde el formulario de Elliot Electronics

Nombre: ${name}
Email: ${email}
Solucion de interes: ${solution}

Mensaje:
${message}`;

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
    const toEmails = parseRecipients(env.TO_EMAIL);
    const [primaryEmail = DEFAULT_TO_EMAIL, ...bccEmails] = toEmails;

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
        to: [primaryEmail],
        bcc: bccEmails,
        reply_to: email,
        subject: `Nuevo contacto de ${name} - ${solution}`,
        html: buildEmailHtml({
          name,
          email,
          solution,
          message,
          copyEmail: fromEmail,
        }),
        text: buildEmailText({ name, email, solution, message }),
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend error:", await resendResponse.text());
      return json({ error: "No se pudo enviar el mensaje" }, 502, cors);
    }

    return json({ success: true }, 200, cors);
  },
};
