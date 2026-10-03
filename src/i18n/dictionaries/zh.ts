import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirConvert — 离线文件转换器，零网络请求",
    siteDescription:
      "一款完全离线、本地优先的文件转换器，支持图片、音频、文档、电子表格和视频。不上传、不发起网络请求、不依赖云服务——永远如此。",
    formatsTitle: "格式 — AirConvert",
    formatsDescription:
      "浏览 AirConvert 支持的所有格式类别——图片、音频、文档、电子表格和视频——以及每一类背后的引擎。",
    securityTitle: "安全与验证 — AirConvert",
    securityDescription:
      "AirConvert 的零网络请求承诺如何被验证：静态代码审计、Sidecar 范围检查以及系统级防火墙/虚拟机测试，你都可以亲自复现。",
    faqTitle: "常见问题 — AirConvert",
    faqDescription: "关于 AirConvert 离线保证、支持的格式以及开源情况的解答。",
    aboutTitle: "关于 — AirConvert",
    aboutDescription:
      "AirConvert 为何而生：专为无法访问互联网的虚拟机打造，在那里云端转换器根本无法使用。",
  },
  nav: {
    formats: "格式",
    security: "安全",
    faq: "常见问题",
    about: "关于",
    download: "下载",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    lightMode: "切换到浅色模式",
    darkMode: "切换到深色模式",
    changeLanguage: "切换语言",
    scrollToTop: "回到顶部",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "不上传 · 无遥测 · 零网络请求",
    title: "转换文件，数据从不离开你的电脑。",
    body: "AirConvert 完全在本机上转换图片、音频、文档、电子表格和视频——不上传、不使用云服务、不发起任何网络请求。选择文件，选择格式，搞定。",
    downloadWindows: "下载 windows 版",
    releaseNotes: "发行说明",
    deployNote: "通过组策略或 SCCM 部署？",
    grabMsi: "下载 .msi",
    msiSuffix: "安装包",
    terminalComment1: "# 阻止所有出站流量",
    terminalComment2: "# 所有转换依然正常",
  },
  whyOffline: {
    heading: "为什么离线很重要",
    subheading:
      "我在日常工作中使用无法联网的虚拟机，需要一个在完全断网时也能真正工作的转换器，于是有了它。",
    points: [
      {
        num: "01",
        title: "受限的机器无法访问云端转换器",
        body: "在注重安全和访问控制的工作中，物理隔离或限制联网的虚拟机十分常见。在那里，基于浏览器的 Convertio 或 CloudConvert 根本无法访问。",
      },
      {
        num: "02",
        title: "上传文件是隐私问题，而不只是麻烦",
        body: "云端转换器会把你的文件上传到服务器，在那里转换后再发回给你。对于敏感文档，这一来一回本身才是真正的问题——而不只是对网络的依赖。",
      },
      {
        num: "03",
        title: "不依赖网络，仅此而已",
        body: "AirConvert 的每一次转换都在你电脑的本地磁盘上完成，完全没有网络活动。这是一个可验证的事实，而不是宣传口号。",
      },
    ],
    seeVerification: "→ 查看验证方式",
  },
  howItWorks: {
    heading: "使用方式",
    steps: [
      {
        num: "01",
        title: "选择类别",
        body: "图片、音频、文档、电子表格或视频——每个类别都有自己的拖放区域和格式选择器。",
      },
      {
        num: "02",
        title: "拖入文件，选择格式",
        body: "批量转换，实时显示每个文件的进度；如果中途改变主意，还可以点击取消。",
      },
      {
        num: "03",
        title: "亲自验证",
        body: "在防火墙中阻止该应用后继续转换——整个流程中没有任何环节会接触网络。",
      },
    ],
    browseFormats: "→ 浏览全部格式",
  },
  formats: {
    heading: "五大类别，一个应用",
    subheading:
      "一切都在本地、在同一个窗口中运行。图片和电子表格使用纯 Rust 实现；音频、文档和视频使用内置的 Sidecar 二进制程序（FFmpeg、Pandoc），而非云服务。",
    categories: {
      images: {
        name: "图片",
        description:
          "jpg、png、webp、gif、bmp、tiff、svg、ico、tga、pnm、qoi 和 avif（仅输出）——支持可选的最大尺寸缩放以及 JPG/WebP 质量调节。",
        engine: "纯 Rust（image、resvg）——无外部二进制程序",
      },
      audio: {
        name: "音频",
        description:
          "通过内置的 FFmpeg Sidecar 支持 mp3、wav、flac、ogg、m4a、aac、opus 和 wma——与视频使用的是同一个二进制程序。",
        engine: "内置 FFmpeg Sidecar",
      },
      documents: {
        name: "文档",
        description:
          "通过内置的 Pandoc Sidecar 支持 md、txt、html、rtf、odt 和 docx。这是内容转换——而不是完全保真的排版引擎。",
        engine: "内置 Pandoc Sidecar",
      },
      spreadsheets: {
        name: "电子表格",
        description:
          "输入支持 csv、xlsx、xls 和 ods；输出支持 csv 和 xlsx。仅处理第一个工作表，仅保留数据值——不含公式、宏或样式。",
        engine: "纯 Rust（calamine、rust_xlsxwriter、csv）",
        formatsNote: "（仅输入）",
      },
      video: {
        name: "视频",
        description:
          "支持 mp4、mov、avi、webm 和 gif，另可输入 mkv/flv/wmv——包括基于调色板的两遍 GIF 编码，以获得不错的色彩质量。",
        engine: "内置 FFmpeg Sidecar",
      },
    },
  },
  verification: {
    heading: "可验证，而不只是声称",
    subheading:
      "“零网络请求”是可验证的事实，而不是营销话术。以下就是具体的验证方法——如果你不想只听我们说，可以亲自复现。",
    checks: [
      {
        title: "静态代码审计",
        body: "在全部源码中搜索 fetch/XMLHttpRequest/WebSocket 以及 Rust 端的网络原语（reqwest、TcpStream、UdpSocket）。项目甚至不依赖任何 HTTP 插件——不存在需要例外处理的情况。",
      },
      {
        title: "Sidecar 范围检查",
        body: "音频、文档和视频调用的是内置的二进制程序（FFmpeg、Pandoc），而不是 Rust crate。执行权限被严格限定为这两个指定的 Sidecar，别无其他。",
      },
      {
        title: "系统级防火墙阻断",
        body: "在 Windows 防火墙中阻止打包后程序的所有出站流量，并确认每一种转换——图片、音频、视频、文档、电子表格——依然完全正常。",
      },
    ],
    noMatches: "(无匹配结果)",
    terminalSuccess: "✓ 所有转换均正常运行",
    statusLabel: "当前状态：",
    statusBody:
      "上述静态审计已在完整代码库上运行，未发现任何意外匹配。防火墙/虚拟机测试需要在签名的正式版本上手动进行——尚未执行。在此说明更新之前，请将任何离线声明视为未经验证。",
  },
  faq: {
    heading: "常见问题",
    questions: [
      {
        question: "AirConvert 真的完全不发起网络请求吗？",
        answer:
          "是的，没有任何例外——不同于某些“离线优先”应用，它完全不依赖 HTTP 插件，也没有任何功能需要发起网络请求。具体验证方式请查看安全页面。",
      },
      {
        question: "安装或运行它需要联网吗？",
        answer:
          "不需要。应用构建或安装完成后，所有转换都可以完全离线进行——无需账号、无许可证服务器、无更新检查。",
      },
      {
        question: "支持哪些格式？",
        answer:
          "图片（jpg、png、webp、gif、bmp、tiff、svg、ico、tga、pnm、qoi、avif）、音频（mp3、wav、flac、ogg、m4a、aac、opus、wma）、文档（md、txt、html、rtf、odt、docx）、电子表格（csv、xlsx、xls、ods）以及视频（mp4、mov、avi、webm、gif）。完整说明请查看格式页面。",
      },
      {
        question: "可以转换为 PDF 吗？",
        answer:
          "目前不行。在文档阶段曾研究过 PDF 导出，但最终放弃了——轻量级的离线 LaTeX 引擎方案（Tectonic）要么需要实时网络依赖，要么需要捆绑大得多的软件包归档，两者都不符合“设计即离线”的约束。之后可能会用其他方式重新考虑。",
      },
      {
        question: "它是开源的吗？",
        answer:
          "是的——完整源码都在 GitHub 上。你可以阅读、审计，或者自行构建，而不必信任打包好的二进制程序。",
      },
      {
        question: "支持哪些平台？",
        answer:
          "Windows，基于 Tauri 构建。这是目前的主要目标平台；代码本身并不排除将来支持其他平台。",
      },
    ],
  },
  about: {
    tag: "# 关于",
    heading: "由最先需要它的人打造",
    paragraphs: [
      "我是 Ayoub，一名软件工程师，日常工作在无法联网的虚拟机上进行。像 Convertio 或 CloudConvert 这样的云端转换器会把你的文件上传到服务器，在那里转换后再发回——这在受限的机器上根本行不通；即使能用，对敏感文件来说也是真正的隐私隐患。",
      "AirConvert 的每一次转换都在你电脑的本地磁盘上完成，完全没有网络活动。它从图片开始——纯 Rust，无外部二进制程序——然后一次增加一个格式类别：音频和视频通过内置的 FFmpeg Sidecar，文档通过 Pandoc，电子表格又回到纯 Rust。每个阶段都在发布并验证可用之后，才开始下一个阶段。",
    ],
    airToolkitBefore: "这与我之前打造的",
    airToolkitAfter:
      " 出于同样的理念——那是一个离线开发者工具箱：不用云、不回传数据，把零网络请求的保证当作真正的工程约束，而不是一句口号。",
    knowMore: "了解更多",
    sourceGithub: "github 上的源码 →",
    howVerified: "验证方式 →",
  },
};

export default dict;
