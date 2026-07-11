import type { Metadata } from "next";

import { LegalSection } from "../components/legal-section";
import { LegalHeader } from "../components/legal-header";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Conozca qué son las cookies, cuáles utiliza el sitio web de OPERA SAS y cómo puede gestionarlas o desactivarlas desde su navegador.",
};

export default function CookiesPolicyPage() {
  return (
    <>
      <LegalHeader
        title="Política de Cookies"
        description="Esta política explica qué son las cookies, con qué finalidad las utiliza el sitio web de OPERA SAS y las opciones con las que cuenta el usuario para administrarlas o desactivarlas en cualquier momento."
        lastUpdated="11 de julio de 2026"
      />

      <div className="mt-16 space-y-14">
        <LegalSection title="1. ¿Qué son las cookies?">
          <p>
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en el dispositivo del usuario (computador, tableta o
            teléfono móvil) cuando los visita. Permiten que el sitio recuerde
            información sobre la visita, facilitando la navegación y mejorando la
            experiencia de uso.
          </p>

          <p>
            Además de las cookies, pueden utilizarse tecnologías similares como
            el almacenamiento local del navegador, que cumplen funciones
            equivalentes. En esta política, el término &quot;cookies&quot;
            comprende también dichas tecnologías.
          </p>
        </LegalSection>

        <LegalSection title="2. Cómo utilizamos las cookies">
          <p>
            El sitio web de OPERA SAS utiliza cookies con el objetivo de
            garantizar su correcto funcionamiento, recordar las preferencias del
            usuario y comprender de forma general cómo se utiliza el sitio, con
            el fin de mejorarlo continuamente.
          </p>

          <p>
            No utilizamos cookies para recopilar información sensible ni para
            identificar personalmente a los visitantes sin su autorización.
          </p>
        </LegalSection>

        <LegalSection title="3. Tipos de cookies que utilizamos">
          <p>
            Según su finalidad, el sitio web puede emplear las siguientes
            categorías de cookies:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cookies técnicas o necesarias:</strong> imprescindibles
              para el funcionamiento del sitio y la navegación entre sus
              secciones. Sin ellas, algunos servicios no podrían prestarse
              correctamente.
            </li>
            <li>
              <strong>Cookies de preferencias:</strong> permiten recordar
              opciones del usuario, como el idioma o determinadas
              configuraciones de visualización.
            </li>
            <li>
              <strong>Cookies analíticas:</strong> ayudan a entender de forma
              estadística y anónima cómo interactúan los usuarios con el sitio
              (páginas visitadas, tiempo de permanencia, errores), con el fin de
              mejorar su contenido y rendimiento.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> generadas por servicios
              externos integrados en el sitio, como enlaces a WhatsApp o redes
              sociales, que pueden establecer sus propias cookies conforme a sus
              respectivas políticas.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Cookies de terceros">
          <p>
            Algunas funcionalidades del sitio dependen de proveedores externos
            que pueden instalar cookies en el dispositivo del usuario. OPERA SAS
            no controla dichas cookies ni tiene acceso a la información que estos
            terceros recopilan a través de ellas.
          </p>

          <p>
            Recomendamos consultar las políticas de privacidad y de cookies de
            dichos servicios para conocer con detalle sus prácticas.
          </p>
        </LegalSection>

        <LegalSection title="5. Cómo gestionar o desactivar las cookies">
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies
            instaladas en su dispositivo mediante la configuración de su
            navegador. La forma de hacerlo varía según el navegador utilizado:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies.</li>
            <li>Mozilla Firefox: Ajustes → Privacidad y seguridad.</li>
            <li>Safari: Preferencias → Privacidad.</li>
            <li>Microsoft Edge: Configuración → Cookies y permisos del sitio.</li>
          </ul>

          <p>
            Tenga en cuenta que la desactivación de ciertas cookies puede afectar
            el correcto funcionamiento del sitio web y limitar algunas de sus
            funcionalidades.
          </p>
        </LegalSection>

        <LegalSection title="6. Consentimiento">
          <p>
            Al continuar navegando en nuestro sitio web sin modificar la
            configuración de cookies de su navegador, el usuario acepta el uso de
            las cookies descritas en esta política. En caso de no estar de
            acuerdo, podrá configurarlas o desactivarlas conforme a lo indicado
            en el numeral anterior.
          </p>
        </LegalSection>

        <LegalSection title="7. Modificaciones de esta política">
          <p>
            OPERA SAS podrá actualizar esta Política de Cookies cuando resulte
            necesario para adaptarla a cambios legales, tecnológicos o
            relacionados con el funcionamiento del sitio web. La versión vigente
            estará siempre disponible en este sitio e indicará la fecha de su
            última actualización.
          </p>
        </LegalSection>

        <LegalSection title="8. Contacto">
          <p>
            Si tiene dudas o consultas relacionadas con esta Política de Cookies,
            puede comunicarse con nosotros a través del siguiente correo
            electrónico:
          </p>

          <p>
            <strong>multiserviciosopera@gmail.com</strong>
          </p>
        </LegalSection>
      </div>
    </>
  );
}
