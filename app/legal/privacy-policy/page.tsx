import type { Metadata } from "next";

import { LegalSection } from "../components/legal-section";
import { LegalHeader } from "../components/legal-header";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conozca cómo ASEO Y MULTISERVICIOS OPERA SAS recopila, utiliza, protege y trata los datos personales de los usuarios de su sitio web.",
  alternates: {
    canonical: "https://operasas.com/legal/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Privacidad | Opera",
    description:
      "Conozca cómo ASEO Y MULTISERVICIOS OPERA SAS recopila, utiliza, protege y trata los datos personales.",
    url: "https://operasas.com/legal/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader
        title="Política de Privacidad"
        description="ASEO Y MULTISERVICIOS OPERA SAS reconocemos la importancia de proteger la información personal de nuestros clientes, proveedores, candidatos y visitantes. Esta política explica cómo recopilamos, utilizamos, almacenamos y protegemos los datos personales obtenidos a través de nuestro sitio web."
        lastUpdated="17 de julio de 2026"
      />

      <div className="mt-16 space-y-14">
        <LegalSection title="1. Responsable del tratamiento de los datos personales">
          <p>
            ASEO Y MULTISERVICIOS OPERA SAS es la responsable del tratamiento de los datos personales
            recopilados a través del sitio web <strong>operasas.com</strong>.
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
            <strong>Teléfono:</strong> +57 300 6227196
          </p>
        </LegalSection>

        <LegalSection title="2. Información que recopilamos">
          <p>
            Cuando un usuario se comunica con nosotros mediante el formulario de
            contacto del sitio web, podremos solicitar la siguiente
            información:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Nombre completo.</li>
            <li>Correo electrónico.</li>
            <li>Empresa.</li>
            <li>Número telefónico.</li>
            <li>Mensaje o consulta enviada.</li>
          </ul>

          <p>
            Asimismo, podremos recibir hojas de vida enviadas voluntariamente al
            correo electrónico corporativo con fines de participación en
            procesos de selección.
          </p>
        </LegalSection>

        <LegalSection title="3. Finalidades del tratamiento">
          <p>
            Los datos personales serán tratados únicamente para las siguientes
            finalidades:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Responder solicitudes realizadas por los usuarios.</li>
            <li>Brindar atención al cliente.</li>
            <li>Preparar y enviar cotizaciones.</li>
            <li>
              Establecer comunicaciones relacionadas con los servicios
              solicitados.
            </li>
            <li>Gestionar procesos de selección cuando se reciban hojas de vida.</li>
            <li>Cumplir obligaciones legales y regulatorias.</li>
          </ul>

          <p>
            ASEO Y MULTISERVICIOS OPERA SAS no utilizará la información personal para finalidades
            distintas a las aquí descritas sin la autorización previa del
            titular, salvo cuando la ley lo permita.
          </p>
        </LegalSection>

        <LegalSection title="4. Base legal del tratamiento">
          <p>
            El tratamiento de datos personales se realiza con fundamento en la
            autorización otorgada por el titular, así como en las disposiciones
            previstas en la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás
            normas que regulen la materia.
          </p>
        </LegalSection>

        <LegalSection title="5. Conservación de la información">
          <p>
            Conservaremos los datos personales únicamente durante el tiempo que
            resulte necesario para cumplir las finalidades descritas en esta
            política, atender obligaciones contractuales o legales y resolver
            posibles reclamaciones.
          </p>

          <p>
            Una vez la información deje de ser necesaria, será eliminada o
            anonimizada de forma segura cuando sea procedente.
          </p>
        </LegalSection>

        <LegalSection title="6. Compartición de información">
          <p>
            ASEO Y MULTISERVICIOS OPERA SAS no vende, alquila ni comercializa datos personales de sus
            usuarios.
          </p>

          <p>
            La información únicamente podrá ser compartida cuando exista una
            obligación legal, una orden emitida por autoridad competente o sea
            necesaria para atender un requerimiento judicial o administrativo.
          </p>
        </LegalSection>

        <LegalSection title="7. Seguridad de la información">
          <p>
            Implementamos medidas técnicas, administrativas y organizacionales
            destinadas a proteger la información personal frente a accesos no
            autorizados, pérdida, alteración o divulgación indebida.
          </p>

          <p>
            Nuestro sitio web utiliza conexiones seguras mediante certificado
            SSL (HTTPS) y es alojado en proveedores especializados que cumplen
            estándares adecuados de seguridad.
          </p>

          <p>
            Aunque adoptamos medidas razonables para proteger la información,
            ningún sistema de transmisión o almacenamiento electrónico puede
            garantizar una seguridad absoluta.
          </p>
        </LegalSection>

        <LegalSection title="8. Derechos de los titulares">
          <p>
            Los titulares de los datos personales podrán ejercer los derechos
            reconocidos por la legislación colombiana, entre ellos:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Conocer los datos personales tratados.</li>
            <li>Solicitar su actualización.</li>
            <li>Rectificar información inexacta.</li>
            <li>Solicitar la supresión de datos cuando sea procedente.</li>
            <li>Revocar la autorización otorgada.</li>
            <li>Presentar consultas y reclamaciones.</li>
          </ul>
        </LegalSection>

        <LegalSection title="9. Procedimiento para ejercer sus derechos">
          <p>
            Las consultas, solicitudes o reclamaciones relacionadas con el
            tratamiento de datos personales podrán enviarse al siguiente correo
            electrónico:
          </p>

          <p>
            <strong>multiserviciosoperasas@gmail.com</strong>
          </p>

          <p>
            ASEO Y MULTISERVICIOS OPERA SAS atenderá las solicitudes dentro de los plazos establecidos
            por la legislación colombiana aplicable.
          </p>
        </LegalSection>

        <LegalSection title="10. Hojas de vida">
          <p>
            Las hojas de vida remitidas voluntariamente por los candidatos serán
            utilizadas exclusivamente para procesos de selección presentes o
            futuros dentro de ASEO Y MULTISERVICIOS OPERA SAS.
          </p>

          <p>
            El envío de una hoja de vida implica la autorización para el
            tratamiento de la información contenida en ella conforme a la
            presente política.
          </p>
        </LegalSection>

        <LegalSection title="11. Enlaces externos">
          <p>
            Nuestro sitio web puede contener enlaces hacia plataformas de
            terceros, como WhatsApp. ASEO Y MULTISERVICIOS OPERA SAS no es responsable de las
            prácticas de privacidad, contenido o políticas aplicadas por dichos
            servicios externos, por lo que recomendamos consultar sus
            respectivas políticas antes de proporcionar información personal.
          </p>
        </LegalSection>

        <LegalSection title="12. Modificaciones de esta política">
          <p>
            ASEO Y MULTISERVICIOS OPERA SAS podrá modificar esta Política de Privacidad cuando resulte
            necesario para adaptarla a cambios legales, regulatorios,
            tecnológicos o relacionados con nuestros servicios.
          </p>

          <p>
            La versión vigente estará siempre disponible en este sitio web e
            indicará la fecha de su última actualización.
          </p>
        </LegalSection>

        <LegalSection title="13. Legislación aplicable">
          <p>
            Esta Política de Privacidad se interpreta y aplica conforme a la
            legislación de la República de Colombia, especialmente la Ley 1581
            de 2012, el Decreto 1377 de 2013 y las demás normas que regulen la
            protección de datos personales.
          </p>
        </LegalSection>
      </div>
    </>
  );
}