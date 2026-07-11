# Opera — Sitio web corporativo

Sitio corporativo de **Opera** (servicios de limpieza, jardinería y mantenimiento).
Construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

El proyecto está diseñado para crecer: añadir páginas, secciones y módulos sin
reescribir lo existente, y para conectarse a un **CMS (Sanity)** más adelante con
cambios mínimos.

---

## 🚀 Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

> ⚠️ **Versión de Next.js**: este proyecto usa Next.js 16, que tiene cambios
> importantes respecto a versiones anteriores. La documentación oficial está
> disponible localmente en `node_modules/next/dist/docs/`. Conviene consultarla
> antes de introducir patrones nuevos.

---

## 🗂️ Estructura del proyecto

```
opera/
├── app/                      # Rutas (App Router) — solo enrutado y composición
│   ├── layout.tsx            # Layout raíz: fuentes, metadata, Header, Footer
│   ├── page.tsx              # Home — compone las secciones
│   └── globals.css           # Tailwind + tokens del sistema de diseño
│
├── components/
│   ├── ui/                   # Primitivos reutilizables y agnósticos de contenido
│   │   ├── button.tsx        #   (Container, Section, Button, SectionHeading,
│   │   ├── container.tsx     #    Logo, Icons…)
│   │   ├── section.tsx
│   │   ├── section-heading.tsx
│   │   ├── logo.tsx
│   │   └── icons.tsx
│   ├── layout/               # Estructura global del sitio
│   │   ├── header.tsx        #   Header (cliente: scroll + menú móvil)
│   │   └── footer.tsx
│   └── sections/             # Bloques de página (uno por sección del diseño)
│       ├── hero.tsx
│       ├── about.tsx
│       ├── stats.tsx
│       ├── services.tsx      #   (cliente: carrusel)
│       ├── process.tsx
│       ├── cta-banner.tsx
│       ├── faq.tsx
│       └── contact-form.tsx  #   (cliente: formulario)
│
├── content/                  # Contenido editorial (datos locales por ahora)
│   ├── site.ts               #   Configuración global (nav, contacto, footer)
│   └── home.ts               #   Contenido de la home
│
├── lib/
│   ├── content.ts            # 🔌 Proveedor de contenido (única frontera de datos)
│   └── utils.ts              # Utilidades (cn)
│
└── types/
    └── content.ts            # Modelos de contenido (contrato de datos / TS)
```

### Convenciones clave

- **Server Components por defecto.** Solo se marca `"use client"` donde hay
  interactividad: `header.tsx`, `services.tsx`, `contact-form.tsx`.
- **El contenido nunca se importa directo en la UI.** Las páginas y secciones
  reciben datos vía props desde `lib/content.ts`. Esto permite cambiar la fuente
  de datos (a Sanity) sin tocar componentes.
- **Tokens de diseño en un solo lugar.** Colores, tipografía y radios se definen
  en `app/globals.css` dentro del bloque `@theme` (Tailwind v4). Genera clases
  como `bg-brand-600`, `text-ink-500`, etc.
- **Alias de importación**: `@/*` apunta a la raíz del proyecto
  (p. ej. `@/components/ui/button`).

---

## ➕ Cómo extender

### Añadir una sección a la home

1. Crea el componente en `components/sections/mi-seccion.tsx`.
2. Define su contenido y tipos en `types/content.ts` + `content/home.ts`.
3. Renderízalo en `app/page.tsx` dentro de un `<Section>` + `<Container>`.

### Añadir una página nueva

Crea una carpeta en `app/` con un `page.tsx` (App Router, basado en archivos).
Ejemplos previstos en la navegación: `app/blog/page.tsx`,
`app/solutions/[slug]/page.tsx` (los tipos `Service.slug` ya están listos).

### Añadir un servicio

Edita `content/home.ts` → `services.items`. Cada servicio ya tiene `slug` para
generar en el futuro la ruta `/solutions/[slug]`.

---

## 🖼️ Imágenes (placeholders temporales)

Las imágenes actuales son **placeholders** servidos desde Unsplash (CDN público)
para que el diseño se vea durante el desarrollo. Están marcadas con comentarios
en `content/home.ts`.

- Para reemplazarlas, cambia el campo `src` de cada `image` por el asset final
  (o la URL de Sanity). El `alt` puede quedarse.
- Los dominios permitidos para `next/image` se configuran en
  `next.config.ts` → `images.remotePatterns`.

---

## 🔌 Conexión futura con Sanity (CMS)

La migración está pensada como un **cambio de un solo archivo**: `lib/content.ts`.

1. Crear esquemas en Sanity que reflejen los modelos de `types/content.ts`
   (`SiteConfig`, `HomeContent`, `Service`, etc.).
2. Reemplazar el cuerpo de las funciones de `lib/content.ts` por llamadas
   `client.fetch(...)`. Las firmas ya son `async`, así que **el resto de la app
   no cambia**.
3. Añadir el host de imágenes de Sanity (`cdn.sanity.io`) a `remotePatterns`.

---

## 📝 Pendientes / siguientes pasos

- [ ] Conectar el formulario de contacto a un backend (Route Handler en
      `app/api/contact/route.ts` o Server Action). Hoy es un stub en cliente.
- [ ] Páginas `/blog` y `/solutions/[slug]`.
- [ ] Páginas legales (`/legal/*`) enlazadas en el footer.
- [ ] Reemplazar imágenes placeholder por assets de marca.
- [ ] `opengraph-image`, `sitemap.ts` y `robots.ts` para SEO.
