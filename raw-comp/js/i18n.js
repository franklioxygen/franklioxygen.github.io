(function (global) {
  const STORAGE_KEY = "rawcomp-home-lang";

  const strings = {
    en: {
      meta: {
        title: "RawComp — macOS multi-image comparison",
        description:
          "RawComp — compare 2–6 images side by side on macOS. RAW and standard formats, synced panes, professional compare modes, non-destructive adjustments, session export.",
      },
      a11y: {
        skip: "Skip to content",
        brand: "RawComp home",
        nav: "Primary",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        langSwitch: "Language",
      },
      nav: {
        features: "Features",
        compare: "Compare modes",
        formats: "Formats",
        getStarted: "Get started",
        github: "GitHub",
        download: "Download",
      },
      hero: {
        badgeMac: "macOS 14+",
        badgeNative: "Native Swift",
        title: "RawComp: See every difference between your images — side by side, pixel by pixel.",
        lead:
          "A focused macOS comparison tool for photographers and retouchers. Line up RAW files, exports, edits, and crops in 2–6 panes, sync movement, amplify subtle shifts with shared adjustments, and export your verdict.",
        ctaDownload: "Download release",
        ctaQuickStart: "Quick start",
        ctaSource: "View source",
        mockAlt: "RawComp window showing a multi-pane image comparison layout",
      },
      highlights: {
        h1Title: "Built for comparison",
        h1Body:
          "Not a catalog or editor — RawComp exists to answer one question: how do these images differ? Multi-pane layouts keep context in one window.",
        h2Title: "Sync or isolate panes",
        h2Body:
          "Link zoom and pan across every pane, or work freehand. Mark a synchronized highlight region to draw eyes to matching detail.",
        h3Title: "Fair, shared adjustments",
        h3Body:
          "Push exposure, tone, color, and compare modes equally across panes so differences stay honest while shadows, edges, and noise pop.",
      },
      features: {
        eyebrow: "Features",
        title: "Everything you need to judge image quality and edits.",
        lead:
          "From opening a folder of exports to saving a .rawcomp session — inspection, amplification, and export in one native app.",
        f1Title: "2 / 3 / 4 / 6-up layouts",
        f1Body: "Choose how many images to compare in a single window without juggling separate viewers.",
        f2Title: "RAW & standard formats",
        f2Body: "Open JPEG, PNG, HEIC, TIFF, and dozens of camera RAW extensions via macOS decoders.",
        f3Title: "Linked viewports",
        f3Body: "Free or synced pan/zoom/rotate with fit-to-window and 100% zoom for pixel-level review.",
        f4Title: "Compare modes",
        f4Body: "Clipping overlay, edge map, false color, noise emphasis, absolute difference, Delta E, blink, and wipe.",
        f5Title: "Shared inspector",
        f5Body: "Light, tone curve, color mixer, B&W, presence, noise, optics, and geometry — applied to all panes.",
        f6Title: "Histogram & readout",
        f6Body: "Per-pane histogram, clipping indicators, cursor pixel values, and file metadata.",
        f7Title: "Sessions & export",
        f7Body: "Save .rawcomp sessions with layout restoration; export the grid as PNG or TIFF from the current viewport.",
        f8Title: "8 UI languages",
        f8Body: "English, Chinese, Japanese, Korean, and more — switch anytime in the app.",
        f9Title: "Non-destructive",
        f9Body: "Adjustments preview on top of originals — your files on disk stay untouched.",
      },
      compare: {
        eyebrow: "Compare modes",
        title: "Professional tools when neutral view is not enough.",
        lead:
          "Some differences hide in shadows, micro-contrast, compression, or noise. RawComp's modes and shared sliders make them visible without favoring one pane.",
        li1: "Absolute difference and Delta E for color-accurate checks",
        li2: "Blink and wipe (2-up) for A/B style review",
        li3: "Edge map and false color for structure and exposure",
        li4: "Reference pane and analysis gain per mode",
        caption: "Screenshot from the RawComp comparison workspace",
      },
      formats: {
        eyebrow: "Supported formats",
        title: "Compressed images and broad RAW coverage.",
        lead:
          "RawComp recognizes common camera RAW extensions plus standard web and print formats. Decoding follows what macOS and Quick Look can provide on your machine.",
        chipRaw: "Camera RAW",
        chipDng: "DNG",
        chipCr: "CR2 / CR3",
        chipNef: "NEF / NRW",
        chipStd: "JPEG · PNG · HEIC · TIFF",
        noteBefore: "Full extension list in the ",
        readmeLink: "raw-comp README →",
      },
      quickStart: {
        eyebrow: "Quick start",
        title: "From download to first comparison in minutes.",
        s1Title: "Download",
        s1Body: "Grab the latest build from GitHub Releases (macOS 14 or newer).",
        s2Title: "From source",
        s2Body: "Clone the repo and run with Swift Package Manager or Xcode.",
        s3Title: "Compare",
        s3Body: "Open images, pick a layout, toggle synced panes, and use the inspector to amplify differences.",
        copy: "Copy",
        copied: "Copied",
        copyFailed: "Failed",
        copyCmd: "Copy command",
        copyCmds: "Copy commands",
        reqsTitle: "Requirements",
        req1Title: "macOS 14+",
        req1Body: "Apple Silicon or Intel",
        req2Title: "Xcode / Swift 6",
        req2Body: "only when building from source",
        req3Title: "Local decoders",
        req3Body: "some RAW files may open as Quick Look previews until LibRaw lands",
      },
      stack: {
        eyebrow: "Technology",
        title: "Native macOS, focused scope.",
        app: "Application",
        appBody: "Swift 6 · SwiftUI · AppKit bridges · SPM",
        focus: "Philosophy",
        focusBody: "Comparison-first — not a DAM, not a destructive RAW editor",
      },
      cta: {
        title: "Ready to compare your next shoot?",
        body: "Open source on GitHub. Download a release or build from source on your Mac.",
        download: "Download",
        star: "Star on GitHub",
      },
      footer: {
        license: "See repository license · ",
        docLink: "中文文档",
        docHref: "https://github.com/franklioxygen/raw-comp/blob/main/README.zh-CN.md",
        releases: "Releases",
      },
    },
    zh: {
      meta: {
        title: "RawComp — macOS 多图并排对比",
        description:
          "RawComp — 在 macOS 上并排对比 2–6 张图片。支持 RAW 与常见格式、联动视口、专业比较模式、非破坏性调整与会话导出。",
      },
      a11y: {
        skip: "跳到正文",
        brand: "RawComp 首页",
        nav: "主导航",
        menuOpen: "打开菜单",
        menuClose: "关闭菜单",
        langSwitch: "语言",
      },
      nav: {
        features: "功能",
        compare: "比较模式",
        formats: "格式",
        getStarted: "快速开始",
        github: "GitHub",
        download: "下载",
      },
      hero: {
        badgeMac: "macOS 14+",
        badgeNative: "原生 Swift",
        title: "RawComp：并排、逐像素看清每张图的差异。",
        lead:
          "面向摄影师与修图师的 macOS 对比工具。在 2–6 个窗格中排列 RAW、导出图与修图版本，同步移动视口，用统一调整放大细微差别，并导出结论。",
        ctaDownload: "下载发行版",
        ctaQuickStart: "快速开始",
        ctaSource: "查看源码",
        mockAlt: "RawComp 多窗格图片对比界面截图",
      },
      highlights: {
        h1Title: "为对比而生",
        h1Body: "不是图库也不是编辑器 — RawComp 只回答一个问题：这些图差在哪里？多窗格布局让上下文留在同一窗口。",
        h2Title: "联动或独立",
        h2Body: "可联动所有窗格的缩放与平移，也可各自操作。标记同步高亮区域以强调对应细节。",
        h3Title: "公平统一调整",
        h3Body: "对所有窗格施加相同的曝光、色调与比较模式，在放大阴影、边缘与噪点的同时保持对比公正。",
      },
      features: {
        eyebrow: "功能",
        title: "判断画质与修图差异所需的一切。",
        lead: "从打开导出文件夹到保存 .rawcomp 会话 — 检查、放大与导出都在同一原生应用中完成。",
        f1Title: "2 / 3 / 4 / 6 窗格",
        f1Body: "在单窗口中选择对比张数，无需在多个查看器间切换。",
        f2Title: "RAW 与标准格式",
        f2Body: "通过 macOS 解码器打开 JPEG、PNG、HEIC、TIFF 及多种相机 RAW 扩展名。",
        f3Title: "联动视口",
        f3Body: "自由或同步的平移/缩放/旋转，支持适应窗口与 100% 缩放。",
        f4Title: "比较模式",
        f4Body: "裁剪叠加、边缘图、伪彩色、噪点强调、绝对差值、Delta E、闪烁与擦除。",
        f5Title: "共享检查器",
        f5Body: "光线、色调曲线、混色器、黑白、细节、噪点、光学与几何 — 作用于所有窗格。",
        f6Title: "直方图与读数",
        f6Body: "每窗格直方图、裁剪指示、光标像素值与文件元数据。",
        f7Title: "会话与导出",
        f7Body: "保存 .rawcomp 会话并恢复布局；按当前视口将网格导出为 PNG 或 TIFF。",
        f8Title: "8 种界面语言",
        f8Body: "含中英文、日文、韩文等 — 可在应用内随时切换。",
        f9Title: "非破坏性",
        f9Body: "调整仅叠加预览，磁盘上的原文件不会被改写。",
      },
      compare: {
        eyebrow: "比较模式",
        title: "中性视图不够时，用专业工具看清差异。",
        lead: "有些差别藏在阴影、微对比、压缩或噪点里。RawComp 的模式与共享滑杆能在不偏袒某一窗格的前提下让它们显现。",
        li1: "绝对差值与 Delta E，用于色彩准确对比",
        li2: "闪烁与擦除（双窗格）用于 A/B 式审阅",
        li3: "边缘图与伪彩色突出结构与曝光",
        li4: "各模式可设参考窗格与分析增益",
        caption: "RawComp 对比工作区截图",
      },
      formats: {
        eyebrow: "支持格式",
        title: "压缩图像与广泛的 RAW 覆盖。",
        lead: "RawComp 识别常见相机 RAW 扩展名以及网络与印刷常用格式。解码能力取决于本机 macOS 与 Quick Look。",
        chipRaw: "相机 RAW",
        chipDng: "DNG",
        chipCr: "CR2 / CR3",
        chipNef: "NEF / NRW",
        chipStd: "JPEG · PNG · HEIC · TIFF",
        noteBefore: "完整扩展名列表见 ",
        readmeLink: "raw-comp README →",
      },
      quickStart: {
        eyebrow: "快速开始",
        title: "几分钟内从下载到首次对比。",
        s1Title: "下载",
        s1Body: "从 GitHub Releases 获取最新构建（需 macOS 14 或更高）。",
        s2Title: "从源码运行",
        s2Body: "克隆仓库，用 Swift Package Manager 或 Xcode 运行。",
        s3Title: "开始对比",
        s3Body: "打开图片、选择布局、切换联动视口，用检查器放大差异。",
        copy: "复制",
        copied: "已复制",
        copyFailed: "失败",
        copyCmd: "复制命令",
        copyCmds: "复制命令",
        reqsTitle: "环境要求",
        req1Title: "macOS 14+",
        req1Body: "Apple Silicon 或 Intel",
        req2Title: "Xcode / Swift 6",
        req2Body: "仅从源码构建时需要",
        req3Title: "本机解码",
        req3Body: "部分 RAW 在 LibRaw 接入前可能仅以 Quick Look 预览打开",
      },
      stack: {
        eyebrow: "技术",
        title: "原生 macOS，专注对比。",
        app: "应用",
        appBody: "Swift 6 · SwiftUI · AppKit 桥接 · SPM",
        focus: "定位",
        focusBody: "对比优先 — 不是 DAM，也不是破坏性 RAW 编辑器",
      },
      cta: {
        title: "准备好对比下一组素材了吗？",
        body: "GitHub 开源。下载发行版或在 Mac 上从源码构建。",
        download: "下载",
        star: "在 GitHub 标星",
      },
      footer: {
        license: "许可见仓库说明 · ",
        docLink: "English Doc",
        docHref: "https://github.com/franklioxygen/raw-comp/blob/main/README.md",
        releases: "发行版",
      },
    },
  };

  function getNested(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function detectLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch (e) {}
    const browser = (navigator.language || "").toLowerCase();
    return browser.startsWith("zh") ? "zh" : "en";
  }

  let currentLang = detectLang();

  function t(key) {
    return getNested(strings[currentLang], key) ?? getNested(strings.en, key) ?? "";
  }

  function applyLang(lang) {
    currentLang = lang === "zh" ? "zh" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {}

    const htmlLang = currentLang === "zh" ? "zh-CN" : "en";
    document.documentElement.lang = htmlLang;
    document.documentElement.dataset.lang = currentLang;

    document.title = t("meta.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value == null || value === "") return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      if (key) el.setAttribute("href", t(key));
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.dispatchEvent(new CustomEvent("rawcomp:langchange", { detail: { lang: currentLang } }));
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) applyLang(lang);
      });
    });
  }

  global.RawCompI18n = {
    t,
    applyLang,
    initLangToggle,
    getLang: () => currentLang,
    detectLang,
  };

  applyLang(currentLang);
})(window);
