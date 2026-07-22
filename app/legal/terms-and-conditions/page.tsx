import type { Metadata } from "next";

import { LegalSection } from "../components/legal-section";
import { LegalHeader } from "../components/legal-header";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Condiciones que regulan el acceso y uso del sitio web de ASEO Y MULTISERVICIOS OPERA SAS, así como la relación con los usuarios que solicitan información sobre sus servicios.",
  alternates: {
    canonical: "https://operasas.com/legal/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Términos de Servicio | Opera",
    description:
      "Condiciones que regulan el acceso y uso del sitio web de ASEO Y MULTISERVICIOS OPERA SAS.",
    url: "https://operasas.com/legal/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalHeader
        title="Términos de Servicio"
        description="Los presentes términos regulan el acceso y uso del sitio web de ASEO Y MULTISERVICIOS OPERA SAS. Al navegar y utilizar este sitio, el usuario acepta las condiciones aquí descritas."
        lastUpdated="17 de junio de 2026"
      />

      <div className="mt-16 space-y-14">
        <LegalSection title="1. Identificación del titular">
          <p>
            El presente sitio web es operado por{" "}
            <strong>ASEO Y MULTISERVICIOS OPERA SAS</strong>, empresa dedicada a la prestación de
            servicios de aseo integral, limpieza de fachadas,
            tratamiento de pisos, jardinería, limpieza y mantenimiento de piscinas, conserjería,
            recepcionistas, salvavidas, aseo empresarial y aseo corporativo.
          </p>

          <p>
            <strong>Empresa:</strong> ASEO Y MULTISERVICIOS OPERA SAS
            <br />
            <strong>NIT:</strong> 902.024.431-1
            <br />
            <strong>Domicilio:</strong> Barranquilla, Colombia
            <br />
            <strong>Correo:</strong> multiserviciosoperasas@gmail.com
            <br />
            <strong>Teléfono:</strong> 300 622 7196
          </p>
        </LegalSection>

        <LegalSection title="2. Objeto y aceptación">
          <p>
            Estos Términos de Servicio regulan el acceso, la navegación y el uso
            del sitio web de ASEO Y MULTISERVICIOS OPERA SAS. El acceso y la utilización del sitio
            atribuyen la condición de usuario e implican la aceptación plena de
            las presentes condiciones.
          </p>

          <p>
            Si el usuario no está de acuerdo con alguna de las disposiciones aquí
            establecidas, deberá abstenerse de utilizar el sitio web.
          </p>
        </LegalSection>

        <LegalSection title="3. Finalidad del sitio web">
          <p>
            El sitio web tiene una finalidad informativa y comercial. A través de
            él, los usuarios pueden conocer los servicios ofrecidos por ASEO Y MULTISERVICIOS OPERA
            SAS, solicitar información, requerir cotizaciones y establecer
            contacto con la empresa.
          </p>

          <p>
            La información publicada sobre los servicios tiene carácter
            orientativo y no constituye una oferta contractual vinculante. Las
            condiciones definitivas de cada servicio se acordarán directamente
            entre ASEO Y MULTISERVICIOS OPERA SAS y el cliente.
          </p>
        </LegalSection>

        <LegalSection title="4. Uso adecuado del sitio">
          <p>
            El usuario se compromete a utilizar el sitio web de conformidad con
            la ley, la moral, el orden público y los presentes términos. En
            particular, se obliga a abstenerse de:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Utilizar el sitio con fines ilícitos o lesivos para los derechos e
              intereses de terceros.
            </li>
            <li>
              Introducir o difundir virus, código malicioso o cualquier elemento
              que pueda dañar los sistemas o la información del sitio.
            </li>
            <li>
              Intentar acceder de forma no autorizada a secciones restringidas o
              a los sistemas de la empresa.
            </li>
            <li>
              Reproducir, copiar o distribuir el contenido del sitio sin la
              debida autorización.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Cotizaciones y solicitudes de servicio">
          <p>
            Las cotizaciones generadas a partir de las solicitudes realizadas
            mediante el formulario de contacto o los canales habilitados tienen
            carácter informativo y podrán estar sujetas a validación,
            disponibilidad y a las condiciones particulares de cada servicio.
          </p>

          <p>
            La relación contractual entre ASEO Y MULTISERVICIOS OPERA SAS y el cliente se perfeccionará
            únicamente mediante los acuerdos específicos que se suscriban para la
            prestación de los servicios.
          </p>
        </LegalSection>

        <LegalSection title="6. Propiedad intelectual">
          <p>
            Todos los contenidos del sitio web, incluyendo textos, imágenes,
            logotipos, marcas, diseños, gráficos y su estructura, son propiedad
            de ASEO Y MULTISERVICIOS OPERA SAS o de terceros que han autorizado su uso, y se encuentran
            protegidos por la normativa sobre propiedad intelectual e industrial.
          </p>

          <p>
            Queda prohibida su reproducción, distribución, comunicación pública o
            transformación total o parcial sin la autorización expresa de ASEO Y MULTISERVICIOS OPERA
            SAS.
          </p>
        </LegalSection>

        <LegalSection title="7. Enlaces a terceros">
          <p>
            El sitio web puede contener enlaces a plataformas de terceros, como
            WhatsApp o redes sociales. ASEO Y MULTISERVICIOS OPERA SAS no es responsable del contenido,
            las políticas ni las prácticas de dichos sitios externos, cuyo acceso
            se realiza bajo la exclusiva responsabilidad del usuario.
          </p>
        </LegalSection>

        <LegalSection title="8. Responsabilidad">
          <p>
            ASEO Y MULTISERVICIOS OPERA SAS procura mantener el sitio web disponible y con información
            actualizada; sin embargo, no garantiza la ausencia de interrupciones,
            errores o inexactitudes, ni se responsabiliza por los daños que
            pudieran derivarse del uso del sitio o de la imposibilidad de
            acceder a él.
          </p>

          <p>
            La empresa se reserva el derecho de suspender, modificar o
            interrumpir temporal o definitivamente el sitio web o cualquiera de
            sus contenidos, sin necesidad de previo aviso.
          </p>
        </LegalSection>

        <LegalSection title="9. Protección de datos personales">
          <p>
            El tratamiento de los datos personales recopilados a través del sitio
            web se rige por lo dispuesto en nuestra Política de Privacidad, la
            cual forma parte integral de los presentes términos.
          </p>
        </LegalSection>

        <LegalSection title="10. Modificaciones">
          <p>
            ASEO Y MULTISERVICIOS OPERA SAS podrá modificar en cualquier momento los presentes Términos
            de Servicio para adaptarlos a cambios legales, regulatorios,
            tecnológicos o relacionados con sus servicios. La versión vigente
            estará siempre disponible en este sitio web e indicará la fecha de su
            última actualización.
          </p>
        </LegalSection>

        <LegalSection title="11. Legislación aplicable y jurisdicción">
          <p>
            Los presentes Términos de Servicio se interpretan y aplican conforme
            a la legislación de la República de Colombia. Cualquier controversia
            relacionada con el sitio web se someterá a los jueces y tribunales
            competentes del territorio colombiano.
          </p>
        </LegalSection>

        <LegalSection title="12. Contacto">
          <p>
            Para cualquier consulta relacionada con estos Términos de Servicio,
            el usuario podrá comunicarse a través del siguiente correo
            electrónico:
          </p>

          <p>
            <strong>multiserviciosoperasas@gmail.com</strong>
          </p>
        </LegalSection>
      </div>
    </>
  );
}