import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Opera - Soluciones Integrales de Limpieza y Mantenimiento",
    short_name: "Opera",
    description:
      "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/img/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}