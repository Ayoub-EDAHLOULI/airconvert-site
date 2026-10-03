import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirConvert — Convertisseur de fichiers hors ligne, zéro appel réseau",
    siteDescription:
      "Un convertisseur de fichiers entièrement hors ligne et local pour les images, l'audio, les documents, les tableurs et la vidéo. Aucun envoi, aucun appel réseau, aucune dépendance au cloud — jamais.",
    formatsTitle: "Formats — AirConvert",
    formatsDescription:
      "Parcourez toutes les catégories de formats prises en charge par AirConvert — Images, Audio, Documents, Tableurs et Vidéo — et le moteur derrière chacune.",
    securityTitle: "Sécurité et vérification — AirConvert",
    securityDescription:
      "Comment la promesse « zéro appel réseau » d'AirConvert est vérifiée : audit statique du code, contrôle du périmètre des sidecars et test pare-feu/VM au niveau du système, tous reproductibles par vous-même.",
    faqTitle: "FAQ — AirConvert",
    faqDescription:
      "Réponses sur la garantie hors ligne d'AirConvert, les formats pris en charge et la disponibilité du code source.",
    aboutTitle: "À propos — AirConvert",
    aboutDescription:
      "Pourquoi AirConvert existe : conçu pour les VM sans accès à Internet, où les convertisseurs en ligne ne sont tout simplement pas une option.",
  },
  nav: {
    formats: "formats",
    security: "sécurité",
    faq: "faq",
    about: "à propos",
    download: "télécharger",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    lightMode: "Passer en mode clair",
    darkMode: "Passer en mode sombre",
    changeLanguage: "Changer de langue",
    scrollToTop: "Revenir en haut",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "aucun envoi · aucune télémétrie · aucun appel réseau",
    title: "Convertissez vos fichiers. Sans quitter votre machine.",
    body: "AirConvert convertit images, audio, documents, tableurs et vidéos entièrement sur votre appareil — aucun envoi, aucun service cloud, aucun appel réseau d'aucune sorte. Choisissez un fichier, choisissez un format, c'est fait.",
    downloadWindows: "télécharger pour windows",
    releaseNotes: "notes de version",
    deployNote: "déploiement via Group Policy ou SCCM ?",
    grabMsi: "prenez le .msi",
    msiSuffix: "à la place",
    terminalComment1: "# bloquer tout le trafic sortant",
    terminalComment2: "# chaque conversion fonctionne toujours",
  },
  whyOffline: {
    heading: "Pourquoi le hors ligne compte",
    subheading:
      "Créé parce que je travaille sur des VM sans accès à Internet dans mon travail quotidien et qu'il me fallait un convertisseur qui fonctionne vraiment sans aucune connexion.",
    points: [
      {
        num: "01",
        title: "Les machines verrouillées ne peuvent pas joindre un convertisseur en ligne",
        body: "Les VM isolées ou à accès Internet restreint sont courantes dans les métiers axés sur la sécurité et le contrôle d'accès. Un Convertio ou un CloudConvert dans le navigateur y est tout simplement inaccessible.",
      },
      {
        num: "02",
        title: "Envoyer un fichier pose un problème de confidentialité, pas seulement de confort",
        body: "Les convertisseurs en ligne envoient votre fichier sur un serveur, le convertissent là-bas, puis vous le renvoient. Pour des documents sensibles, c'est cet aller-retour le vrai problème — pas seulement la dépendance au réseau.",
      },
      {
        num: "03",
        title: "Aucune dépendance au réseau, point",
        body: "AirConvert effectue chaque conversion sur le disque, sur votre machine, sans aucune activité réseau. C'est une affirmation vérifiable, pas un slogan.",
      },
    ],
    seeVerification: "→ voir comment c'est vérifié",
  },
  howItWorks: {
    heading: "Comment ça marche",
    steps: [
      {
        num: "01",
        title: "Choisissez une catégorie",
        body: "Images, Audio, Documents, Tableurs ou Vidéo — chacune avec sa propre zone de glisser-déposer et son sélecteur de format.",
      },
      {
        num: "02",
        title: "Déposez vos fichiers, choisissez un format",
        body: "Conversion par lots avec la progression de chaque fichier en direct, et un bouton Annuler si vous changez d'avis en cours de route.",
      },
      {
        num: "03",
        title: "Vérifiez par vous-même",
        body: "Bloquez l'application au pare-feu et continuez à convertir — rien dans le traitement ne touche au réseau.",
      },
    ],
    browseFormats: "→ voir tous les formats",
  },
  formats: {
    heading: "Cinq catégories, une seule application",
    subheading:
      "Tout s'exécute localement, dans la même fenêtre. Images et Tableurs sont en pur Rust ; Audio, Documents et Vidéo utilisent des binaires sidecar intégrés (FFmpeg, Pandoc) plutôt qu'un service cloud.",
    categories: {
      images: {
        name: "Images",
        description:
          "jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi et avif (en sortie uniquement) — avec redimensionnement optionnel à une taille maximale et réglage de la qualité JPG/WebP.",
        engine: "Pur Rust (image, resvg) — aucun binaire externe",
      },
      audio: {
        name: "Audio",
        description:
          "mp3, wav, flac, ogg, m4a, aac, opus et wma via un sidecar FFmpeg intégré — le même binaire que celui utilisé pour la Vidéo.",
        engine: "Sidecar FFmpeg intégré",
      },
      documents: {
        name: "Documents",
        description:
          "md, txt, html, rtf, odt et docx via un sidecar Pandoc intégré. Conversion du contenu — pas un moteur de mise en page fidèle au pixel près.",
        engine: "Sidecar Pandoc intégré",
      },
      spreadsheets: {
        name: "Tableurs",
        description:
          "csv, xlsx, xls et ods en entrée ; csv et xlsx en sortie. Première feuille uniquement, valeurs uniquement — ni formules, ni macros, ni mise en forme.",
        engine: "Pur Rust (calamine, rust_xlsxwriter, csv)",
        formatsNote: "(entrée uniquement)",
      },
      video: {
        name: "Vidéo",
        description:
          "mp4, mov, avi, webm et gif, plus mkv/flv/wmv en entrée — avec un encodage GIF en deux passes basé sur une palette pour des couleurs correctes.",
        engine: "Sidecar FFmpeg intégré",
      },
    },
  },
  verification: {
    heading: "Vérifiable, pas seulement affirmé",
    subheading:
      "« Zéro appel réseau » est une affirmation vérifiable, pas un argument marketing. Voici exactement comment c'est vérifié — reproduisez-le vous-même si vous ne nous croyez pas sur parole.",
    checks: [
      {
        title: "Audit statique du code",
        body: "Recherchez dans tout le code source fetch/XMLHttpRequest/WebSocket et les primitives réseau côté Rust (reqwest, TcpStream, UdpSocket). Aucun plugin HTTP n'est même une dépendance — il n'y a aucune exception à prévoir.",
      },
      {
        title: "Contrôle du périmètre des sidecars",
        body: "Audio, Documents et Vidéo font appel à des binaires intégrés (FFmpeg, Pandoc) plutôt qu'à une crate Rust. L'autorisation d'exécution est limitée exactement à ces deux sidecars nommés, rien d'autre.",
      },
      {
        title: "Blocage au pare-feu du système",
        body: "Bloquez tout le trafic sortant du binaire empaqueté dans le pare-feu Windows et vérifiez que chaque conversion — images, audio, vidéo, documents, tableurs — continue de fonctionner pleinement.",
      },
    ],
    noMatches: "(aucun résultat)",
    terminalSuccess: "✓ chaque conversion continue de fonctionner normalement",
    statusLabel: "État actuel :",
    statusBody:
      "l'audit statique ci-dessus a été effectué sur l'ensemble du code sans résultat inattendu. Le test pare-feu/VM est une étape manuelle sur une version signée — pas encore réalisée. Considérez toute promesse hors ligne comme non vérifiée tant que cette ligne n'a pas été mise à jour.",
  },
  faq: {
    heading: "Questions fréquentes",
    questions: [
      {
        question: "AirConvert fait-il vraiment zéro appel réseau ?",
        answer:
          "Oui, sans aucune exception — contrairement à certaines applications « offline-first », il n'y a aucune dépendance à un plugin HTTP, et aucune fonctionnalité n'a de raison d'effectuer une requête réseau. Consultez la page Sécurité pour voir exactement comment c'est vérifié.",
      },
      {
        question: "Ai-je besoin d'une connexion Internet pour l'installer ou l'utiliser ?",
        answer:
          "Non. Une fois l'application compilée ou installée, chaque conversion fonctionne entièrement hors ligne — aucun compte, aucun serveur de licence, aucune vérification de mise à jour.",
      },
      {
        question: "Quels formats sont pris en charge ?",
        answer:
          "Images (jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, avif), Audio (mp3, wav, flac, ogg, m4a, aac, opus, wma), Documents (md, txt, html, rtf, odt, docx), Tableurs (csv, xlsx, xls, ods) et Vidéo (mp4, mov, avi, webm, gif). Consultez la page Formats pour le détail complet.",
      },
      {
        question: "Peut-il convertir en PDF ?",
        answer:
          "Pas pour le moment. L'export PDF a été étudié pendant la phase Documents puis abandonné — l'option de moteur LaTeX hors ligne légère (Tectonic) s'est avérée nécessiter soit une dépendance réseau active, soit une archive de paquets intégrée beaucoup plus lourde, deux options incompatibles avec la contrainte du hors ligne par conception. Ce point pourra être revu avec une autre approche.",
      },
      {
        question: "Est-il open source ?",
        answer:
          "Oui — tout le code source est sur GitHub. Vous pouvez le lire, l'auditer ou le compiler vous-même plutôt que de faire confiance à un binaire empaqueté.",
      },
      {
        question: "Quelles plateformes sont prises en charge ?",
        answer:
          "Windows, avec Tauri. C'est la cible principale aujourd'hui ; le code n'exclut pas d'autres plateformes plus tard.",
      },
    ],
  },
  about: {
    tag: "# à propos",
    heading: "Créé par quelqu'un qui en avait besoin en premier",
    paragraphs: [
      "Je suis Ayoub, ingénieur logiciel travaillant au quotidien sur des VM sans accès à Internet. Les convertisseurs en ligne comme Convertio ou CloudConvert envoient votre fichier sur un serveur, le convertissent là-bas, puis vous le renvoient — impossible sur une machine verrouillée, et un vrai problème de confidentialité pour les fichiers sensibles même quand ce n'est pas le cas.",
      "AirConvert effectue chaque conversion sur le disque, sur votre machine, sans aucune activité réseau. Il a commencé par les images — en pur Rust, sans binaire externe — puis s'est étendu une catégorie de formats à la fois : l'audio et la vidéo via un sidecar FFmpeg intégré, les documents via Pandoc, les tableurs de nouveau en pur Rust. Chaque phase a été livrée et vérifiée avant que la suivante ne commence.",
    ],
    airToolkitBefore: "C'est le même réflexe que derrière",
    airToolkitAfter:
      ", une boîte à outils hors ligne pour développeurs que j'ai créée auparavant — pas de cloud, aucune communication cachée, la garantie zéro appel réseau traitée comme une vraie contrainte d'ingénierie plutôt qu'un slogan.",
    knowMore: "en savoir plus",
    sourceGithub: "code source sur github →",
    howVerified: "comment c'est vérifié →",
  },
};

export default dict;
