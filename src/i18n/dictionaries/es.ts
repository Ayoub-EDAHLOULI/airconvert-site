import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirConvert — Conversor de archivos sin conexión, cero llamadas de red",
    siteDescription:
      "Un conversor de archivos totalmente sin conexión y local para imágenes, audio, documentos, hojas de cálculo y vídeo. Sin subidas, sin llamadas de red, sin dependencia de la nube — nunca.",
    formatsTitle: "Formatos — AirConvert",
    formatsDescription:
      "Explora todas las categorías de formatos que admite AirConvert — Imágenes, Audio, Documentos, Hojas de cálculo y Vídeo — y el motor que impulsa cada una.",
    securityTitle: "Seguridad y verificación — AirConvert",
    securityDescription:
      "Cómo se comprueba la promesa de cero llamadas de red de AirConvert: una auditoría estática del código, una comprobación del alcance de los sidecars y una prueba de firewall/VM a nivel del sistema, todas reproducibles por ti mismo.",
    faqTitle: "Preguntas frecuentes — AirConvert",
    faqDescription:
      "Respuestas sobre la garantía sin conexión de AirConvert, los formatos admitidos y la disponibilidad del código abierto.",
    aboutTitle: "Acerca de — AirConvert",
    aboutDescription:
      "Por qué existe AirConvert: creado para VM sin acceso a Internet, donde los conversores en la nube simplemente no son una opción.",
  },
  nav: {
    formats: "formatos",
    security: "seguridad",
    faq: "faq",
    about: "acerca de",
    download: "descargar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    lightMode: "Cambiar a modo claro",
    darkMode: "Cambiar a modo oscuro",
    changeLanguage: "Cambiar idioma",
    scrollToTop: "Volver arriba",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "sin subidas · sin telemetría · sin llamadas de red",
    title: "Convierte archivos. Sin salir de tu equipo.",
    body: "AirConvert convierte imágenes, audio, documentos, hojas de cálculo y vídeo totalmente en tu dispositivo — sin subidas, sin servicios en la nube, sin ninguna llamada de red. Elige un archivo, elige un formato, listo.",
    downloadWindows: "descargar para windows",
    releaseNotes: "notas de la versión",
    deployNote: "¿despliegue mediante Group Policy o SCCM?",
    grabMsi: "descarga el .msi",
    msiSuffix: "en su lugar",
    terminalComment1: "# bloquear todo el tráfico saliente",
    terminalComment2: "# cada conversión sigue funcionando",
  },
  whyOffline: {
    heading: "Por qué importa trabajar sin conexión",
    subheading:
      "Lo creé porque en mi trabajo diario uso VM sin acceso a Internet y necesitaba un conversor que funcionara de verdad sin ninguna conexión.",
    points: [
      {
        num: "01",
        title: "Los equipos bloqueados no pueden llegar a un conversor en la nube",
        body: "Las VM aisladas o con Internet restringido son habituales en trabajos centrados en la seguridad y el control de acceso. Allí, un Convertio o CloudConvert en el navegador simplemente no es accesible.",
      },
      {
        num: "02",
        title: "Subir un archivo es un problema de privacidad, no solo una molestia",
        body: "Los conversores en la nube suben tu archivo a un servidor, lo convierten allí y te lo devuelven. Con documentos sensibles, ese ida y vuelta es el verdadero problema — no solo la dependencia de la red.",
      },
      {
        num: "03",
        title: "Sin dependencia de la red, punto",
        body: "AirConvert hace cada conversión en el disco, en tu equipo, sin ninguna actividad de red. Es una afirmación comprobable, no un eslogan.",
      },
    ],
    seeVerification: "→ mira cómo se verifica",
  },
  howItWorks: {
    heading: "Cómo funciona",
    steps: [
      {
        num: "01",
        title: "Elige una categoría",
        body: "Imágenes, Audio, Documentos, Hojas de cálculo o Vídeo — cada una con su propia zona de arrastrar y soltar y su selector de formato.",
      },
      {
        num: "02",
        title: "Suelta tus archivos, elige un formato",
        body: "Conversión por lotes con el progreso de cada archivo en tiempo real, y un botón Cancelar por si cambias de opinión a mitad del lote.",
      },
      {
        num: "03",
        title: "Compruébalo tú mismo",
        body: "Bloquea la aplicación en el firewall y sigue convirtiendo — nada en el proceso toca la red.",
      },
    ],
    browseFormats: "→ ver todos los formatos",
  },
  formats: {
    heading: "Cinco categorías, una sola aplicación",
    subheading:
      "Todo se ejecuta localmente, en la misma ventana. Imágenes y Hojas de cálculo son Rust puro; Audio, Documentos y Vídeo usan binarios sidecar incluidos (FFmpeg, Pandoc) en lugar de un servicio en la nube.",
    categories: {
      images: {
        name: "Imágenes",
        description:
          "jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi y avif (solo salida) — con redimensionado opcional a un tamaño máximo y control de calidad JPG/WebP.",
        engine: "Rust puro (image, resvg) — sin binarios externos",
      },
      audio: {
        name: "Audio",
        description:
          "mp3, wav, flac, ogg, m4a, aac, opus y wma mediante un sidecar FFmpeg incluido — el mismo binario que usa Vídeo.",
        engine: "Sidecar FFmpeg incluido",
      },
      documents: {
        name: "Documentos",
        description:
          "md, txt, html, rtf, odt y docx mediante un sidecar Pandoc incluido. Conversión de contenido — no un motor de maquetación de fidelidad total.",
        engine: "Sidecar Pandoc incluido",
      },
      spreadsheets: {
        name: "Hojas de cálculo",
        description:
          "csv, xlsx, xls y ods como entrada; csv y xlsx como salida. Solo la primera hoja y solo los valores — sin fórmulas, macros ni formato.",
        engine: "Rust puro (calamine, rust_xlsxwriter, csv)",
        formatsNote: "(solo entrada)",
      },
      video: {
        name: "Vídeo",
        description:
          "mp4, mov, avi, webm y gif, además de mkv/flv/wmv como entradas adicionales — incluida una codificación GIF en dos pasadas basada en paleta para un color decente.",
        engine: "Sidecar FFmpeg incluido",
      },
    },
  },
  verification: {
    heading: "Verificable, no solo prometido",
    subheading:
      "«Cero llamadas de red» es una afirmación comprobable, no un lema de marketing. Así es exactamente como se comprueba — reprodúcelo tú mismo si no te fías de nuestra palabra.",
    checks: [
      {
        title: "Auditoría estática del código",
        body: "Busca en todo el código fetch/XMLHttpRequest/WebSocket y primitivas de red del lado de Rust (reqwest, TcpStream, UdpSocket). Ningún plugin HTTP es siquiera una dependencia — no hay ninguna excepción que justificar.",
      },
      {
        title: "Comprobación del alcance de los sidecars",
        body: "Audio, Documentos y Vídeo recurren a binarios incluidos (FFmpeg, Pandoc) en lugar de a un crate de Rust. El permiso de ejecución está limitado exactamente a esos dos sidecars con nombre, nada más.",
      },
      {
        title: "Bloqueo en el firewall del sistema",
        body: "Bloquea todo el tráfico saliente del binario empaquetado en el Firewall de Windows y confirma que cada conversión — imágenes, audio, vídeo, documentos, hojas de cálculo — sigue funcionando por completo.",
      },
    ],
    noMatches: "(sin coincidencias)",
    terminalSuccess: "✓ cada conversión sigue funcionando con normalidad",
    statusLabel: "Estado actual:",
    statusBody:
      "la auditoría estática anterior se ha ejecutado sobre todo el código sin coincidencias inesperadas. La prueba de firewall/VM es un paso manual sobre una versión firmada — aún no realizada. Considera cualquier promesa sin conexión como no verificada hasta que se actualice esta línea.",
  },
  faq: {
    heading: "Preguntas frecuentes",
    questions: [
      {
        question: "¿De verdad AirConvert no hace ninguna llamada de red?",
        answer:
          "Sí, sin excepciones — a diferencia de algunas aplicaciones «offline-first», no hay ninguna dependencia de un plugin HTTP, y ninguna función tiene motivo para hacer una petición de red. Consulta la página de Seguridad para ver exactamente cómo se comprueba.",
      },
      {
        question: "¿Necesito conexión a Internet para instalarlo o usarlo?",
        answer:
          "No. Una vez compilada o instalada la aplicación, cada conversión funciona totalmente sin conexión — sin cuenta, sin servidor de licencias, sin comprobación de actualizaciones.",
      },
      {
        question: "¿Qué formatos admite?",
        answer:
          "Imágenes (jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, avif), Audio (mp3, wav, flac, ogg, m4a, aac, opus, wma), Documentos (md, txt, html, rtf, odt, docx), Hojas de cálculo (csv, xlsx, xls, ods) y Vídeo (mp4, mov, avi, webm, gif). Consulta la página de Formatos para ver el detalle completo.",
      },
      {
        question: "¿Puede convertir a PDF?",
        answer:
          "Por ahora no. La exportación a PDF se estudió durante la fase de Documentos pero se descartó — la opción de motor LaTeX sin conexión ligero (Tectonic) resultó requerir o bien una dependencia de red activa o bien un archivo de paquetes incluido mucho más grande, y ninguna de las dos encajaba con la restricción de ser sin conexión por diseño. Podría retomarse con otro enfoque.",
      },
      {
        question: "¿Es de código abierto?",
        answer:
          "Sí — todo el código fuente está en GitHub. Puedes leerlo, auditarlo o compilarlo tú mismo en lugar de confiar en un binario empaquetado.",
      },
      {
        question: "¿Qué plataformas admite?",
        answer:
          "Windows, desarrollado con Tauri. Es el objetivo principal hoy; el código no descarta otras plataformas en el futuro.",
      },
    ],
  },
  about: {
    tag: "# acerca de",
    heading: "Creado por alguien que lo necesitaba primero",
    paragraphs: [
      "Soy Ayoub, ingeniero de software y en mi trabajo diario uso VM sin acceso a Internet. Los conversores en la nube como Convertio o CloudConvert suben tu archivo a un servidor, lo convierten allí y te lo devuelven — algo inviable en un equipo bloqueado, y un problema real de privacidad para archivos sensibles incluso cuando no lo está.",
      "AirConvert hace cada conversión en el disco, en tu equipo, sin ninguna actividad de red. Empezó con las imágenes — Rust puro, sin binarios externos — y creció una categoría de formatos cada vez: audio y vídeo mediante un sidecar FFmpeg incluido, documentos mediante Pandoc, hojas de cálculo de nuevo en Rust puro. Cada fase se publicó y se verificó antes de empezar la siguiente.",
    ],
    airToolkitBefore: "Es el mismo instinto que hay detrás de",
    airToolkitAfter:
      ", una caja de herramientas sin conexión para desarrolladores que creé antes — sin nube, sin comunicaciones ocultas, con la garantía de cero llamadas de red tratada como una restricción de ingeniería real y no como un eslogan.",
    knowMore: "saber más",
    sourceGithub: "código fuente en github →",
    howVerified: "cómo se verifica →",
  },
};

export default dict;
