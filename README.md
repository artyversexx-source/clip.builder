# clip.builder
make full polish production new workflow and merge all systems to One Prodtion.

<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <title>ClipForge PRO — จีจี้ ล้อซิ่ง</title>
    <meta name="theme-color" content="#0a0a0f" />
    <link
      href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700;800;900&family=Sarabun:wght@400;700&family=Syne:wght@700;800&family=Bebas+Neue&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:wght@700;900&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --lime: #c8ff00;
        --pink: #ff2060;
        --cyan: #00f0ff;
        --violet: #a855f7;
        --amber: #ffaa00;
        --err: #ff4444;
        --bg: #08080f;
        --panel: #11111a;
        --panel2: #17172200;
        --card: #1c1c2a;
        --border: rgba(255, 255, 255, 0.07);
        --text: #eeeefc;
        --muted: #7a7a90;
        --faint: #3a3a50;
        --r: 10px;
        --r-sm: 6px;
        --r-lg: 16px;
        --ease: cubic-bezier(0.16, 1, 0.3, 1);
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body {
        height: 100%;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
      }
      body {
        background: var(--bg);
        color: var(--text);
        font-family: "DM Sans", "Kanit", sans-serif;
        display: flex;
        flex-direction: column;
      }
      :focus-visible {
        outline: 2px solid var(--cyan);
        outline-offset: 2px;
      }
      button,
      input,
      select,
      textarea {
        font-family: inherit;
      }
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }
      }

      /* ── TOPBAR ── */
      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        height: 50px;
        background: var(--panel);
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
        z-index: 10;
        gap: 8px;
      }
      .topbar-left {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }
      .logo {
        font-family: "Bebas Neue", "Syne", sans-serif;
        font-size: 20px;
        letter-spacing: 1.5px;
        background: linear-gradient(120deg, var(--lime), var(--cyan));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      }
      .logo sub {
        font-size: 10px;
        background: var(--pink);
        -webkit-text-fill-color: #fff;
        padding: 1px 5px;
        border-radius: 3px;
        letter-spacing: 0.5px;
        vertical-align: middle;
      }
      .tb-div {
        width: 1px;
        height: 22px;
        background: var(--border);
        flex-shrink: 0;
      }
      .tb-btn {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border);
        color: var(--muted);
        padding: 5px 12px;
        border-radius: var(--r-sm);
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.18s var(--ease);
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .tb-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
        border-color: rgba(255, 255, 255, 0.14);
      }
      .tb-btn.primary {
        background: var(--lime);
        color: #000;
        border-color: var(--lime);
      }
      .tb-btn.primary:hover {
        background: #b4e500;
      }
      .tb-btn.accent {
        background: var(--pink);
        color: #fff;
        border-color: var(--pink);
      }
      .tb-btn.accent:hover {
        background: #e01d56;
      }
      .tb-btn:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }
      .topbar-right {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }

      /* ── WORKSPACE ── */
      .workspace {
        display: flex;
        flex: 1;
        min-height: 0;
        overflow: hidden;
      }

      /* ── LEFT TOOLBAR ── */
      .ltb {
        width: 52px;
        background: var(--panel);
        border-right: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 0;
        gap: 2px;
        flex-shrink: 0;
      }
      .lt-icon {
        width: 38px;
        height: 38px;
        border-radius: var(--r-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.18s var(--ease);
        color: var(--muted);
        border: none;
        background: transparent;
        position: relative;
      }
      .lt-icon:hover {
        background: rgba(255, 255, 255, 0.06);
        color: var(--text);
      }
      .lt-icon.active {
        background: rgba(200, 255, 0, 0.12);
        color: var(--lime);
      }
      .lt-icon[title]:hover::after {
        content: attr(title);
        position: absolute;
        left: 46px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--card);
        color: var(--text);
        padding: 4px 10px;
        border-radius: var(--r-sm);
        font-size: 10px;
        white-space: nowrap;
        border: 1px solid var(--border);
        z-index: 100;
        font-family: "JetBrains Mono", monospace;
      }

      /* ── EDITOR CENTER ── */
      .editor-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
        overflow: hidden;
      }

      /* ── PREVIEW ── */
      .preview-area {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: radial-gradient(ellipse at center, #12121e, var(--bg));
        min-height: 0;
        padding: 16px;
      }
      .preview-stage {
        position: relative;
        background: #000;
        border-radius: 12px;
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.95);
        overflow: hidden;
        transition:
          aspect-ratio 0.35s var(--ease),
          max-width 0.35s var(--ease);
      }
      .preview-stage .slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        display: none;
        overflow: hidden;
      }
      .preview-stage .slide.show {
        opacity: 1;
        display: block;
      }
      .preview-stage .slide .bg-blur {
        position: absolute;
        inset: -24px;
        width: calc(100%+48px);
        height: calc(100%+48px);
        object-fit: cover;
        filter: blur(28px) brightness(0.3);
        z-index: 1;
        display: none;
      }
      .preview-stage .slide.fit-contain .bg-blur {
        display: block;
      }
      .preview-stage .slide img.fg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
        will-change: transform;
      }
      .preview-stage .slide.fit-contain img.fg {
        object-fit: contain;
      }

      /* CAPTIONS */
      .caption {
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;
        transform: translateY(10px);
        transition:
          opacity 0.3s ease,
          transform 0.3s ease;
        z-index: 6;
        padding: 0 14px;
        display: flex;
        pointer-events: none;
      }
      .caption.show {
        opacity: 1;
        transform: translateY(0);
      }
      .caption.pos-top {
        top: 10%;
        align-items: flex-start;
      }
      .caption.pos-middle {
        top: 50%;
        transform: translateY(-50%) scale(0.92);
      }
      .caption.pos-middle.show {
        transform: translateY(-50%) scale(1);
      }
      .caption.pos-bottom {
        bottom: 12%;
      }
      .caption.align-c {
        justify-content: center;
        text-align: center;
      }
      .caption.align-l {
        justify-content: flex-start;
        text-align: left;
      }
      .caption.align-r {
        justify-content: flex-end;
        text-align: right;
      }
      .caption span {
        display: inline-block;
        border-radius: 5px;
        line-height: 1.3;
        padding: 6px 13px;
      }
      .caption.cs-lime span {
        color: #fff;
        background: rgba(0, 0, 0, 0.82);
        border: 1.5px solid var(--lime);
        font-family: "Syne", "Kanit", sans-serif;
        font-weight: 800;
      }
      .caption.cs-neon span {
        color: #fff;
        background: #000;
        border: 2px solid var(--pink);
        box-shadow: 0 0 18px var(--pink);
      }
      .caption.cs-fill span {
        color: #000;
        background: var(--lime);
        font-weight: 800;
        box-shadow: 0 5px 16px rgba(200, 255, 0, 0.28);
      }
      .caption.cs-bare span {
        color: #fff;
        text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95);
        background: none;
        border: none;
      }
      .caption.cs-glass span {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .caption.cs-ticker span {
        color: #000;
        background: var(--amber);
        border-radius: 3px;
        letter-spacing: 1.5px;
      }
      .caption.cs-minimal span {
        color: #fff;
        background: none;
        border: none;
        border-bottom: 2px solid var(--lime);
        border-radius: 0;
        padding-bottom: 2px;
      }
      .caption.cs-shadow span {
        color: #fff;
        text-shadow:
          2px 2px 0 #000,
          -1px -1px 0 #000;
        background: none;
        border: none;
      }
      .caption.cs-strip span {
        color: #fff;
        background: rgba(0, 0, 0, 0.88);
        border-radius: 0;
        width: 100%;
        text-align: center;
      }
      .caption.cs-cbox span {
        color: #fff;
        background: var(--pink);
        border-radius: 4px;
        font-weight: 700;
      }

      /* FLASH / VIGNETTE */
      .flash {
        position: absolute;
        inset: 0;
        opacity: 0;
        pointer-events: none;
        mix-blend-mode: screen;
        z-index: 4;
      }
      .flash.fl-lime {
        animation: fl-lime 0.22s ease-out;
      }
      .flash.fl-white {
        animation: fl-white 0.22s ease-out;
      }
      .flash.fl-black {
        animation: fl-black 0.36s ease-out;
      }
      .flash.fl-pink {
        animation: fl-pink 0.22s ease-out;
      }
      @keyframes fl-lime {
        0% {
          opacity: 0.85;
          background: var(--lime);
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes fl-white {
        0% {
          opacity: 0.9;
          background: #fff;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes fl-black {
        0% {
          opacity: 0.75;
          background: #000;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes fl-pink {
        0% {
          opacity: 0.75;
          background: var(--pink);
        }
        100% {
          opacity: 0;
        }
      }
      .vignette {
        position: absolute;
        inset: 0;
        box-shadow: inset 0 0 60px 18px rgba(0, 0, 0, 0.65);
        pointer-events: none;
        z-index: 3;
      }
      .safe-z {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 7;
        display: none;
      }
      .safe-z.on {
        display: block;
      }
      .safe-z::before {
        content: "SAFE";
        position: absolute;
        inset: 10%;
        border: 1px dashed rgba(255, 32, 96, 0.5);
        display: block;
      }
      .safe-z-lbl {
        position: absolute;
        top: 11%;
        left: 11%;
        font-family: "JetBrains Mono", monospace;
        font-size: 7px;
        color: rgba(255, 32, 96, 0.7);
        background: rgba(0, 0, 0, 0.7);
        padding: 2px 4px;
        border-radius: 2px;
      }
      .grid-ov {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 7;
        display: none;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
        background-size: 33.33% 33.33%;
      }
      .grid-ov.on {
        display: block;
      }
      .lbox-ov {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 8;
        display: none;
        flex-direction: column;
        justify-content: space-between;
      }
      .lbox-ov.on {
        display: flex;
      }
      .lbox-ov::before,
      .lbox-ov::after {
        content: "";
        background: #000;
        height: 12%;
        width: 100%;
      }
      .vf-ov {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 8;
        display: none;
      }
      .vf-ov.on {
        display: block;
      }
      .vf-ov::before {
        content: "⏺ REC";
        font-family: "JetBrains Mono", monospace;
        font-weight: 700;
        color: var(--pink);
        font-size: 9px;
        position: absolute;
        top: 10px;
        left: 10px;
        animation: blink 1s step-end infinite;
      }
      .vf-ov::after {
        content: "";
        position: absolute;
        inset: 20px;
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
      .prog-burn {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: var(--lime);
        z-index: 10;
        pointer-events: none;
        width: 0%;
      }
      .prog-burn.top {
        bottom: auto;
        top: 0;
        background: var(--pink);
      }
      .logo-ov {
        position: absolute;
        z-index: 9;
        pointer-events: none;
        max-width: 30%;
        max-height: 30%;
        opacity: 0.88;
      }
      .logo-ov.tr {
        top: 8px;
        right: 8px;
      }
      .logo-ov.tl {
        top: 8px;
        left: 8px;
      }
      .logo-ov.br {
        bottom: 8px;
        right: 8px;
      }
      .logo-ov.bl {
        bottom: 8px;
        left: 8px;
      }
      .wm-ov {
        position: absolute;
        bottom: 8px;
        right: 10px;
        font-family: "JetBrains Mono", monospace;
        font-size: 9px;
        color: rgba(255, 255, 255, 0.22);
        z-index: 10;
        pointer-events: none;
        letter-spacing: 1px;
        text-transform: uppercase;
        display: none;
      }
      .cntdown-ov {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        font-family: "Bebas Neue", sans-serif;
        font-size: 90px;
        color: var(--lime);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 14;
      }
      .empty-state {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 6px;
        color: var(--faint);
        font-size: 11px;
        z-index: 1;
        text-align: center;
        padding: 16px;
      }
      .empty-state .eic {
        font-size: 30px;
        opacity: 0.5;
      }

      /* RATIO BADGES */
      .ratio-badges {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
        display: flex;
        gap: 4px;
      }
      .r-badge {
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--muted);
        padding: 3px 9px;
        border-radius: 20px;
        font-size: 9px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.18s var(--ease);
        font-family: inherit;
      }
      .r-badge:hover {
        color: var(--text);
        border-color: rgba(255, 255, 255, 0.2);
      }
      .r-badge.active {
        background: var(--lime);
        color: #000;
        border-color: var(--lime);
      }
      .ov-btns {
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 10;
        display: flex;
        gap: 4px;
      }

      /* PREVIEW CONTROLS */
      .prev-ctrl {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: var(--panel);
        border-top: 1px solid var(--border);
        flex-shrink: 0;
      }
      .pc-btn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.03);
        color: var(--muted);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.18s var(--ease);
        font-size: 13px;
      }
      .pc-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
      }
      .pc-btn.play {
        background: var(--lime);
        color: #000;
        border-color: var(--lime);
        width: 40px;
        height: 40px;
        font-size: 15px;
      }
      .pc-btn.play:hover {
        background: #b4e500;
      }
      .pc-btn:disabled {
        opacity: 0.2;
        cursor: default;
      }
      .timedisp {
        font-family: "JetBrains Mono", monospace;
        font-size: 11px;
        color: var(--muted);
        min-width: 75px;
        text-align: center;
      }
      .seek-wrap {
        flex: 1;
        max-width: 220px;
        cursor: pointer;
        padding: 4px 0;
        position: relative;
      }
      .seek-track {
        height: 4px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 4px;
        position: relative;
      }
      .seek-fill {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0%;
        background: var(--lime);
        border-radius: 4px;
        transition: width 0.06s linear;
      }
      .seek-thumb {
        position: absolute;
        top: 0;
        width: 10px;
        height: 12px;
        left: 0%;
        background: var(--pink);
        border-radius: 3px;
        transform: translateX(-50%);
        pointer-events: none;
        box-shadow: 0 0 6px var(--pink);
      }
      .shot-badge {
        font-size: 9px;
        color: var(--muted);
        font-family: "JetBrains Mono", monospace;
      }
      .pc-sep {
        width: 1px;
        height: 20px;
        background: var(--border);
      }
      .speed-lbl {
        font-family: "JetBrains Mono", monospace;
        font-size: 9px;
        color: var(--violet);
      }

      /* ── TIMELINE ── */
      .timeline-panel {
        height: 200px;
        background: var(--panel);
        border-top: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
      }
      .tl-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 14px;
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
      }
      .tl-header-l {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .tl-header-l span {
        font-size: 10px;
        font-weight: 600;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .tl-dur {
        font-size: 9px;
        color: var(--faint);
        font-family: "JetBrains Mono", monospace;
      }
      .tl-zoom {
        display: flex;
        gap: 3px;
      }
      .tl-zoom button {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border);
        color: var(--muted);
        width: 22px;
        height: 22px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
      }
      .tl-zoom button:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
      }
      .tl-body {
        flex: 1;
        display: flex;
        position: relative;
        overflow: hidden;
      }
      .tl-labels {
        width: 72px;
        flex-shrink: 0;
        border-right: 1px solid var(--border);
        background: rgba(0, 0, 0, 0.12);
      }
      .tl-lbl {
        height: 26px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        font-size: 8px;
        font-weight: 600;
        color: var(--faint);
        text-transform: uppercase;
        letter-spacing: 0.3px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
      }
      .tl-tracks {
        flex: 1;
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
      }
      .tl-tracks::-webkit-scrollbar {
        height: 4px;
      }
      .tl-tracks::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }
      .tl-ruler {
        height: 18px;
        position: relative;
        border-bottom: 1px solid var(--border);
        background: rgba(0, 0, 0, 0.2);
      }
      .tl-track {
        height: 26px;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
      }
      .tl-track:hover {
        background: rgba(255, 255, 255, 0.01);
      }
      .tl-clip {
        position: absolute;
        top: 3px;
        height: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 6px;
        font-size: 8px;
        font-weight: 500;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        min-width: 8px;
        transition: filter 0.15s;
      }
      .tl-clip:hover {
        filter: brightness(1.2);
      }
      .tl-clip.cv {
        background: #162236;
        border-left: 2px solid var(--lime);
        color: var(--lime);
      }
      .tl-clip.ca {
        background: #1a1228;
        border-left: 2px solid var(--violet);
        color: var(--violet);
      }
      .tl-clip.ct {
        background: #102018;
        border-left: 2px solid var(--cyan);
        color: var(--cyan);
      }
      .tl-clip.ctr {
        background: #201018;
        border-left: 2px solid var(--pink);
        color: var(--pink);
      }
      .tl-playhead {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--pink);
        z-index: 20;
        pointer-events: none;
        box-shadow: 0 0 8px var(--pink);
      }
      .tl-playhead::before {
        content: "";
        position: absolute;
        top: -3px;
        left: -5px;
        width: 12px;
        height: 8px;
        background: var(--pink);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
      }

      /* ── RIGHT PANEL ── */
      .rpanel {
        width: 280px;
        background: var(--panel);
        border-left: 1px solid var(--border);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      /* TABS */
      .panel-tabs {
        display: flex;
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
      }
      .ptab {
        flex: 1;
        padding: 9px 4px;
        font-size: 9px;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        color: var(--muted);
        border: none;
        background: transparent;
        transition: 0.15s;
        letter-spacing: 0.3px;
        text-transform: uppercase;
      }
      .ptab:hover {
        color: var(--text);
      }
      .ptab.active {
        color: var(--lime);
        border-bottom: 2px solid var(--lime);
      }
      .panel-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .panel-content::-webkit-scrollbar {
        width: 3px;
      }
      .panel-content::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 3px;
      }
      .pane {
        display: none;
        padding: 12px;
      }
      .pane.show {
        display: block;
      }

      /* FORM ELEMENTS */
      .psec {
        font-size: 8px;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color: var(--faint);
        margin: 12px 0 7px;
        border-bottom: 1px solid var(--border);
        padding-bottom: 4px;
      }
      .prow {
        display: flex;
        gap: 7px;
        margin-bottom: 6px;
        align-items: center;
      }
      .prow label {
        font-size: 10px;
        color: var(--muted);
        min-width: 58px;
        flex-shrink: 0;
      }
      .prow select,
      .prow input[type="number"],
      .prow input[type="text"],
      .prow input[type="range"] {
        flex: 1;
        background: rgba(0, 0, 0, 0.45);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 5px 8px;
        border-radius: var(--r-sm);
        font-size: 10px;
        font-family: inherit;
        outline: none;
        transition: 0.15s;
      }
      .prow select:focus,
      .prow input:focus {
        border-color: var(--cyan);
      }
      .prow input[type="range"] {
        padding: 0;
        accent-color: var(--lime);
        background: transparent;
        border: none;
      }
      .prow .rv {
        font-size: 9px;
        color: var(--lime);
        min-width: 28px;
        text-align: right;
        font-family: "JetBrains Mono", monospace;
      }
      .pfull {
        width: 100%;
        padding: 8px 12px;
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        border-radius: var(--r-sm);
        border: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.04);
        color: var(--muted);
        transition: 0.18s;
      }
      .pfull:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
      }
      .pfull.primary {
        background: var(--lime);
        color: #000;
        border-color: var(--lime);
      }
      .pfull.primary:hover {
        background: #b4e500;
      }
      .pfull.accent {
        background: rgba(255, 32, 96, 0.12);
        color: var(--pink);
        border-color: rgba(255, 32, 96, 0.3);
      }
      .pfull:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }

      /* TEMPLATE GRID */
      .tpl-scroll {
        max-height: 260px;
        overflow-y: auto;
        padding-right: 2px;
      }
      .tpl-scroll::-webkit-scrollbar {
        width: 3px;
      }
      .tpl-scroll::-webkit-scrollbar-thumb {
        background: var(--cyan);
        border-radius: 2px;
      }
      .tpl-cat-row {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        margin-bottom: 8px;
      }
      .tcat {
        font-family: "JetBrains Mono", monospace;
        font-size: 8px;
        padding: 3px 8px;
        cursor: pointer;
        border: 1px solid var(--border);
        background: transparent;
        color: var(--muted);
        border-radius: 20px;
        transition: 0.15s;
      }
      .tcat:hover {
        border-color: var(--cyan);
        color: var(--cyan);
      }
      .tcat.active {
        background: var(--lime);
        color: #000;
        border-color: var(--lime);
      }
      .tpl-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .tpl-card {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 9px 10px;
        cursor: pointer;
        transition: all 0.2s var(--ease);
        position: relative;
        overflow: hidden;
      }
      .tpl-card:hover {
        border-color: var(--lime);
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(200, 255, 0, 0.1);
      }
      .tpl-card:active {
        transform: translateY(0);
      }
      .tpl-cat-badge {
        font-size: 7px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 3px;
        display: inline-block;
        padding: 1px 5px;
        border-radius: 3px;
      }
      .tpl-name {
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 2px;
      }
      .tpl-desc {
        font-size: 8px;
        color: var(--muted);
        line-height: 1.4;
      }

      /* MEDIA PANEL */
      .mpanel {
        width: 260px;
        background: var(--card);
        border-left: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        transition: width 0.28s var(--ease);
      }
      .mpanel.closed {
        width: 0;
        overflow: hidden;
      }
      .mp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        flex-shrink: 0;
      }
      .mp-header span {
        font-size: 11px;
        font-weight: 600;
      }
      .upload-drop {
        display: block;
        border: 2px dashed rgba(255, 255, 255, 0.14);
        padding: 18px 12px;
        text-align: center;
        cursor: pointer;
        font-size: 10px;
        color: var(--muted);
        transition: 0.2s;
        border-radius: var(--r);
        background: rgba(0, 0, 0, 0.15);
        margin: 8px;
      }
      .upload-drop:hover,
      .upload-drop:focus-visible {
        border-color: var(--cyan);
        color: var(--cyan);
      }
      .upload-drop.dragover {
        border-color: var(--lime);
        color: var(--lime);
      }
      .recovery-bar {
        display: none;
        align-items: center;
        justify-content: space-between;
        padding: 6px 10px;
        background: rgba(200, 255, 0, 0.04);
        border-bottom: 1px solid rgba(200, 255, 0, 0.1);
        gap: 6px;
        flex-shrink: 0;
      }
      .rbar-text {
        font-size: 10px;
        color: var(--muted);
      }
      .rbar-text b {
        color: var(--lime);
      }
      .rbar-btns {
        display: flex;
        gap: 4px;
      }
      .rbar-btn {
        font-size: 9px;
        padding: 3px 8px;
        cursor: pointer;
        border: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.04);
        color: var(--muted);
        border-radius: 4px;
        transition: 0.15s;
      }
      .rbar-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text);
      }
      .load-bar {
        display: none;
        padding: 6px 10px;
        background: rgba(0, 0, 0, 0.3);
        flex-shrink: 0;
      }
      .load-track {
        width: 100%;
        height: 3px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 3px;
        overflow: hidden;
      }
      .load-fill {
        height: 100%;
        width: 0%;
        background: var(--cyan);
        transition: width 0.15s;
      }
      .load-txt {
        font-size: 9px;
        color: var(--muted);
        margin-top: 3px;
        font-family: "JetBrains Mono", monospace;
      }
      .qlist {
        flex: 1;
        overflow-y: auto;
        padding: 6px;
      }
      .qlist::-webkit-scrollbar {
        width: 3px;
      }
      .qlist::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 3px;
      }
      .qitem {
        display: flex;
        gap: 7px;
        padding: 7px;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.15s;
        align-items: center;
        border: 1px solid transparent;
      }
      .qitem:hover {
        background: rgba(255, 255, 255, 0.03);
        border-color: var(--border);
      }
      .qitem.active-shot {
        border-color: var(--pink);
        background: rgba(255, 32, 96, 0.04);
      }
      .qitem img {
        width: 38px;
        height: 38px;
        object-fit: cover;
        border-radius: 4px;
        flex-shrink: 0;
        pointer-events: none;
      }
      .qitem-info {
        flex: 1;
        min-width: 0;
      }
      .qitem-title {
        font-size: 10px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qitem-sub {
        font-size: 8px;
        color: var(--muted);
      }
      .qitem-acts {
        display: flex;
        gap: 2px;
        flex-shrink: 0;
      }
      .qitem-acts button {
        background: none;
        border: none;
        color: var(--muted);
        cursor: pointer;
        padding: 2px 4px;
        font-size: 11px;
        transition: 0.12s;
        border-radius: 3px;
      }
      .qitem-acts button:hover {
        color: var(--text);
        background: rgba(255, 255, 255, 0.06);
      }
      .mp-footer {
        padding: 7px;
        border-top: 1px solid var(--border);
        display: flex;
        gap: 4px;
        flex-shrink: 0;
      }
      .mp-footer button {
        flex: 1;
        font-size: 9px;
        padding: 6px 4px;
      }

      /* AUDIO BAR */
      .audio-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: var(--r-sm);
        margin: 4px 8px;
        border: 1px solid rgba(0, 240, 255, 0.08);
      }
      .audio-bar .aname {
        font-size: 9px;
        color: var(--cyan);
        font-weight: 600;
        max-width: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .audio-bar input[type="range"] {
        flex: 1;
        accent-color: var(--cyan);
        height: 4px;
      }
      .audio-bar .avol {
        font-size: 9px;
        color: var(--muted);
        font-family: "JetBrains Mono", monospace;
        min-width: 28px;
        text-align: right;
      }

      /* EXPORT MODAL */
      .modal-ov {
        position: fixed;
        inset: 0;
        background: rgba(4, 4, 8, 0.96);
        z-index: 9000;
        display: none;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(14px);
      }
      .modal-card {
        background: #0f0f1a;
        border: 1px solid rgba(255, 32, 96, 0.25);
        padding: 28px 24px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        border-radius: 14px;
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.98);
        animation: mzoom 0.3s var(--ease);
      }
      @keyframes mzoom {
        from {
          opacity: 0;
          transform: scale(0.9) translateY(14px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      .m-title {
        font-family: "Bebas Neue", sans-serif;
        color: var(--pink);
        font-size: 22px;
        margin-bottom: 6px;
        letter-spacing: 1px;
      }
      .m-desc {
        font-size: 10px;
        color: var(--muted);
        margin-bottom: 14px;
        font-family: "JetBrains Mono", monospace;
      }
      .m-pct {
        font-family: "JetBrains Mono", monospace;
        font-size: 32px;
        color: #fff;
        font-weight: 700;
        margin: 6px 0;
      }
      .m-prog {
        width: 100%;
        height: 6px;
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid var(--border);
        margin: 12px 0 0;
        overflow: hidden;
        border-radius: 4px;
      }
      .m-prog-fill {
        height: 100%;
        background: var(--pink);
        width: 0%;
        border-radius: 4px;
        transition: width 0.06s linear;
      }
      #renderCanvas {
        width: 140px;
        height: 140px;
        object-fit: contain;
        border: 1px solid var(--border);
        margin: 12px auto;
        display: block;
        background: #000;
        border-radius: 7px;
      }

      /* TOAST */
      #toastWrap {
        position: fixed;
        bottom: 20px;
        right: 18px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 6px;
        pointer-events: none;
      }
      .toast {
        background: rgba(14, 14, 24, 0.97);
        border: 1px solid var(--border);
        padding: 9px 14px;
        border-radius: 8px;
        font-size: 10px;
        color: var(--text);
        opacity: 0;
        transform: translateY(6px);
        transition: 0.2s;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
      }
      .toast.show {
        opacity: 1;
        transform: translateY(0);
      }
      .toast-s {
        border-left: 3px solid var(--lime);
      }
      .toast-e {
        border-left: 3px solid var(--err);
      }
      .toast-i {
        border-left: 3px solid var(--cyan);
      }
      .toast-w {
        border-left: 3px solid var(--amber);
      }
    </style>
  </head>
  <body>
    <!-- TOPBAR -->
    <div class="topbar">
      <div class="topbar-left">
        <div class="logo">ClipForge <sub>PRO</sub></div>
        <div class="tb-div"></div>
        <button class="tb-btn" id="mediaToggleBtn">📁 Media</button>
        <button class="tb-btn" id="tplToggleBtn">⚡ Templates</button>
        <div class="tb-div"></div>
        <button class="tb-btn primary" id="buildBtn" disabled>🎬 Build</button>
        <button class="tb-btn accent" id="exportVideoBtn" disabled>
          📤 Export
        </button>
      </div>
      <div class="topbar-right">
        <button class="tb-btn" id="exportBtn" disabled>💾 Save</button>
        <button class="tb-btn" id="importBtn">📂 Open</button>
        <input
          type="file"
          id="importInput"
          accept="application/json,.json"
          style="display: none"
        />
        <button class="tb-btn" id="clearBtn" disabled>🗑 Clear</button>
      </div>
    </div>

    <div class="workspace">
      <!-- LEFT TOOLBAR -->
      <div class="ltb">
        <button class="lt-icon active" id="ltSelect" title="Select">⬚</button>
        <button class="lt-icon" id="ltText" title="Text">T</button>
        <button class="lt-icon" id="ltEffects" title="Effects">✦</button>
        <button class="lt-icon" id="ltFilters" title="Filters">🎨</button>
        <button class="lt-icon" id="ltAudio" title="Audio">♫</button>
        <button class="lt-icon" id="ltSettings" title="Settings">⚙</button>
      </div>

      <!-- EDITOR CENTER -->
      <div class="editor-center">
        <!-- PREVIEW -->
        <div class="preview-area">
          <div
            class="preview-stage"
            id="frame"
            style="aspect-ratio: 9/16; max-width: 272px"
          >
            <div class="ratio-badges">
              <button class="r-badge" data-ratio="1/1">1:1</button>
              <button class="r-badge" data-ratio="4/3">4:3</button>
              <button class="r-badge" data-ratio="16/9">16:9</button>
              <button class="r-badge active" data-ratio="9/16">9:16</button>
            </div>
            <div class="empty-state" id="emptyState">
              <div class="eic">🎬</div>
              Drop images to start<br /><span
                style="font-size: 9px; color: var(--faint)"
                >Click Media or drag files</span
              >
            </div>
            <div class="flash" id="flash"></div>
            <div class="vignette"></div>
            <div class="safe-z" id="safeZ">
              <div class="safe-z-lbl">SAFE</div>
            </div>
            <div class="grid-ov" id="gridOv"></div>
            <div class="lbox-ov" id="lboxOv"></div>
            <div class="vf-ov" id="vfOv"></div>
            <div class="cntdown-ov" id="cntOv"></div>
            <div class="prog-burn" id="progBurn" style="display: none"></div>
            <div class="wm-ov" id="wmOv"></div>
            <div class="ov-btns">
              <button class="r-badge" id="safeBtn" style="font-size: 8px">
                ⊞ Safe
              </button>
              <button class="r-badge" id="gridBtn" style="font-size: 8px">
                ⊹ Grid
              </button>
              <button class="r-badge" id="lboxBtn" style="font-size: 8px">
                ▬ Lbox
              </button>
              <button class="r-badge" id="vfBtn" style="font-size: 8px">
                ⬛ VF
              </button>
            </div>
          </div>
        </div>

        <!-- PREVIEW CONTROLS -->
        <div class="prev-ctrl">
          <button class="pc-btn" id="stepBackBtn" disabled title="Prev shot ←">
            ⏮
          </button>
          <button class="pc-btn play" id="playBtn" disabled>▶</button>
          <button class="pc-btn" id="restartBtn" disabled title="Restart R">
            ↺
          </button>
          <button class="pc-btn" id="stepFwdBtn" disabled title="Next shot →">
            ⏭
          </button>
          <div class="pc-sep"></div>
          <div class="timedisp" id="tc">0.0s / 0.0s</div>
          <div class="seek-wrap" id="seekWrap">
            <div class="seek-track">
              <div class="seek-fill" id="seekFill"></div>
            </div>
            <div class="seek-thumb" id="seekThumb"></div>
          </div>
          <span class="shot-badge" id="shotBadge">0 shots</span>
          <div class="pc-sep"></div>
          <select
            id="speedSel"
            style="
              background: rgba(0, 0, 0, 0.4);
              border: 1px solid var(--border);
              color: var(--muted);
              font-size: 9px;
              padding: 3px 5px;
              border-radius: 4px;
              font-family: &quot;JetBrains Mono&quot;, monospace;
            "
          >
            <option value="0.5">0.5×</option>
            <option value="1" selected>1×</option>
            <option value="1.5">1.5×</option>
            <option value="2">2×</option>
          </select>
          <button
            class="pc-btn"
            id="loopBtn"
            style="
              font-size: 9px;
              width: auto;
              border-radius: 5px;
              padding: 0 8px;
            "
            title="Loop L"
          >
            ⟳
          </button>
          <button
            class="pc-btn"
            id="cntBtn"
            style="
              font-size: 9px;
              width: auto;
              border-radius: 5px;
              padding: 0 8px;
            "
            disabled
            title="3-2-1 countdown"
          >
            3-2-1
          </button>
        </div>

        <!-- CAPCUT-STYLE TIMELINE -->
        <div class="timeline-panel">
          <div class="tl-header">
            <div class="tl-header-l">
              <span>🎬 Timeline</span>
              <span class="tl-dur" id="tlDur">0.0s</span>
            </div>
            <div class="tl-zoom">
              <button id="zoomOut">−</button>
              <button id="zoomIn">+</button>
            </div>
          </div>
          <div class="tl-body" id="tlBody">
            <div class="tl-labels">
              <div class="tl-lbl" style="height: 18px"></div>
              <div class="tl-lbl">Video</div>
              <div class="tl-lbl">Audio</div>
              <div class="tl-lbl">Text</div>
              <div class="tl-lbl">Trans</div>
            </div>
            <div class="tl-tracks" id="tlTracks">
              <div class="tl-ruler" id="tlRuler"></div>
              <div class="tl-track" id="tlVideo"></div>
              <div class="tl-track" id="tlAudio">
                <div
                  class="tl-clip ca"
                  id="tlAudioClip"
                  style="display: none; left: 0; right: 0; width: 100%"
                >
                  🎵 Audio
                </div>
              </div>
              <div class="tl-track" id="tlText"></div>
              <div class="tl-track" id="tlTrans"></div>
              <div class="tl-playhead" id="playhead" style="left: 0"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT PANEL -->
      <div class="rpanel" id="rpanel">
        <div class="panel-tabs">
          <button class="ptab active" data-pane="settings">Settings</button>
          <button class="ptab" data-pane="templates">Templates</button>
          <button class="ptab" data-pane="bulk">Bulk</button>
          <button class="ptab" data-pane="export">Export</button>
        </div>
        <div class="panel-content">
          <!-- SETTINGS PANE -->
          <div class="pane show" id="pane-settings">
            <div class="psec">Clip</div>
            <div class="prow">
              <label>Duration</label
              ><input
                type="number"
                id="gDur"
                min="0.5"
                max="15"
                step="0.5"
                value="2.5"
              />
            </div>
            <div class="prow">
              <label>Motion</label
              ><select id="gEffect"></select>
            </div>
            <div class="prow">
              <label>Transition</label>
              <select id="gTrans">
                <option value="lime">🟢 Lime Flash</option>
                <option value="white">⚪ White Flash</option>
                <option value="black">⚫ Fade Black</option>
                <option value="pink">🩷 Pink Flash</option>
                <option value="none">✖ Hard Cut</option>
              </select>
            </div>
            <div class="prow">
              <label>Trans Dur</label
              ><input
                type="number"
                id="gTransDur"
                min="0.1"
                max="1"
                step="0.05"
                value="0.25"
              />
            </div>
            <div class="psec">Image</div>
            <div class="prow">
              <label>Fit Mode</label>
              <select id="gFit">
                <option value="contain">Contain</option>
                <option value="cover">Cover</option>
              </select>
            </div>
            <div class="prow">
              <label>LUT Filter</label>
              <select id="gFilter">
                <option value="none">Normal</option>
                <option value="warm">Warm Film</option>
                <option value="cyber">Cyber</option>
                <option value="mono">B&W Mono</option>
                <option value="sepia">Sepia</option>
                <option value="cold">Cold</option>
                <option value="fade">Fade</option>
                <option value="vivid">Vivid</option>
                <option value="punch">Punch</option>
                <option value="sunset">Sunset</option>
              </select>
            </div>
            <div class="prow">
              <label>Brightness</label
              ><input
                type="range"
                id="gBright"
                min="0.5"
                max="1.5"
                step="0.05"
                value="1"
              /><span class="rv" id="gBrightV">1.0</span>
            </div>
            <div class="prow">
              <label>Contrast</label
              ><input
                type="range"
                id="gContrast"
                min="0.5"
                max="1.5"
                step="0.05"
                value="1"
              /><span class="rv" id="gContrastV">1.0</span>
            </div>
            <div class="prow">
              <label>Saturation</label
              ><input
                type="range"
                id="gSat"
                min="0"
                max="2"
                step="0.05"
                value="1"
              /><span class="rv" id="gSatV">1.0</span>
            </div>
            <div class="prow">
              <label>Rotation</label
              ><select id="gRotation">
                <option value="0">0°</option>
                <option value="90">90°</option>
                <option value="180">180°</option>
                <option value="270">270°</option>
              </select>
            </div>
            <div class="psec">Caption</div>
            <div class="prow">
              <label>Style</label>
              <select id="gCapStyle">
                <option value="lime">Lime Border</option>
                <option value="neon">Neon Pink</option>
                <option value="fill">Lime Fill</option>
                <option value="bare">Bare</option>
                <option value="glass">Glass</option>
                <option value="ticker">Ticker</option>
                <option value="minimal">Minimal</option>
                <option value="shadow">Shadow</option>
                <option value="strip">Strip</option>
                <option value="cbox">Color Box</option>
              </select>
            </div>
            <div class="prow">
              <label>Position</label>
              <select id="gCapPos">
                <option value="bottom">Bottom</option>
                <option value="middle">Middle</option>
                <option value="top">Top</option>
              </select>
            </div>
            <div class="prow">
              <label>Align</label>
              <select id="gCapAlign">
                <option value="c">Center</option>
                <option value="l">Left</option>
                <option value="r">Right</option>
              </select>
            </div>
            <div class="prow">
              <label>Font</label>
              <select id="gFont">
                <option value="'Syne',sans-serif">Syne</option>
                <option value="'Kanit',sans-serif">Kanit (ไทย)</option>
                <option value="'Bebas Neue',sans-serif">Bebas Neue</option>
                <option value="'Playfair Display',serif">Playfair</option>
                <option value="'DM Sans',sans-serif">DM Sans</option>
                <option value="'Sarabun',sans-serif">Sarabun (ไทย)</option>
                <option value="'JetBrains Mono',monospace">Mono</option>
              </select>
            </div>
            <div class="prow">
              <label>Weight</label>
              <select id="gFontW">
                <option value="400">400</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800" selected>800</option>
                <option value="900">900</option>
              </select>
            </div>
            <div class="prow">
              <label>Size</label>
              <select id="gFontS">
                <option value="small">Small</option>
                <option value="medium" selected>Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div class="prow">
              <label>Case</label>
              <select id="gTextCase">
                <option value="none">Normal</option>
                <option value="uppercase">UPPER</option>
              </select>
            </div>
            <div class="psec">Overlay</div>
            <div class="prow">
              <label>Frame</label>
              <select id="gOverlay">
                <option value="none">None</option>
                <option value="letterbox">Letterbox</option>
                <option value="viewfinder">Viewfinder</option>
              </select>
            </div>
            <div class="prow">
              <label>Progress</label>
              <select id="gProgBurn">
                <option value="none">None</option>
                <option value="bottom">Lime Bottom</option>
                <option value="top">Pink Top</option>
              </select>
            </div>
            <div class="prow">
              <label>Watermark</label
              ><input type="text" id="gWM" placeholder="© Brand..." />
            </div>
            <button
              class="pfull"
              onclick="document.getElementById('logoIn').click()"
            >
              🖼 Logo Overlay
            </button>
            <input
              type="file"
              id="logoIn"
              accept="image/*"
              style="display: none"
            />
            <div class="psec">Audio</div>
            <div class="audio-bar">
              <span>🎵 <span class="aname" id="aname">None</span></span>
              <input
                type="range"
                id="aVol"
                min="0"
                max="1"
                step="0.05"
                value="1"
              />
              <span class="avol" id="aVolV">100%</span>
              <button
                class="rbar-btn"
                onclick="document.getElementById('audioIn').click()"
                style="flex-shrink: 0"
              >
                +
              </button>
              <button
                class="rbar-btn"
                id="audioClearBtn"
                style="display: none; color: var(--err)"
              >
                ✕
              </button>
              <input
                type="file"
                id="audioIn"
                accept="audio/*"
                style="display: none"
              />
            </div>
          </div>

          <!-- TEMPLATES PANE -->
          <div class="pane" id="pane-templates">
            <div class="tpl-cat-row" id="tplCatRow"></div>
            <div class="tpl-scroll">
              <div class="tpl-grid" id="tplGrid"></div>
            </div>
          </div>

          <!-- BULK PANE -->
          <div class="pane" id="pane-bulk">
            <div class="psec">Apply Global to All</div>
            <button
              class="pfull primary"
              id="bulkApplyBtn"
              style="margin-bottom: 6px"
            >
              ✓ Apply Settings to All
            </button>
            <button class="pfull" id="shuffleBtn" style="margin-bottom: 4px">
              🔀 Shuffle Order
            </button>
            <button class="pfull" id="reverseBtn" style="margin-bottom: 4px">
              ↩ Reverse Order
            </button>
            <button class="pfull" id="autoAltBtn" style="margin-bottom: 4px">
              ⇄ Alternate Zoom In/Out
            </button>
            <button class="pfull" id="altTransBtn" style="margin-bottom: 4px">
              ⇄ Cycle Transitions
            </button>
            <div class="psec">BPM Sync</div>
            <div class="prow">
              <label>BPM</label
              ><input
                type="number"
                id="bpmIn"
                min="40"
                max="300"
                value="120"
                step="1"
              />
            </div>
            <div class="prow">
              <label>Beats/Shot</label
              ><input
                type="number"
                id="bpsIn"
                min="1"
                max="8"
                value="2"
                step="1"
              />
            </div>
            <button class="pfull" id="tapBtn" style="margin-bottom: 4px">
              👆 Tap Tempo
            </button>
            <button class="pfull primary" id="bpmApplyBtn">
              Apply BPM to All
            </button>
            <div class="psec">History</div>
            <div style="display: flex; gap: 6px">
              <button class="pfull" id="undoBtn" disabled style="flex: 1">
                ↩ Undo
              </button>
              <button class="pfull" id="redoBtn" disabled style="flex: 1">
                ↪ Redo
              </button>
            </div>
          </div>

          <!-- EXPORT PANE -->
          <div class="pane" id="pane-export">
            <div class="psec">Video</div>
            <div class="prow">
              <label>Resolution</label>
              <select id="expRes">
                <option value="720">720p HD</option>
                <option value="1080" selected>1080p FHD</option>
                <option value="2160">4K UHD</option>
              </select>
            </div>
            <div class="prow">
              <label>FPS</label>
              <select id="expFPS">
                <option value="24">24fps</option>
                <option value="30" selected>30fps</option>
                <option value="60">60fps</option>
              </select>
            </div>
            <div class="prow">
              <label>Import Q</label>
              <select id="impQ">
                <option value="original">Original</option>
                <option value="2048">2K</option>
                <option value="1080" selected>1080p</option>
              </select>
            </div>
            <button
              class="pfull accent"
              id="expVideoBtnP"
              style="margin-bottom: 4px"
            >
              🎬 Export Video (WebM/MP4)
            </button>
            <div class="psec">Project</div>
            <button
              class="pfull"
              id="expProjBtn"
              disabled
              style="margin-bottom: 4px"
            >
              💾 Save Project JSON
            </button>
            <button class="pfull" id="impProjBtn" style="margin-bottom: 4px">
              📂 Load Project
            </button>
            <button
              class="pfull"
              id="expShotBtn"
              disabled
              style="margin-bottom: 4px"
            >
              📋 Export Shot List
            </button>
            <button class="pfull" id="expFrameBtn" disabled>
              📸 Save Current Frame
            </button>
            <div class="psec">Slots (localStorage)</div>
            <div
              id="slotsWrap"
              style="display: flex; gap: 4px; flex-wrap: wrap"
            ></div>
          </div>
        </div>
      </div>

      <!-- MEDIA PANEL -->
      <div class="mpanel" id="mpanel">
        <div class="mp-header">
          <span>📁 Media</span
          ><button class="rbar-btn" id="closeMpanel">✕</button>
        </div>
        <label class="upload-drop" id="dropZone" for="fileIn" tabindex="0"
          >+ Drop images or click</label
        >
        <input
          type="file"
          id="fileIn"
          accept="image/*"
          multiple
          style="display: none"
        />
        <div class="recovery-bar" id="recovBar">
          <span class="rbar-text"
            >Recovery: <b id="recovCount">0</b> shots</span
          >
          <div class="rbar-btns">
            <button class="rbar-btn" id="recovLoad">Restore</button>
            <button class="rbar-btn" id="recovDismiss">Dismiss</button>
          </div>
        </div>
        <div class="load-bar" id="loadBar">
          <div class="load-track">
            <div class="load-fill" id="loadFill"></div>
          </div>
          <div class="load-txt" id="loadTxt">Loading...</div>
        </div>
        <div class="qlist" id="queueList">
          <div
            style="
              font-size: 10px;
              color: var(--muted);
              text-align: center;
              padding: 20px;
            "
          >
            No media yet.
          </div>
        </div>
        <div class="mp-footer">
          <button class="tb-btn" id="mpListBtn">📋 List</button>
          <button class="tb-btn" id="mpGridBtn">🗂 Grid</button>
        </div>
      </div>
    </div>
    <!-- workspace -->

    <!-- EXPORT MODAL -->
    <div class="modal-ov" id="exportModal">
      <div class="modal-card">
        <div class="m-title">RENDERING VIDEO</div>
        <div class="m-desc">กำลัง render ทุก frame ลง Canvas...</div>
        <canvas id="renderCanvas" width="270" height="480"></canvas>
        <div class="m-pct" id="expPct">0%</div>
        <div class="m-prog">
          <div class="m-prog-fill" id="expProgFill"></div>
        </div>
        <p
          style="
            font-size: 9px;
            color: var(--faint);
            font-family: &quot;JetBrains Mono&quot;, monospace;
            margin-top: 8px;
          "
        >
          Keep tab active during render
        </p>
      </div>
    </div>

    <div id="toastWrap" role="status" aria-live="polite"></div>

    <script>
      "use strict";
      // ══════════════════════════════════════════════════════════════
      // ClipForge PRO — Full Engine v5
      // All features: Templates · Effects · LUTs · Captions · BPM
      // Timeline · Canvas Export · Undo/Redo · Drag · Autosave · Slots
      // ══════════════════════════════════════════════════════════════

      const EFFECTS = {
        zoomIn: { label: "Zoom In 🔍" },
        zoomOut: { label: "Zoom Out 🔎" },
        panL: { label: "Pan Left ←" },
        panR: { label: "Pan Right →" },
        panU: { label: "Pan Up ↑" },
        panD: { label: "Pan Down ↓" },
        kenburns: { label: "Ken Burns 🗺" },
        slideIn: { label: "Slide In ←" },
        slideInR: { label: "Slide In →" },
        slideUp: { label: "Slide Up ↑" },
        slideDown: { label: "Slide Down ↓" },
        rotateL: { label: "Rotate CCW 🔄" },
        rotateR: { label: "Rotate CW 🔃" },
        drift: { label: "Drift 🌊" },
        rise: { label: "Rise ⬆" },
        wobble: { label: "Pendulum 🔄" },
        spinPop: { label: "Spin Pop 🎡" },
        breathe: { label: "Breathe 🌬" },
        hold: { label: "Static 📌" },
      };

      const LUT_CSS = {
        none: "",
        warm: "sepia(.18) saturate(1.2) contrast(1.05) brightness(.95)",
        cyber: "hue-rotate(-18deg) saturate(1.5) contrast(1.1)",
        mono: "grayscale(1) contrast(1.35)",
        sepia: "sepia(.65) contrast(.95) brightness(1.06)",
        cold: "hue-rotate(18deg) saturate(.82) contrast(1.06) brightness(.9)",
        fade: "saturate(.55) brightness(1.12) contrast(.88)",
        vivid: "saturate(1.7) contrast(1.12) brightness(1.02)",
        punch: "contrast(1.25) saturate(1.4) brightness(.97)",
        sunset: "sepia(.25) hue-rotate(-15deg) saturate(1.3) brightness(.97)",
      };

      const RATIO_MAXW = { "1/1": 340, "4/3": 390, "16/9": 460, "9/16": 272 };
      const N_SLOTS = 4,
        MAX_Q = 60;

      // ── TEMPLATES ──
      const TEMPLATES = [
        {
          id: "flash-sale",
          cat: "🛍 Product",
          name: "Flash Sale",
          desc: "ตัดเร็ว 1s neon ราคาพุ่ง",
          dur: 1.0,
          effect: "zoomIn",
          trans: "lime",
          fit: "cover",
          filter: "vivid",
          capStyle: "ticker",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "product-reveal",
          cat: "🛍 Product",
          name: "Product Reveal",
          desc: "Slide In clean เปิดตัวสินค้า",
          dur: 2.5,
          effect: "slideIn",
          trans: "white",
          fit: "contain",
          filter: "none",
          capStyle: "fill",
          font: "'Syne',sans-serif",
          fw: "800",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "product-360",
          cat: "🛍 Product",
          name: "360° View",
          desc: "Pan รอบสินค้าทุกมุม",
          dur: 3.0,
          effect: "panR",
          trans: "none",
          fit: "contain",
          filter: "punch",
          capStyle: "glass",
          font: "'DM Sans',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "none",
        },
        {
          id: "new-arrival",
          cat: "🛍 Product",
          name: "New Arrival",
          desc: "Ken Burns luxury เปิดตัวใหม่",
          dur: 3.5,
          effect: "kenburns",
          trans: "black",
          fit: "contain",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "900",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "price-tag",
          cat: "🛍 Product",
          name: "Price Promo",
          desc: "ราคาชัด ticker bold",
          dur: 1.5,
          effect: "zoomIn",
          trans: "pink",
          fit: "cover",
          filter: "cyber",
          capStyle: "ticker",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "unboxing",
          cat: "🛍 Product",
          name: "Unboxing Vlog",
          desc: "Warm pan ธรรมชาติ",
          dur: 2.8,
          effect: "panU",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "minimal",
          font: "'Kanit',sans-serif",
          fw: "600",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "before-after",
          cat: "🛍 Product",
          name: "Before / After",
          desc: "Slide สลับ dramatic",
          dur: 2.0,
          effect: "slideIn",
          trans: "white",
          fit: "cover",
          filter: "none",
          capStyle: "shadow",
          font: "'Kanit',sans-serif",
          fw: "900",
          capPos: "top",
          tc: "uppercase",
        },
        {
          id: "lifestyle",
          cat: "🛍 Product",
          name: "Lifestyle Shot",
          desc: "Cinematic slow warm",
          dur: 4.0,
          effect: "kenburns",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "review",
          cat: "🛍 Product",
          name: "Review/Testimonial",
          desc: "Hold static trust",
          dur: 4.0,
          effect: "hold",
          trans: "black",
          fit: "contain",
          filter: "none",
          capStyle: "glass",
          font: "'Sarabun',sans-serif",
          fw: "600",
          capPos: "middle",
          tc: "none",
        },
        {
          id: "tiktok",
          cat: "📱 Social",
          name: "TikTok Trend",
          desc: "เร็ว 1.1s cyber neon",
          dur: 1.1,
          effect: "zoomIn",
          trans: "lime",
          fit: "cover",
          filter: "cyber",
          capStyle: "neon",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "uppercase",
        },
        {
          id: "ig-reels",
          cat: "📱 Social",
          name: "IG Reels",
          desc: "Pan smooth aesthetic",
          dur: 2.2,
          effect: "panL",
          trans: "black",
          fit: "cover",
          filter: "fade",
          capStyle: "minimal",
          font: "'Syne',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "ig-square",
          cat: "📱 Social",
          name: "IG Square",
          desc: "Zoom clean white flash",
          dur: 2.0,
          effect: "zoomIn",
          trans: "white",
          fit: "contain",
          filter: "none",
          capStyle: "glass",
          font: "'DM Sans',sans-serif",
          fw: "600",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "fb-story",
          cat: "📱 Social",
          name: "FB Story",
          desc: "Slide up energetic",
          dur: 1.8,
          effect: "slideUp",
          trans: "lime",
          fit: "cover",
          filter: "vivid",
          capStyle: "fill",
          font: "'Kanit',sans-serif",
          fw: "800",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "yt-short",
          cat: "📱 Social",
          name: "YouTube Short",
          desc: "Breathe punchy สีเข้ม",
          dur: 2.5,
          effect: "breathe",
          trans: "white",
          fit: "cover",
          filter: "punch",
          capStyle: "shadow",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "top",
          tc: "uppercase",
        },
        {
          id: "line-oa",
          cat: "📱 Social",
          name: "LINE OA",
          desc: "Formal Sarabun Thai",
          dur: 3.0,
          effect: "hold",
          trans: "black",
          fit: "contain",
          filter: "none",
          capStyle: "lime",
          font: "'Sarabun',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "cinematic",
          cat: "🎬 Story",
          name: "Cinematic",
          desc: "Ken Burns + Lbox warm",
          dur: 4.0,
          effect: "kenburns",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "documentary",
          cat: "🎬 Story",
          name: "Documentary",
          desc: "Pan mono dramatic",
          dur: 3.5,
          effect: "panR",
          trans: "black",
          fit: "cover",
          filter: "mono",
          capStyle: "minimal",
          font: "'DM Sans',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "epic",
          cat: "🎬 Story",
          name: "Epic Promo",
          desc: "Ken Burns mono drama",
          dur: 1.8,
          effect: "kenburns",
          trans: "black",
          fit: "cover",
          filter: "mono",
          capStyle: "neon",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "emotional",
          cat: "🎬 Story",
          name: "Emotional",
          desc: "Breathe warm จริงใจ",
          dur: 5.0,
          effect: "breathe",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "middle",
          tc: "none",
        },
        {
          id: "travel",
          cat: "🎬 Story",
          name: "Travel Vlog",
          desc: "Pan vivid พลังงาน",
          dur: 2.5,
          effect: "panL",
          trans: "lime",
          fit: "cover",
          filter: "vivid",
          capStyle: "glass",
          font: "'Syne',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "food",
          cat: "🎬 Story",
          name: "Food & Drink",
          desc: "Zoom slow warm",
          dur: 3.0,
          effect: "zoomIn",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "big-type",
          cat: "✏ Type",
          name: "Big Impact",
          desc: "Bebas ใหญ่กลางจอ",
          dur: 2.0,
          effect: "hold",
          trans: "lime",
          fit: "cover",
          filter: "none",
          capStyle: "shadow",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "quote",
          cat: "✏ Type",
          name: "Quote Card",
          desc: "Playfair cold elegant",
          dur: 4.0,
          effect: "breathe",
          trans: "black",
          fit: "contain",
          filter: "cold",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "middle",
          tc: "none",
        },
        {
          id: "announce",
          cat: "✏ Type",
          name: "Announcement",
          desc: "Ticker ประกาศชัด",
          dur: 2.5,
          effect: "zoomIn",
          trans: "white",
          fit: "cover",
          filter: "none",
          capStyle: "ticker",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "lower-third",
          cat: "✏ Type",
          name: "Lower Third",
          desc: "Caption ล่าง minimal",
          dur: 3.0,
          effect: "kenburns",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "minimal",
          font: "'Syne',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "corporate",
          cat: "🏢 Brand",
          name: "Corporate",
          desc: "Pan ช้า เรียบหรู",
          dur: 3.5,
          effect: "panR",
          trans: "black",
          fit: "contain",
          filter: "none",
          capStyle: "glass",
          font: "'Sarabun',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "luxury",
          cat: "🏢 Brand",
          name: "Luxury Brand",
          desc: "Breathe sepia premium",
          dur: 5.0,
          effect: "breathe",
          trans: "black",
          fit: "contain",
          filter: "sepia",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "middle",
          tc: "none",
        },
        {
          id: "startup",
          cat: "🏢 Brand",
          name: "Startup Pitch",
          desc: "Slide Up cyber tech",
          dur: 2.0,
          effect: "slideUp",
          trans: "lime",
          fit: "contain",
          filter: "cyber",
          capStyle: "neon",
          font: "'Syne',sans-serif",
          fw: "800",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "real-estate",
          cat: "🏢 Brand",
          name: "Real Estate",
          desc: "Ken Burns wide",
          dur: 4.0,
          effect: "kenburns",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "glass",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "restaurant",
          cat: "🏢 Brand",
          name: "Restaurant",
          desc: "Zoom food warm ชวนหิว",
          dur: 2.5,
          effect: "zoomIn",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "fashion",
          cat: "💄 Fashion",
          name: "Fashion Edit",
          desc: "Slide mono high fashion",
          dur: 1.5,
          effect: "slideInR",
          trans: "white",
          fit: "cover",
          filter: "mono",
          capStyle: "minimal",
          font: "'Syne',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "uppercase",
        },
        {
          id: "beauty",
          cat: "💄 Fashion",
          name: "Beauty Product",
          desc: "Zoom warm glow",
          dur: 3.0,
          effect: "zoomIn",
          trans: "black",
          fit: "contain",
          filter: "warm",
          capStyle: "bare",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "lookbook",
          cat: "💄 Fashion",
          name: "Lookbook",
          desc: "Pan sepia editorial",
          dur: 2.5,
          effect: "panL",
          trans: "black",
          fit: "cover",
          filter: "sepia",
          capStyle: "minimal",
          font: "'Playfair Display',serif",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "street",
          cat: "💄 Fashion",
          name: "Street Style",
          desc: "Rotate cyber urban",
          dur: 1.2,
          effect: "rotateL",
          trans: "lime",
          fit: "cover",
          filter: "cyber",
          capStyle: "shadow",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "top",
          tc: "uppercase",
        },
        {
          id: "flash-promo",
          cat: "🎉 Event",
          name: "Season Sale",
          desc: "Flash สาดสี ลดใหญ่",
          dur: 1.0,
          effect: "zoomIn",
          trans: "pink",
          fit: "cover",
          filter: "vivid",
          capStyle: "ticker",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "launch",
          cat: "🎉 Event",
          name: "Product Launch",
          desc: "Dramatic reveal black",
          dur: 3.0,
          effect: "zoomIn",
          trans: "black",
          fit: "contain",
          filter: "mono",
          capStyle: "neon",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "middle",
          tc: "uppercase",
        },
        {
          id: "holiday",
          cat: "🎉 Event",
          name: "Holiday Promo",
          desc: "Warm vivid เทศกาล",
          dur: 2.0,
          effect: "kenburns",
          trans: "white",
          fit: "cover",
          filter: "sunset",
          capStyle: "fill",
          font: "'Kanit',sans-serif",
          fw: "800",
          capPos: "bottom",
          tc: "none",
        },
        // Auto-wheel shop specific
        {
          id: "wheel-reveal",
          cat: "🚗 Auto",
          name: "Wheel Reveal",
          desc: "Ken Burns rim showcase",
          dur: 3.0,
          effect: "kenburns",
          trans: "lime",
          fit: "contain",
          filter: "punch",
          capStyle: "neon",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "uppercase",
        },
        {
          id: "stance-shot",
          cat: "🚗 Auto",
          name: "Stance Shot",
          desc: "Pan low angle flush",
          dur: 2.5,
          effect: "panL",
          trans: "black",
          fit: "cover",
          filter: "mono",
          capStyle: "shadow",
          font: "'Bebas Neue',sans-serif",
          fw: "700",
          capPos: "bottom",
          tc: "uppercase",
        },
        {
          id: "workshop",
          cat: "🚗 Auto",
          name: "Workshop ASMR",
          desc: "Warm pan กระบวนการ",
          dur: 3.0,
          effect: "panU",
          trans: "black",
          fit: "cover",
          filter: "warm",
          capStyle: "minimal",
          font: "'Kanit',sans-serif",
          fw: "600",
          capPos: "bottom",
          tc: "none",
        },
        {
          id: "fitment",
          cat: "🚗 Auto",
          name: "Fitment Check",
          desc: "Zoom in detail spec",
          dur: 2.0,
          effect: "zoomIn",
          trans: "white",
          fit: "contain",
          filter: "none",
          capStyle: "lime",
          font: "'JetBrains Mono',monospace",
          fw: "700",
          capPos: "bottom",
          tc: "none",
        },
      ];

      // ══════════════════════════════════════════════════════════════
      // 📊 VISUALIZATION MODULE - Enhanced Effects Engine
      // ══════════════════════════════════════════════════════════════
       
      // Helper function
      const $ = (id) => document.getElementById(id);

      // Advanced transform calculator with easing support
      const VISUALIZATION_MODULE = {
        // Easing functions for smooth animations
        easing: {
          linear: (t) => t,
          easeIn: (t) => t * t,
          easeOut: (t) => 1 - (1 - t) * (1 - t),
          easeInOut: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
          cubic: (t) => 1 - Math.pow(1 - t, 3),
          elastic: (t) => t === 0 || t === 1 ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI),
          bounce: (t) => {
            const n = 7 * t * t * t * t * t + t * t * t;
            return n > 1 ? 1 - (n - 1) : n;
          }
        },
        
        // Enhanced transform calculation with easing
        calcTransform(effect, pct, easing = "linear") {
          const eased = this.easing[easing] ? this.easing[easing](pct) : pct;
          let scale = 1, tx = 0, ty = 0, rot = 0;
          
          switch (effect) {
            case "zoomIn": scale = 1 + 0.32 * eased; break;
            case "zoomOut": scale = 1.32 - 0.32 * eased; break;
            case "panL": scale = 1.16; tx = 7 - 14 * eased; break;
            case "panR": scale = 1.16; tx = -7 + 14 * eased; break;
            case "panU": scale = 1.16; ty = 7 - 14 * eased; break;
            case "panD": scale = 1.16; ty = -7 + 14 * eased; break;
            case "kenburns": scale = 1 + 0.3 * eased; tx = -6 * eased; ty = -6 * eased; break;
            case "slideIn": scale = 1; tx = 25 * (1 - eased); break;
            case "slideInR": scale = 1; tx = -25 * (1 - eased); break;
            case "slideUp": scale = 1; ty = 25 * (1 - eased); break;
            case "slideDown": scale = 1; ty = -25 * (1 - eased); break;
            case "rotateL": scale = 1 + 0.12 * eased; rot = -3 + 6 * eased; break;
            case "rotateR": scale = 1 + 0.12 * eased; rot = 3 - 6 * eased; break;
            case "drift": scale = 1.05 + 0.12 * eased; tx = -3 + 6 * eased; ty = -3 + 6 * eased; break;
            case "rise": scale = 1.05 - 0.05 * eased; ty = 12 * (1 - eased); break;
            case "wobble": scale = 1.1 + 0.03 * eased; rot = -5 + 10 * eased; break;
            case "spinPop": scale = 0.55 + 0.55 * eased; rot = -45 * (1 - eased); break;
            case "breathe": scale = 1.02 + 0.12 * Math.sin(Math.PI * eased); break;
            default: scale = 1.02 + 0.02 * eased;
          }
          
          return { scale, tx, ty, rot };
        },
        
        // Quick preview for hover effects
        previewTransform(effect) {
          return this.calcTransform(effect, 0.5);
        }
      };

      // Enhanced calcTransform that uses the visualization module
      function calcTransform(effect, pct) {
        return VISUALIZATION_MODULE.calcTransform(effect, pct, "easeOut");
      }

      // ── DOM REFS ──
       const frame = $("frame"),
         flash = $("flash"),
         emptyState = $("emptyState");
       const seekFill = $("seekFill"),
         seekThumb = $("seekThumb"),
         seekWrap = $("seekWrap");
       const tc = $("tc"),
         playBtn = $("playBtn"),
         restartBtn = $("restartBtn");
       const stepBackBtn = $("stepBackBtn"),
         stepFwdBtn = $("stepFwdBtn");
       const shotBadge = $("shotBadge"),
         playhead = $("playhead"),
         tlTracks = $("tlTracks");
       const tlVideo = $("tlVideo"),
         tlAudio = $("tlAudio"),
         tlText = $("tlText"),
         tlTrans = $("tlTrans");
       const tlAudioClip = $("tlAudioClip"),
         tlDur = $("tlDur");
       const aname = $("aname"),
         aVol = $("aVol"),
         aVolV = $("aVolV"),
         audioClearBtn = $("audioClearBtn");

       // ── STATE ──
      let queue = [],
        timeline = [],
        totalDur = 0;
      let playing = false,
        startTime = null,
        rafId = null,
        elapsed0 = 0;
      let currentRatio = "9/16",
        zoomLvl = 1,
        playSpeed = 1,
        loopMode = false;
      let bpmVal = 120,
        tapTimes = [],
        dragSrcIdx = null,
        isDragging = false;
      let audioEl = null,
        audioCtx = null,
        audioSrcNode = null,
        audioDest = null;
      let hist = [],
        histIdx = -1,
        imgCache = {};
      let activeFilter = "all";

      // ── TOAST ──
      function toast(msg, type = "i") {
        const w = $("toastWrap"),
          t = document.createElement("div");
        t.className = "toast toast-" + type;
        t.textContent = msg;
        w.appendChild(t);
        requestAnimationFrame(() => t.classList.add("show"));
        setTimeout(() => {
          t.classList.remove("show");
          setTimeout(() => t.remove(), 250);
        }, 2600);
      }

      // ── PANEL TABS ──
      document.querySelectorAll(".ptab").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".ptab")
            .forEach((b) => b.classList.remove("active"));
          document
            .querySelectorAll(".pane")
            .forEach((p) => p.classList.remove("show"));
          btn.classList.add("active");
          $("pane-" + btn.dataset.pane).classList.add("show");
        });
      });

      // ── POPULATE EFFECT SELECT ──
      const gEffEl = $("gEffect");
      Object.entries(EFFECTS).forEach(([k, v]) => {
        const o = document.createElement("option");
        o.value = k;
        o.textContent = v.label;
        gEffEl.appendChild(o);
      });

      // ── SLIDER VALUE DISPLAY ──
      ["gBright", "gContrast", "gSat"].forEach((id) => {
        $(id).addEventListener("input", (e) => {
          $(id + "V").textContent = parseFloat(e.target.value).toFixed(2);
        });
      });
      aVol.addEventListener("input", (e) => {
        aVolV.textContent = Math.round(e.target.value * 100) + "%";
        if (audioEl) audioEl.volume = parseFloat(e.target.value);
      });

      // ── HISTORY ──
      function saveHist() {
        hist = hist.slice(0, histIdx + 1);
        hist.push(JSON.parse(JSON.stringify(queue)));
        if (hist.length > 50) hist.shift();
        histIdx = hist.length - 1;
        updateHistBtns();
      }
      function updateHistBtns() {
        $("undoBtn").disabled = histIdx <= 0;
        $("redoBtn").disabled = histIdx >= hist.length - 1;
      }
      $("undoBtn").addEventListener("click", () => {
        if (histIdx <= 0) return;
        histIdx--;
        queue = JSON.parse(JSON.stringify(hist[histIdx]));
        renderQueue();
        syncPlayer();
        toast("Undo", "i");
      });
      $("redoBtn").addEventListener("click", () => {
        if (histIdx >= hist.length - 1) return;
        histIdx++;
        queue = JSON.parse(JSON.stringify(hist[histIdx]));
        renderQueue();
        syncPlayer();
        toast("Redo", "i");
      });

      // ── TEMPLATES ──
      (() => {
        const cats = ["all", ...new Set(TEMPLATES.map((t) => t.cat))];
        const catRow = $("tplCatRow");
        cats.forEach((cat) => {
          const b = document.createElement("button");
          b.className = "tcat" + (cat === "all" ? " active" : "");
          b.textContent = cat === "all" ? "All" : cat;
          b.addEventListener("click", () => {
            activeFilter = cat;
            catRow
              .querySelectorAll(".tcat")
              .forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderTplGrid();
          });
          catRow.appendChild(b);
        });
        renderTplGrid();
      })();
      function renderTplGrid() {
        const grid = $("tplGrid");
        grid.innerHTML = "";
        const list =
          activeFilter === "all"
            ? TEMPLATES
            : TEMPLATES.filter((t) => t.cat === activeFilter);
        list.forEach((tpl) => {
          const catC = tpl.cat.includes("Product")
            ? "#FFAA00"
            : tpl.cat.includes("Social")
              ? "#00F0FF"
              : tpl.cat.includes("Story")
                ? "#A855F7"
                : tpl.cat.includes("Type")
                  ? "#FF2060"
                  : tpl.cat.includes("Brand")
                    ? "#C8FF00"
                    : tpl.cat.includes("Fashion")
                      ? "#FF2060"
                      : tpl.cat.includes("Auto")
                        ? "#FFAA00"
                        : "#fff";
          const card = document.createElement("div");
          card.className = "tpl-card";
          card.innerHTML = `<div class="tpl-cat-badge" style="background:${catC}22;color:${catC}">${tpl.cat}</div><div class="tpl-name">${tpl.name}</div><div class="tpl-desc">${tpl.desc}</div>`;
          card.addEventListener("click", () => applyTemplate(tpl));
          grid.appendChild(card);
        });
      }
      function applyTemplate(tpl) {
        if (!queue.length) {
          toast("Upload images first", "w");
          return;
        }
        saveHist();
        queue.forEach((item) => {
          item.duration = tpl.dur;
          item.effect = tpl.effect;
          item.transition = tpl.trans;
          item.fitMode = tpl.fit;
          item.filter = tpl.filter;
          item.capStyle = tpl.capStyle;
          item.fontFamily = tpl.font;
          item.fontWeight = tpl.fw;
          item.captionPos = tpl.capPos;
          item.textTransform = tpl.tc;
        });
        renderQueue();
        syncPlayer();
        autoSave();
        toast("✓ " + tpl.name + " applied!", "s");
      }

      // ── MEDIA PANEL ──
      $("mediaToggleBtn").addEventListener("click", () =>
        $("mpanel").classList.toggle("closed"),
      );
      $("closeMpanel").addEventListener("click", () =>
        $("mpanel").classList.add("closed"),
      );
      $("tplToggleBtn").addEventListener("click", () => {
        document.querySelectorAll(".ptab").forEach((b) => {
          b.classList.toggle("active", b.dataset.pane === "templates");
        });
        document.querySelectorAll(".pane").forEach((p) => {
          p.classList.toggle("show", p.id === "pane-templates");
        });
      });
      $("mpListBtn").addEventListener(
        "click",
        () => ($("queueList").style.display = "flex"),
      );
      $("mpGridBtn").addEventListener(
        "click",
        () => ($("queueList").style.display = "grid"),
      );

      // ── RATIO ──
      function selectRatio(r) {
        currentRatio = r;
        document
          .querySelectorAll(".r-badge[data-ratio]")
          .forEach((b) => b.classList.toggle("active", b.dataset.ratio === r));
        frame.style.aspectRatio = r;
        frame.style.maxWidth = (RATIO_MAXW[r] || 320) + "px";
      }
      document
        .querySelectorAll(".r-badge[data-ratio]")
        .forEach((b) =>
          b.addEventListener("click", () => selectRatio(b.dataset.ratio)),
        );

      // ── OVERLAY BUTTONS ──
      $("safeBtn").addEventListener("click", () =>
        $("safeZ").classList.toggle("on"),
      );
      $("gridBtn").addEventListener("click", () =>
        $("gridOv").classList.toggle("on"),
      );
      $("lboxBtn").addEventListener("click", () => {
        $("lboxOv").classList.toggle("on");
        $("vfOv").classList.remove("on");
      });
      $("vfBtn").addEventListener("click", () => {
        $("vfOv").classList.toggle("on");
        $("lboxOv").classList.remove("on");
      });
      $("logoIn").addEventListener("change", (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const img = document.createElement("img");
        img.className = "logo-ov tr";
        img.src = URL.createObjectURL(f);
        img.alt = "logo";
        frame.querySelectorAll(".logo-ov").forEach((el) => el.remove());
        window._logoEl = img;
        frame.appendChild(img);
        toast("Logo overlay added", "s");
        e.target.value = "";
      });

      // ── AUDIO ──
      $("audioIn").addEventListener("change", async (e) => {
        const f = e.target.files[0];
        if (!f) return;
        if (audioEl) {
          audioEl.pause();
          audioEl = null;
          audioSrcNode = null;
          audioDest = null;
        }
        audioEl = new Audio(URL.createObjectURL(f));
        audioEl.volume = parseFloat(aVol.value) || 1;
        aname.textContent = f.name.slice(0, 20);
        audioClearBtn.style.display = "inline-block";
        tlAudioClip.style.display = "flex";
        tlAudioClip.textContent = "🎵 " + f.name;
        toast("Audio loaded", "s");
        e.target.value = "";
        autoSave();
      });
      audioClearBtn.addEventListener("click", () => {
        if (audioEl) {
          audioEl.pause();
          audioEl = null;
        }
        aname.textContent = "None";
        audioClearBtn.style.display = "none";
        tlAudioClip.style.display = "none";
      });

      // ── ZOOM ──
      $("zoomIn").addEventListener("click", () => {
        zoomLvl = Math.min(3, zoomLvl + 0.25);
        updateZoom();
      });
      $("zoomOut").addEventListener("click", () => {
        zoomLvl = Math.max(0.3, zoomLvl - 0.25);
        updateZoom();
      });
      function updateZoom() {
        tlTracks.style.backgroundSize = 40 * zoomLvl + "px 100%";
      }

      // ── SPEED ──
      $("speedSel").addEventListener("change", (e) => {
        playSpeed = parseFloat(e.target.value) || 1;
      });
      const loopBtn = $("loopBtn");
      loopBtn.addEventListener("click", () => {
        loopMode = !loopMode;
        loopBtn.style.color = loopMode ? "var(--lime)" : "";
        toast(loopMode ? "Loop ON" : "Loop OFF", "i");
      });
      $("cntBtn").addEventListener("click", () => {
        if (!timeline.length) return;
        const ov = $("cntOv");
        ov.style.display = "flex";
        let n = 3;
        ov.textContent = n;
        const iv = setInterval(() => {
          n--;
          if (n <= 0) {
            clearInterval(iv);
            ov.style.display = "none";
            restartBtn.click();
            setTimeout(() => playBtn.click(), 60);
          } else ov.textContent = n;
        }, 900);
      });

      // ── BPM ──
      $("bpmIn").addEventListener("input", (e) => {
        bpmVal = parseFloat(e.target.value) || 120;
      });
      $("tapBtn").addEventListener("click", () => {
        const now = performance.now();
        tapTimes.push(now);
        if (tapTimes.length > 8) tapTimes.shift();
        if (tapTimes.length >= 2) {
          const gaps = [];
          for (let i = 1; i < tapTimes.length; i++)
            gaps.push(tapTimes[i] - tapTimes[i - 1]);
          const bpm = Math.round(
            60000 / (gaps.reduce((a, b) => a + b, 0) / gaps.length),
          );
          $("bpmIn").value = bpm;
          bpmVal = bpm;
          toast("BPM = " + bpm, "i");
        }
      });
      $("bpmApplyBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        const bpm = parseFloat($("bpmIn").value) || 120;
        const bps = parseInt($("bpsIn").value) || 2;
        const dur = parseFloat(((bps / bpm) * 60).toFixed(2));
        queue.forEach((item) => {
          item.duration = dur;
        });
        renderQueue();
        syncPlayer();
        toast("Duration " + dur + "s per beat", "s");
      });

      // ── GLOBAL BULK ──
      $("bulkApplyBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        const dur = parseFloat($("gDur").value) || 2.5,
          eff = $("gEffect").value;
        const trans = $("gTrans").value,
          tdur = parseFloat($("gTransDur").value) || 0.25;
        const fit = $("gFit").value,
          filter = $("gFilter").value;
        const bright = parseFloat($("gBright").value) || 1,
          cont = parseFloat($("gContrast").value) || 1;
        const sat = parseFloat($("gSat").value) || 1,
          rot = parseInt($("gRotation").value) || 0;
        const capStyle = $("gCapStyle").value,
          capPos = $("gCapPos").value;
        const align = $("gCapAlign").value,
          font = $("gFont").value;
        const fw = $("gFontW").value,
          fs = $("gFontS").value,
          tc2 = $("gTextCase").value;
        queue.forEach((item) => {
          item.duration = dur;
          item.effect = eff;
          item.transition = trans;
          item.transitionDuration = tdur;
          item.fitMode = fit;
          item.filter = filter;
          item.brightness = bright;
          item.contrast = cont;
          item.saturation = sat;
          item.rotation = rot;
          item.capStyle = capStyle;
          item.captionPos = capPos;
          item.captionAlign = align;
          item.fontFamily = font;
          item.fontWeight = fw;
          item.fontSize = fs;
          item.textTransform = tc2;
        });
        renderQueue();
        syncPlayer();
        autoSave();
        toast("Applied to all", "s");
      });
      $("shuffleBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        for (let i = queue.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [queue[i], queue[j]] = [queue[j], queue[i]];
        }
        renderQueue();
        syncPlayer();
        toast("Shuffled", "i");
      });
      $("reverseBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        queue.reverse();
        renderQueue();
        syncPlayer();
        toast("Reversed", "i");
      });
      $("autoAltBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        queue.forEach((item, i) => {
          item.effect = i % 2 === 0 ? "zoomIn" : "zoomOut";
        });
        renderQueue();
        syncPlayer();
        toast("Alt Zoom applied", "s");
      });
      $("altTransBtn").addEventListener("click", () => {
        if (!queue.length) return;
        saveHist();
        const ts = ["lime", "white", "black", "pink"];
        queue.forEach((item, i) => {
          item.transition = ts[i % ts.length];
        });
        renderQueue();
        syncPlayer();
        toast("Transitions cycled", "s");
      });

      // ── PLAYER ──
      function syncPlayer() {
        playing = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        playBtn.textContent = "▶";
        startTime = null;
        elapsed0 = 0;
        frame.querySelectorAll(".slide,.caption").forEach((el) => el.remove());

        if (!queue.length) {
          timeline = [];
          totalDur = 0;
          emptyState.style.display = "flex";
          shotBadge.textContent = "0 shots";
          tlDur.textContent = "0.0s";
          [
            playBtn,
            restartBtn,
            stepBackBtn,
            stepFwdBtn,
            $("exportVideoBtn"),
            $("expVideoBtnP"),
            $("expFrameBtn"),
            $("cntBtn"),
          ].forEach((b) => {
            if (b) b.disabled = true;
          });
          updateSeek(0);
          renderTlTracks();
          return;
        }
        emptyState.style.display = "none";
        [
          playBtn,
          restartBtn,
          stepBackBtn,
          stepFwdBtn,
          $("exportVideoBtn"),
          $("expVideoBtnP"),
        ].forEach((b) => {
          if (b) b.disabled = false;
        });
        $("expFrameBtn").disabled = false;
        $("cntBtn").disabled = false;

        let t = 0;
        timeline = queue.map((item) => ({
          dataUrl: item.dataUrl || "",
          start: t,
          dur: parseFloat(item.duration) || 2.5,
          effect: item.effect || "zoomIn",
          caption: item.caption ? item.caption.trim() : null,
          captionPos: item.captionPos || "bottom",
          capStyle: item.capStyle || "lime",
          captionAlign: item.captionAlign || "c",
          transition: item.transition || "lime",
          transitionDuration: parseFloat(item.transitionDuration) || 0.25,
          fontFamily: item.fontFamily || "'Syne',sans-serif",
          fontWeight: item.fontWeight || "800",
          fontSize: item.fontSize || "medium",
          textTransform: item.textTransform || "none",
          fitMode: item.fitMode || "contain",
          filter: item.filter || "none",
          brightness: parseFloat(item.brightness) || 1,
          contrast: parseFloat(item.contrast) || 1,
          saturation: parseFloat(item.saturation) || 1,
          rotation: parseInt(item.rotation) || 0,
          _end: ((t += parseFloat(item.duration) || 2.5), t),
        }));
        totalDur = t;
        shotBadge.textContent = queue.length + " shots";
        tlDur.textContent = totalDur.toFixed(1) + "s";

        timeline.forEach((s, i) => {
          const el = document.createElement("div");
          const lut = s.filter && s.filter !== "none" ? "lut-" + s.filter : "";
          el.className =
            "slide " +
            (s.fitMode === "contain" ? "fit-contain" : "fit-cover") +
            " " +
            lut;
          el.id = "slide-" + i;
          const bgb = document.createElement("img");
          bgb.className = "bg-blur";
          bgb.src = s.dataUrl;
          bgb.alt = "";
          el.appendChild(bgb);
          const img = document.createElement("img");
          img.className = "fg";
          img.src = s.dataUrl;
          img.id = "img-" + i;
          img.alt = "";
          // apply brightness/contrast/saturation via CSS filter
          let fstr = LUT_CSS[s.filter] || "";
          fstr +=
            " brightness(" +
            s.brightness +
            ") contrast(" +
            s.contrast +
            ") saturate(" +
            s.saturation +
            ")";
          img.style.filter = fstr.trim();
          const t0 = calcTransform(s.effect, 0);
          img.style.transform = `scale(${t0.scale}) translate(${t0.tx}%,${t0.ty}%) rotate(${t0.rot + s.rotation}deg)`;
          el.appendChild(img);
          frame.insertBefore(el, flash);
          if (s.caption) {
            const cap = document.createElement("div");
            cap.className = `caption pos-${s.captionPos} cs-${s.capStyle} align-${s.captionAlign}`;
            cap.id = "cap-" + i;
            const span = document.createElement("span");
            span.textContent =
              s.textTransform === "uppercase"
                ? s.caption.toUpperCase()
                : s.caption;
            span.style.fontFamily = s.fontFamily;
            span.style.fontWeight = s.fontWeight;
            span.style.fontSize =
              s.fontSize === "small"
                ? "clamp(10px,2.8vw,14px)"
                : s.fontSize === "large"
                  ? "clamp(16px,4.5vw,22px)"
                  : "clamp(12px,3.5vw,17px)";
            cap.appendChild(span);
            frame.appendChild(cap);
          }
        });
        if (window._logoEl) {
          const c = window._logoEl.cloneNode();
          frame.appendChild(c);
        }
        // watermark
        const wm = $("gWM").value.trim();
        $("wmOv").textContent = wm;
        $("wmOv").style.display = wm ? "block" : "none";
        // progress burn
        const pb = $("gProgBurn").value;
        const pbEl = $("progBurn");
        pbEl.style.display = pb !== "none" ? "block" : "none";
        if (pb === "bottom") {
          pbEl.classList.remove("top");
          pbEl.style.background = "var(--lime)";
        }
        if (pb === "top") {
          pbEl.classList.add("top");
          pbEl.style.background = "var(--pink)";
        }

        resetPlayer();
        renderTlTracks();
      }

      function resetPlayer() {
        timeline.forEach((s, i) => {
          const slide = $("slide-" + i),
            img = $("img-" + i),
            cap = $("cap-" + i);
          if (slide) slide.classList.remove("show");
          if (img) {
            img.style.animation = "none";
            img.style.transition = "none";
            void img.offsetWidth;
            const t0 = calcTransform(s.effect, 0);
            img.style.transform = `scale(${t0.scale}) translate(${t0.tx}%,${t0.ty}%) rotate(${t0.rot + s.rotation}deg)`;
          }
          if (cap) cap.classList.remove("show");
        });
        updateSeek(0);
        if (audioEl) {
          audioEl.currentTime = 0;
          audioEl.pause();
        }
      }

      function updateSeek(el) {
        const pct = totalDur ? Math.min(100, (el / totalDur) * 100) : 0;
        seekFill.style.width = pct + "%";
        seekThumb.style.left = pct + "%";
        playhead.style.left = pct + "%";
        tc.textContent = el.toFixed(1) + "s / " + totalDur.toFixed(1) + "s";
        if ($("gProgBurn").value !== "none")
          $("progBurn").style.width = pct + "%";
      }

      let curShotIdx = -1;
      function tick(ts) {
        if (!playing) return;
        if (!startTime) startTime = ts - elapsed0 * 1000;
        const el = ((ts - startTime) / 1000) * playSpeed;
        if (el >= totalDur) {
          playing = false;
          playBtn.textContent = "▶";
          cancelAnimationFrame(rafId);
          rafId = null;
          if (audioEl) audioEl.pause();
          if (loopMode) {
            setTimeout(() => {
              resetPlayer();
              elapsed0 = 0;
              playing = true;
              playBtn.textContent = "⏸";
              startTime = null;
              rafId = requestAnimationFrame(tick);
              if (audioEl) {
                audioEl.currentTime = 0;
                audioEl.play().catch(() => {});
              }
            }, 150);
          }
          return;
        }
        elapsed0 = el;
        timeline.forEach((s, i) => {
          const slide = $("slide-" + i),
            img = $("img-" + i),
            cap = $("cap-" + i);
          const inShot = el >= s.start && el < s._end;
          if (inShot) {
            if (!slide.classList.contains("show")) {
              slide.classList.add("show");
              flash.className = "flash";
              void flash.offsetWidth;
              if (s.transition === "lime") flash.classList.add("fl-lime");
              else if (s.transition === "white")
                flash.classList.add("fl-white");
              else if (s.transition === "black")
                flash.classList.add("fl-black");
              else if (s.transition === "pink") flash.classList.add("fl-pink");
              img.style.animation = "none";
              img.style.transition = "none";
              void img.offsetWidth;
              const t0 = calcTransform(s.effect, 0);
              img.style.transform = `scale(${t0.scale}) translate(${t0.tx}%,${t0.ty}%) rotate(${t0.rot + s.rotation}deg)`;
              requestAnimationFrame(() => {
                img.style.transition = "transform " + s.dur + "s linear";
                const t1 = calcTransform(s.effect, 1);
                img.style.transform = `scale(${t1.scale}) translate(${t1.tx}%,${t1.ty}%) rotate(${t1.rot + s.rotation}deg)`;
              });
              curShotIdx = i;
              document
                .querySelectorAll(".qitem")
                .forEach((el2) => el2.classList.remove("active-shot"));
              document
                .querySelector('.qitem[data-idx="' + i + '"]')
                ?.classList.add("active-shot");
            }
            if (cap) {
              cap.classList.add("show");
              const lt = el - s.start;
              if (lt < 0.4) {
                cap.style.opacity = lt / 0.4;
                cap.style.transform =
                  "translateY(" + 10 * (1 - lt / 0.4) + "px)";
              } else {
                cap.style.opacity = "";
                cap.style.transform = "";
              }
            }
          } else {
            if (slide.classList.contains("show"))
              slide.classList.remove("show");
            if (cap && cap.classList.contains("show"))
              cap.classList.remove("show");
          }
        });
        updateSeek(el);
        if (audioEl && audioEl.paused && playing)
          audioEl.play().catch(() => {});
        rafId = requestAnimationFrame(tick);
      }

      playBtn.addEventListener("click", () => {
        if (!timeline.length) return;
        if (playing) {
          playing = false;
          playBtn.textContent = "▶";
          cancelAnimationFrame(rafId);
          rafId = null;
          if (audioEl) audioEl.pause();
        } else {
          playing = true;
          playBtn.textContent = "⏸";
          startTime = null;
          rafId = requestAnimationFrame(tick);
          if (audioEl) {
            audioEl.currentTime = elapsed0;
            audioEl.play().catch(() => {});
          }
        }
      });
      restartBtn.addEventListener("click", () => {
        playing = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        playBtn.textContent = "▶";
        startTime = null;
        elapsed0 = 0;
        curShotIdx = -1;
        resetPlayer();
      });
      stepBackBtn.addEventListener("click", () =>
        seekShot(Math.max(0, curShotIdx - 1)),
      );
      stepFwdBtn.addEventListener("click", () =>
        seekShot(Math.min(timeline.length - 1, curShotIdx + 1)),
      );
      function seekShot(i) {
        if (!timeline.length) return;
        playing = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        playBtn.textContent = "▶";
        resetPlayer();
        const s = timeline[i];
        if (!s) return;
        $("slide-" + i)?.classList.add("show");
        updateSeek(s.start);
        curShotIdx = i;
        elapsed0 = s.start;
      }

      // SEEK by click
      seekWrap.addEventListener("mousedown", (e) => {
        isDragging = true;
        doSeek(e.clientX);
      });
      window.addEventListener("mousemove", (e) => {
        if (isDragging) doSeek(e.clientX);
      });
      window.addEventListener("mouseup", () => {
        isDragging = false;
      });
      seekWrap.addEventListener(
        "touchstart",
        (e) => {
          isDragging = true;
          if (e.touches[0]) doSeek(e.touches[0].clientX);
        },
        { passive: true },
      );
      seekWrap.addEventListener(
        "touchmove",
        (e) => {
          if (isDragging && e.touches[0]) doSeek(e.touches[0].clientX);
        },
        { passive: true },
      );
      window.addEventListener("touchend", () => {
        isDragging = false;
      });
      function doSeek(cx) {
        if (!totalDur) return;
        const r = seekWrap.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (cx - r.left) / r.width));
        elapsed0 = pct * totalDur;
        if (playing) {
          startTime = performance.now() - elapsed0 * 1000;
          if (audioEl) audioEl.currentTime = elapsed0;
        }
        updateSeek(elapsed0);
        const t = elapsed0;
        let idx = 0;
        timeline.forEach((s, i) => {
          if (t >= s.start) idx = i;
        });
        seekShot(idx);
      }
      // Timeline body seek
      $("tlBody").addEventListener("mousedown", (e) => {
        if (e.target.closest(".tl-labels")) return;
        if (!totalDur) return;
        const r = tlTracks.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        elapsed0 = pct * totalDur;
        if (playing) {
          startTime = performance.now() - elapsed0 * 1000;
        }
        updateSeek(elapsed0);
      });

      // ── TIMELINE TRACKS ──
      function renderTlTracks() {
        tlVideo.innerHTML = "";
        tlText.innerHTML = "";
        tlTrans.innerHTML = "";
        if (!timeline.length) return;
        const w = zoomLvl;
        timeline.forEach((s, i) => {
          const pw = Math.max((s.dur / totalDur) * 100 * w, 3);
          const v = document.createElement("div");
          v.className = "tl-clip cv";
          v.style.width = pw + "%";
          v.title = "Shot " + (i + 1);
          v.textContent = "S" + (i + 1);
          tlVideo.appendChild(v);
          const tr = document.createElement("div");
          tr.className = "tl-clip ctr";
          tr.style.width = pw + "%";
          tr.textContent =
            s.transition !== "none" ? s.transition.slice(0, 4) : "—";
          tlTrans.appendChild(tr);
          const tx = document.createElement("div");
          tx.className = "tl-clip ct";
          tx.style.width = pw + "%";
          tx.textContent = s.caption ? "TXT" : "—";
          tlText.appendChild(tx);
        });
      }

      // ── QUEUE RENDER ──
      function renderQueue() {
        const ql = $("queueList");
        ql.innerHTML = "";
        if (!queue.length) {
          ql.innerHTML =
            '<div style="font-size:10px;color:var(--muted);text-align:center;padding:18px;">No media. Upload images.</div>';
          updateState();
          return;
        }
        queue.forEach((item, i) => {
          const row = document.createElement("div");
          row.className = "qitem";
          row.dataset.idx = i;
          row.draggable = true;
          row.innerHTML = `<img src="${item.dataUrl}" alt="" draggable="false"><div class="qitem-info"><div class="qitem-title">${i === 0 ? "🎬 " : ""} Shot ${i + 1}</div><div class="qitem-sub">${item.duration || 2.5}s · ${(EFFECTS[item.effect || "zoomIn"]?.label || "").replace(/ .*/, "")}</div></div><div class="qitem-acts"><button data-act="up" data-i="${i}" title="↑">↑</button><button data-act="dup" data-i="${i}" title="⧉">⧉</button><button data-act="del" data-i="${i}" title="✕">✕</button></div>`;
          ql.appendChild(row);
        });
        ql.querySelectorAll("[data-act]").forEach((btn) =>
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const i = +btn.dataset.i,
              act = btn.dataset.act;
            saveHist();
            if (act === "del") queue.splice(i, 1);
            if (act === "dup") {
              if (queue.length >= MAX_Q) {
                toast("Max " + MAX_Q, "e");
                return;
              }
              queue.splice(i + 1, 0, { ...queue[i] });
            }
            if (act === "up" && i > 0)
              [queue[i - 1], queue[i]] = [queue[i], queue[i - 1]];
            renderQueue();
            syncPlayer();
            autoSave();
          }),
        );
        // drag to reorder
        ql.querySelectorAll(".qitem").forEach((row) => {
          row.addEventListener("dragstart", (e) => {
            dragSrcIdx = +row.dataset.idx;
            row.style.opacity = ".4";
            e.dataTransfer.effectAllowed = "move";
          });
          row.addEventListener("dragend", () => {
            row.style.opacity = "";
            ql.querySelectorAll(".qitem").forEach(
              (r) => (r.style.borderTop = ""),
            );
          });
          row.addEventListener("dragover", (e) => {
            e.preventDefault();
            ql.querySelectorAll(".qitem").forEach(
              (r) => (r.style.borderTop = ""),
            );
            row.style.borderTop = "2px solid var(--cyan)";
          });
          row.addEventListener("drop", (e) => {
            e.preventDefault();
            row.style.borderTop = "";
            const dest = +row.dataset.idx;
            if (dragSrcIdx === null || dragSrcIdx === dest) return;
            saveHist();
            const [m] = queue.splice(dragSrcIdx, 1);
            queue.splice(dest, 0, m);
            dragSrcIdx = null;
            renderQueue();
            syncPlayer();
            autoSave();
          });
        });
        updateState();
      }

      // ── STATE UPDATE ──
      function updateState() {
        const has = queue.length > 0;
        [
          "buildBtn",
          "clearBtn",
          "exportBtn",
          "exportVideoBtn",
          "expProjBtn",
          "expShotBtn",
          "expFrameBtn",
          "expVideoBtnP",
        ].forEach((id) => {
          const el = $(id);
          if (el) el.disabled = !has;
        });
        updateHistBtns();
        renderSlots();
      }

      // ── ADD FILES ──
      async function addFiles(fileList) {
        const arr = Array.from(fileList);
        if (!arr.length) return;
        const room = MAX_Q - queue.length,
          toProc = arr.slice(0, room);
        if (arr.length > room) toast("Max " + MAX_Q + " shots", "w");
        if (!toProc.length) return;
        const lb = $("loadBar");
        lb.style.display = "block";
        let done = 0,
          failed = 0;
        const q = parseInt($("impQ").value) || 1080;
        for (const file of toProc) {
          try {
            const dataUrl = await resizeImage(file, q);
            queue.push({
              dataUrl,
              duration: parseFloat($("gDur").value) || 2.5,
              effect: $("gEffect").value || "zoomIn",
              caption: "",
              captionPos: $("gCapPos").value || "bottom",
              capStyle: $("gCapStyle").value || "lime",
              captionAlign: $("gCapAlign").value || "c",
              transition: $("gTrans").value || "lime",
              transitionDuration: parseFloat($("gTransDur").value) || 0.25,
              fitMode: $("gFit").value || "contain",
              filter: $("gFilter").value || "none",
              fontFamily: $("gFont").value || "'Syne',sans-serif",
              fontWeight: $("gFontW").value || "800",
              fontSize: $("gFontS").value || "medium",
              textTransform: $("gTextCase").value || "none",
              brightness: parseFloat($("gBright").value) || 1,
              contrast: parseFloat($("gContrast").value) || 1,
              saturation: parseFloat($("gSat").value) || 1,
              rotation: parseInt($("gRotation").value) || 0,
            });
          } catch (e) {
            failed++;
          }
          done++;
          $("loadFill").style.width = (done / toProc.length) * 100 + "%";
          $("loadTxt").textContent = "Processing " + done + "/" + toProc.length;
        }
        lb.style.display = "none";
        saveHist();
        renderQueue();
        syncPlayer();
        autoSave();
        toast(
          failed
            ? failed + " failed"
            : "✓ " + toProc.length + " images imported",
          failed ? "e" : "s",
        );
        $("mpanel").classList.remove("closed");
      }

      function resizeImage(file, maxDim) {
        return new Promise((resolve, reject) => {
          if (
            !file.type.startsWith("image/") &&
            !/\.(jpe?g|png|gif|webp|avif|bmp)$/i.test(file.name)
          ) {
            reject(new Error("not image"));
            return;
          }
          const url = URL.createObjectURL(file);
          const img = new Image();
          img.onload = () => {
            URL.revokeObjectURL(url);
            try {
              let w = img.naturalWidth,
                h = img.naturalHeight;
              if (!w || !h) throw new Error("bad dim");
              if (
                maxDim &&
                maxDim !== "original" &&
                (w > maxDim || h > maxDim)
              ) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              const c = document.createElement("canvas");
              c.width = w;
              c.height = h;
              c.getContext("2d").drawImage(img, 0, 0, w, h);
              c.toBlob(
                (b) => {
                  b
                    ? resolve(URL.createObjectURL(b))
                    : reject(new Error("blob fail"));
                },
                "image/jpeg",
                0.85,
              );
            } catch (e) {
              reject(e);
            }
          };
          img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("load fail"));
          };
          img.src = url;
        });
      }

      // FILE INPUT / DROP
      const fileIn = $("fileIn"),
        dropZone = $("dropZone");
      fileIn.addEventListener("change", (e) => {
        addFiles(e.target.files);
        fileIn.value = "";
      });
      dropZone.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          fileIn.click();
        }
      });
      ["dragenter", "dragover"].forEach((ev) =>
        dropZone.addEventListener(ev, (e) => {
          e.preventDefault();
          dropZone.classList.add("dragover");
        }),
      );
      ["dragleave", "drop"].forEach((ev) =>
        dropZone.addEventListener(ev, (e) => {
          e.preventDefault();
          dropZone.classList.remove("dragover");
        }),
      );
      dropZone.addEventListener("drop", (e) => {
        if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
      });

      // BUILD
      $("buildBtn").addEventListener("click", () => {
        if (!queue.length) {
          toast("Upload images first", "e");
          return;
        }
        syncPlayer();
        renderTlTracks();
        toast("▶ Press play to preview", "s");
        autoSave();
      });

      // CLEAR
      $("clearBtn").addEventListener("click", () => {
        if (!queue.length) return;
        if (!confirm("Clear all " + queue.length + " shots?")) return;
        saveHist();
        queue = [];
        renderQueue();
        syncPlayer();
        if (audioEl) {
          audioEl.pause();
          audioEl = null;
          aname.textContent = "None";
          audioClearBtn.style.display = "none";
          tlAudioClip.style.display = "none";
        }
        toast("Cleared", "i");
        autoSave();
      });

      // ── EXPORT PROJECT JSON ──
      $("exportBtn").addEventListener("click", async () => {
        if (!queue.length) return;
        toast("Saving...", "i");
        try {
          const enc = [];
          for (const item of queue) {
            let url = item.dataUrl;
            if (url && url.startsWith("blob:")) {
              const r = await fetch(url);
              const b = await r.blob();
              url = await new Promise((res) => {
                const rd = new FileReader();
                rd.onloadend = () => res(rd.result);
                rd.readAsDataURL(b);
              });
            }
            enc.push({ ...item, dataUrl: url });
          }
          const data = { v: 5, ratio: currentRatio, queue: enc };
          const blob = new Blob([JSON.stringify(data)], {
            type: "application/json",
          });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = "clipforge-project.json";
          document.body.appendChild(a);
          a.click();
          a.remove();
          toast("Project saved", "s");
        } catch (e) {
          toast("Save failed", "e");
        }
      });
      $("expProjBtn").addEventListener("click", () => $("exportBtn").click());

      // IMPORT PROJECT
      $("importBtn").addEventListener("click", () => $("importInput").click());
      $("impProjBtn").addEventListener("click", () => $("importInput").click());
      $("importInput").addEventListener("change", (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = async (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            if (!data.queue || !Array.isArray(data.queue))
              throw new Error("bad");
            toast("Loading project...", "i");
            const imported = [];
            for (const item of data.queue) {
              let url = item.dataUrl;
              if (url && url.startsWith("data:image/")) {
                const res = await fetch(url);
                const b = await res.blob();
                url = URL.createObjectURL(b);
              }
              if (
                !url ||
                (!url.startsWith("blob:") && !url.startsWith("data:"))
              )
                continue;
              imported.push({ ...item, dataUrl: url });
            }
            queue = imported;
            saveHist();
            renderQueue();
            if (data.ratio) selectRatio(data.ratio);
            syncPlayer();
            toast("Loaded " + queue.length + " shots", "s");
          } catch (e) {
            toast("Invalid project file", "e");
          }
        };
        r.onerror = () => toast("Read error", "e");
        r.readAsText(f);
        e.target.value = "";
      });

      // SHOT LIST
      $("expShotBtn").addEventListener("click", () => {
        if (!queue.length) return;
        let txt =
          "ClipForge PRO — Shot List\n" +
          new Date().toLocaleString() +
          "\n" +
          "─".repeat(48) +
          "\n";
        let t = 0;
        queue.forEach((item, i) => {
          txt += `Shot ${String(i + 1).padStart(2, "0")} | ${t.toFixed(2)}s–${(t + parseFloat(item.duration || 2.5)).toFixed(2)}s | ${item.duration || 2.5}s | ${EFFECTS[item.effect || "zoomIn"]?.label || item.effect} | LUT:${item.filter || "none"} | Trans:${item.transition || "lime"}`;
          if (item.caption) txt += ` | "${item.caption}"`;
          txt += "\n";
          t += parseFloat(item.duration) || 2.5;
        });
        txt +=
          "─".repeat(48) +
          "\nTotal: " +
          queue.length +
          " shots | " +
          t.toFixed(2) +
          "s\n";
        const blob = new Blob([txt], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "shotlist.txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        toast("Shot list exported", "s");
      });

      // SAVE FRAME
      $("expFrameBtn").addEventListener("click", () => {
        if (!timeline.length) return;
        const i = Math.max(0, curShotIdx);
        const s = timeline[i];
        if (!s) return;
        const img2 = new Image();
        img2.src = s.dataUrl;
        img2.onload = () => {
          const c = document.createElement("canvas");
          c.width = img2.width;
          c.height = img2.height;
          c.getContext("2d").drawImage(img2, 0, 0);
          const a = document.createElement("a");
          a.href = c.toDataURL("image/jpeg", 0.92);
          a.download = "frame-" + i + ".jpg";
          document.body.appendChild(a);
          a.click();
          a.remove();
          toast("Frame saved", "s");
        };
      });

      // ── AUTOSAVE ──
      function autoSave() {
        try {
          localStorage.setItem(
            "clipforge_v5_auto",
            JSON.stringify({
              v: 5,
              ratio: currentRatio,
              qSnap: queue.map((item) => ({
                ...item,
                dataUrl: item.dataUrl?.startsWith("data:")
                  ? item.dataUrl
                  : "__blob__",
              })),
            }),
          );
        } catch (e) {}
      }
      function checkRecovery() {
        try {
          const saved = localStorage.getItem("clipforge_v5_auto");
          if (!saved) return;
          const d = JSON.parse(saved);
          if (d.queue?.length || d.qSnap?.length) {
            const n = (d.queue || d.qSnap || []).length;
            $("recovCount").textContent = n;
            $("recovBar").style.display = "flex";
          }
        } catch (e) {}
      }
      $("recovLoad").addEventListener("click", () => {
        try {
          const saved = localStorage.getItem("clipforge_v5_auto");
          if (!saved) return;
          const d = JSON.parse(saved);
          toast("Restore not available for blob URLs. Please re-upload.", "w");
          if (d.ratio) selectRatio(d.ratio);
          $("recovBar").style.display = "none";
        } catch (e) {
          toast("Restore failed", "e");
        }
      });
      $("recovDismiss").addEventListener("click", () => {
        $("recovBar").style.display = "none";
        localStorage.removeItem("clipforge_v5_auto");
      });

      // ── PROJECT SLOTS ──
      function renderSlots() {
        const w = $("slotsWrap");
        w.innerHTML = "";
        for (let i = 0; i < N_SLOTS; i++) {
          let saved = null;
          try {
            saved = JSON.parse(
              localStorage.getItem("cf_v5_slot_" + i) || "null",
            );
          } catch (e) {}
          const btn = document.createElement("button");
          btn.className = "rbar-btn";
          btn.style.padding = "4px 9px";
          btn.textContent = saved
            ? "💾 " + (saved.name || "Slot" + i).slice(0, 8)
            : "○ Slot " + i;
          btn.style.borderColor = saved ? "var(--violet)" : "var(--border)";
          btn.style.color = saved ? "var(--violet)" : "var(--muted)";
          btn.addEventListener("click", () => {
            const choice = prompt(
              saved
                ? `Slot ${i}: "${saved.name || "?"}" (${saved.count || 0} shots)\n0=Save  1=Load  2=Delete`
                : `Slot ${i}: Empty\n0=Save`,
              "0",
            );
            if (choice === "0") {
              try {
                localStorage.setItem(
                  "cf_v5_slot_" + i,
                  JSON.stringify({
                    name: "proj-" + Date.now(),
                    count: queue.length,
                    ratio: currentRatio,
                    ts: Date.now(),
                  }),
                );
                toast("Saved to Slot " + i, "s");
                renderSlots();
              } catch (e) {
                toast("Slot full", "e");
              }
            } else if (choice === "1" && saved) {
              toast("Slot data saved (re-upload images to restore)", "w");
            } else if (choice === "2" && saved) {
              localStorage.removeItem("cf_v5_slot_" + i);
              toast("Slot " + i + " cleared", "i");
              renderSlots();
            }
          });
          w.appendChild(btn);
        }
      }

      // ── KEYBOARD ──
      document.addEventListener("keydown", (e) => {
        const tag = document.activeElement?.tagName;
        if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
        if (e.code === "Space") {
          e.preventDefault();
          playBtn.click();
        }
        if (e.code === "KeyR") {
          e.preventDefault();
          restartBtn.click();
        }
        if (e.code === "KeyL") {
          e.preventDefault();
          loopBtn.click();
        }
        if (e.code === "ArrowLeft") {
          e.preventDefault();
          stepBackBtn.click();
        }
        if (e.code === "ArrowRight") {
          e.preventDefault();
          stepFwdBtn.click();
        }
      });

      // ── CANVAS EXPORT ──
      async function cacheImages() {
        return new Promise((res) => {
          const todo = queue.filter((item) => !imgCache[item.dataUrl]);
          if (!todo.length) return res();
          let n = 0;
          todo.forEach((item) => {
            const img = new Image();
            img.onload = () => {
              imgCache[item.dataUrl] = img;
              if (++n === todo.length) res();
            };
            img.onerror = () => {
              if (++n === todo.length) res();
            };
            img.src = item.dataUrl;
          });
        });
      }

      function drawFrame(ctx, W, H, t, expTL, wm, overlay, progMode) {
        const s =
          expTL.find((s) => t >= s.start && t < s._end) ||
          expTL[expTL.length - 1];
        if (!s) return;
        const img = imgCache[s.dataUrl];
        if (!img) return;
        const lt = t - s.start,
          pct = Math.max(0, Math.min(1, lt / s.dur));
        const iR = img.width / img.height,
          cR = W / H,
          mode = s.fitMode || "contain";
        ctx.clearRect(0, 0, W, H);
        // blurred bg
        if (mode === "contain") {
          ctx.save();
          ctx.filter = "blur(30px) brightness(.3)";
          let bW, bH;
          if (iR > cR) {
            bH = H;
            bW = H * iR;
          } else {
            bW = W;
            bH = W / iR;
          }
          ctx.drawImage(img, (W - bW) / 2, (H - bH) / 2, bW, bH);
          ctx.restore();
        }
        // main
        ctx.save();
        let fstr = LUT_CSS[s.filter || "none"] || "";
        fstr +=
          " brightness(" +
          s.brightness +
          ") contrast(" +
          s.contrast +
          ") saturate(" +
          s.saturation +
          ")";
        ctx.filter = fstr.trim() || "none";
        const tf = calcTransform(s.effect, pct);
        const rot = ((tf.rot + s.rotation) * Math.PI) / 180;
        let dW, dH;
        if (mode === "contain") {
          if (iR > cR) {
            dW = W;
            dH = W / iR;
          } else {
            dH = H;
            dW = H * iR;
          }
        } else {
          if (iR > cR) {
            dH = H;
            dW = H * iR;
          } else {
            dW = W;
            dH = W / iR;
          }
        }
        ctx.translate(W / 2 + (tf.tx / 100) * W, H / 2 + (tf.ty / 100) * H);
        if (rot) ctx.rotate(rot);
        ctx.scale(tf.scale, tf.scale);
        ctx.drawImage(img, -dW / 2, -dH / 2, dW, dH);
        ctx.restore();
        // vignette
        const vg = ctx.createRadialGradient(
          W / 2,
          H / 2,
          Math.min(W, H) * 0.25,
          W / 2,
          H / 2,
          Math.max(W, H) * 0.75,
        );
        vg.addColorStop(0, "rgba(0,0,0,0)");
        vg.addColorStop(1, "rgba(0,0,0,.6)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
        // overlay
        if (overlay === "letterbox") {
          ctx.fillStyle = "#000";
          const bh = H * 0.12;
          ctx.fillRect(0, 0, W, bh);
          ctx.fillRect(0, H - bh, W, bh);
        } else if (overlay === "viewfinder") {
          ctx.save();
          ctx.strokeStyle = "rgba(255,255,255,.18)";
          ctx.lineWidth = 1;
          ctx.strokeRect(20, 20, W - 40, H - 40);
          ctx.fillStyle = "#FF2060";
          ctx.font = "bold 11px Courier";
          ctx.fillText("⏺ REC", 30, 38);
          ctx.restore();
        }
        // transition
        const td = s.transitionDuration || 0.25;
        if (lt < td) {
          const tp = 1 - lt / td;
          const cols = {
            lime: `rgba(200,255,0,${tp * 0.75})`,
            white: `rgba(255,255,255,${tp * 0.85})`,
            black: `rgba(0,0,0,${tp * 0.75})`,
            pink: `rgba(255,32,96,${tp * 0.75})`,
          };
          if (cols[s.transition]) {
            ctx.fillStyle = cols[s.transition];
            ctx.fillRect(0, 0, W, H);
          }
        }
        // caption
        if (s.caption) {
          ctx.save();
          const raw = s.caption,
            text = s.textTransform === "uppercase" ? raw.toUpperCase() : raw;
          const fw = s.fontWeight || "800",
            fam = s.fontFamily || "Syne,sans-serif";
          let size = Math.round(H * 0.042);
          if (s.fontSize === "small") size = Math.round(H * 0.028);
          if (s.fontSize === "large") size = Math.round(H * 0.058);
          ctx.font = `${fw} ${size}px ${fam}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const tw = ctx.measureText(text).width,
            bw = tw + W * 0.05,
            bh2 = size + H * 0.025;
          let py = H * 0.875;
          if (s.captionPos === "top") py = H * 0.115;
          if (s.captionPos === "middle") py = H * 0.5;
          if (lt < 0.4) {
            ctx.globalAlpha = lt / 0.4;
            py += H * 0.012 * (1 - lt / 0.4);
          }
          ctx.translate(W / 2, py);
          ctx.textBaseline = "middle";
          const cs = s.capStyle || "lime";
          if (cs === "neon") {
            ctx.shadowColor = "rgba(255,32,96,.9)";
            ctx.shadowBlur = 14;
            ctx.fillStyle = "#000";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.strokeStyle = "#FF2060";
            ctx.lineWidth = Math.max(2, W * 0.003);
            ctx.strokeRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.shadowBlur = 0;
            ctx.fillStyle = "#fff";
          } else if (cs === "fill") {
            ctx.fillStyle = "#C8FF00";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.fillStyle = "#000";
          } else if (cs === "ticker") {
            ctx.fillStyle = "#FFAA00";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.fillStyle = "#000";
          } else if (cs === "bare" || cs === "shadow") {
            ctx.shadowColor = "rgba(0,0,0,.95)";
            ctx.shadowBlur = 16;
            ctx.fillStyle = "#fff";
            ctx.fillText(text, 0, 0);
            ctx.restore();
            return;
          } else if (cs === "glass") {
            ctx.fillStyle = "rgba(255,255,255,.1)";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.strokeStyle = "rgba(255,255,255,.22)";
            ctx.lineWidth = 1;
            ctx.strokeRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.fillStyle = "#fff";
          } else if (cs === "minimal") {
            ctx.strokeStyle = "#C8FF00";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-bw / 2, bh2 / 2);
            ctx.lineTo(bw / 2, bh2 / 2);
            ctx.stroke();
            ctx.fillStyle = "#fff";
          } else if (cs === "strip") {
            const sw = W,
              sh = size + H * 0.035;
            ctx.fillStyle = "rgba(0,0,0,.88)";
            ctx.fillRect(-W / 2, -sh / 2, sw, sh);
            ctx.fillStyle = "#fff";
          } else if (cs === "cbox") {
            ctx.fillStyle = "#FF2060";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.fillStyle = "#fff";
          } else {
            ctx.fillStyle = "rgba(0,0,0,.82)";
            ctx.fillRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.strokeStyle = "#C8FF00";
            ctx.lineWidth = Math.max(1.5, W * 0.003);
            ctx.strokeRect(-bw / 2, -bh2 / 2, bw, bh2);
            ctx.fillStyle = "#fff";
          }
          ctx.fillText(text, 0, 0);
          ctx.restore();
        }
        // watermark
        if (wm) {
          ctx.save();
          ctx.fillStyle = "rgba(255,255,255,.2)";
          ctx.font = `600 ${Math.round(H * 0.016)}px JetBrains Mono,monospace`;
          ctx.textAlign = "right";
          ctx.fillText(wm.toUpperCase(), W - W * 0.025, H - H * 0.018);
          ctx.restore();
        }
        // progress burn
        if (progMode && progMode !== "none") {
          const tT = expTL[expTL.length - 1]._end,
            bw2 = W * Math.max(0, Math.min(1, t / tT)),
            bh3 = Math.max(3, Math.round(H * 0.005));
          ctx.fillStyle = progMode === "top" ? "#FF2060" : "#C8FF00";
          ctx.fillRect(0, progMode === "top" ? 0 : H - bh3, bw2, bh3);
        }
      }

      async function exportVideo() {
        if (!queue.length) return;
        playing = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        playBtn.textContent = "▶";
        toast("Caching images...", "i");
        try {
          await cacheImages();
          const modal = $("exportModal");
          modal.style.display = "flex";
          const rc = $("renderCanvas"),
            ctx = rc.getContext("2d");
          const res = parseInt($("expRes").value) || 1080;
          if (currentRatio === "1/1") {
            rc.width = res;
            rc.height = res;
          } else if (currentRatio === "4/3") {
            rc.width = res;
            rc.height = Math.round(res * 0.75);
          } else if (currentRatio === "16/9") {
            rc.width = res;
            rc.height = Math.round(res * 0.5625);
          } else {
            rc.width = Math.round(res * 0.5625);
            rc.height = res;
          }

          let tAcc = 0;
          const expTL = queue.map((item) => {
            const s = {
              ...item,
              dataUrl: item.dataUrl,
              start: tAcc,
              dur: parseFloat(item.duration) || 2.5,
              effect: item.effect || "zoomIn",
              caption: item.caption?.trim() || null,
              captionPos: item.captionPos || "bottom",
              capStyle: item.capStyle || "lime",
              captionAlign: item.captionAlign || "c",
              transition: item.transition || "lime",
              transitionDuration: parseFloat(item.transitionDuration) || 0.25,
              fontFamily: item.fontFamily || "'Syne',sans-serif",
              fontWeight: item.fontWeight || "800",
              fontSize: item.fontSize || "medium",
              textTransform: item.textTransform || "none",
              fitMode: item.fitMode || "contain",
              filter: item.filter || "none",
              brightness: parseFloat(item.brightness) || 1,
              contrast: parseFloat(item.contrast) || 1,
              saturation: parseFloat(item.saturation) || 1,
              rotation: parseInt(item.rotation) || 0,
            };
            tAcc += s.dur;
            s._end = tAcc;
            return s;
          });
          const tTotal = tAcc,
            fps = parseInt($("expFPS").value) || 30,
            totalFrames = Math.floor(tTotal * fps);
          const wm = $("gWM").value.trim(),
            overlay = $("gOverlay").value || "none",
            progMode = $("gProgBurn").value || "none";

          const stream = rc.captureStream(fps);
          let combined = stream;
          if (audioEl) {
            try {
              if (!audioCtx)
                audioCtx = new (
                  window.AudioContext || window.webkitAudioContext
                )();
              if (audioCtx.state === "suspended") await audioCtx.resume();
              if (!audioSrcNode) {
                audioSrcNode = audioCtx.createMediaElementSource(audioEl);
                audioDest = audioCtx.createMediaStreamDestination();
                audioSrcNode.connect(audioDest);
                audioSrcNode.connect(audioCtx.destination);
              }
              const at = audioDest.stream.getAudioTracks();
              if (at.length)
                combined = new MediaStream([stream.getVideoTracks()[0], at[0]]);
            } catch (e) {
              console.warn("audio:", e);
            }
          }
          let opts = { mimeType: "video/webm;codecs=vp9,opus" };
          if (!MediaRecorder.isTypeSupported(opts.mimeType))
            opts = { mimeType: "video/webm;codecs=vp8,opus" };
          if (!MediaRecorder.isTypeSupported(opts.mimeType))
            opts = { mimeType: "video/webm" };
          if (!MediaRecorder.isTypeSupported(opts.mimeType))
            opts = { mimeType: "video/mp4" };
          if (!MediaRecorder.isTypeSupported(opts.mimeType))
            opts = { mimeType: "" };
          const chunks = [];
          let rec;
          try {
            rec = new MediaRecorder(combined, opts);
          } catch (e) {
            rec = new MediaRecorder(combined);
          }
          rec.ondataavailable = (e) => {
            if (e.data?.size) chunks.push(e.data);
          };
          rec.onstop = async () => {
            modal.style.display = "none";
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "clipforge-export.webm";
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
            toast("🎬 Export complete!", "s");
            try {
              const vf = new File([blob], "clip.webm", { type: "video/webm" });
              if (navigator.canShare?.({ files: [vf] }))
                await navigator.share({
                  files: [vf],
                  title: "ClipForge Export",
                });
            } catch (e) {}
          };
          if (document.fonts) await document.fonts.ready;
          rec.start();
          if (audioEl) {
            audioEl.currentTime = 0;
            audioEl.play().catch(() => {});
          }
          let cf = 0;
          function nextFrame() {
            if (cf > totalFrames) {
              rec.stop();
              if (audioEl) audioEl.pause();
              return;
            }
            drawFrame(
              ctx,
              rc.width,
              rc.height,
              cf / fps,
              expTL,
              wm,
              overlay,
              progMode,
            );
            const pct = Math.min(100, Math.floor((cf / totalFrames) * 100));
            $("expPct").textContent = pct + "%";
            $("expProgFill").style.width = pct + "%";
            cf++;
            setTimeout(nextFrame, 1000 / fps);
          }
          nextFrame();
        } catch (e) {
          $("exportModal").style.display = "none";
          toast("Export failed: " + e.message, "e");
          console.error(e);
        }
      }
      $("exportVideoBtn").addEventListener("click", exportVideo);
      $("expVideoBtnP").addEventListener("click", exportVideo);

      // ── INIT ──
      (() => {
        selectRatio("9/16");
        renderQueue();
        syncPlayer();
        renderSlots();
        saveHist();
        checkRecovery();
        updateZoom();
        // left toolbar icons
        document.querySelectorAll(".lt-icon").forEach((btn) =>
          btn.addEventListener("click", () => {
            document
              .querySelectorAll(".lt-icon")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
          }),
        );
      })();
    </script>
  </body>
</html>
