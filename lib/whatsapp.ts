const PHONE = "+573006227196";

export const message_whatsapp = `Hola, buen día.
                          Estoy interesado en conocer más sobre sus servicios profesionales y recibir una propuesta adaptada a mis requerimientos.
                          Agradecería su orientación para identificar la mejor solución disponible y obtener una cotización sin compromiso.
                          Quedo atento a su respuesta. Muchas gracias.
                        `;

export function whatsAppUrl(message?: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message ?? message_whatsapp)}`;
}

export function whatsAppServiceUrl(message: string): string {
  return whatsAppUrl(
    `Hola, me interesa el servicio de ${message}. ¿Me pueden dar más información?`,
  );
}

export function whatsAppRedirect(
  msg: string,
  type: "service" | "general" = "general",
) {
  if (type === "service") {
    window.open(whatsAppServiceUrl(msg), "_blank");
  } else {
    window.open(whatsAppUrl(msg), "_blank");
  }
}
