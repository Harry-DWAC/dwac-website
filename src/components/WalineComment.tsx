"use client";

import { useEffect, useRef, useState } from "react";

interface WalineCommentProps {
  lang?: string;
  path?: string;
}

// Sort options with labels
const SORT_OPTIONS = [
  { value: "latest", label: "Latest", labelZh: "最新", labelTw: "最新" },
  { value: "-latest", label: "Oldest", labelZh: "最早", labelTw: "最早" },
  { value: "best", label: "Most Liked", labelZh: "最热", labelTw: "最熱" },
  { value: "-best", label: "Least Liked", labelZh: "最少", labelTw: "最少" },
  { value: "nick", label: "A-Z", labelZh: "昵称", labelTw: "暱稱" },
];

function getSortLabel(sort: string, lang: string) {
  const option = SORT_OPTIONS.find((o) => o.value === sort);
  if (!option) return "Latest";
  if (lang === "zh-CN") return option.labelZh;
  if (lang === "zh-TW") return option.labelTw;
  return option.label;
}

export default function WalineComment({ lang = "en", path }: WalineCommentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState("latest");
  const langCode = lang === "zh-CN" ? "zh-CN" : lang === "zh-TW" ? "zh-TW" : "en";

  // Re-init Waline when sort changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const serverURL = "https://comment.dwac.net";
    const pagePath = path || window.location.pathname;

    // Load Waline CSS — self-hosted (public/vendor/waline/v3, 3.15.2).
    // Was https://unpkg.com/... — blocked by our own CSP (style-src 'self') since 2026-08-28,
    // which silently killed the whole comment board.
    if (!document.querySelector('link[href*="waline.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/vendor/waline/v3/waline.css";
      document.head.appendChild(link);
    }

    // Override CDN dark theme: always force dark regardless of html.dark class
    const overrideStyleId = "waline-theme-override";
    if (!document.getElementById(overrideStyleId)) {
      const style = document.createElement("style");
      style.id = overrideStyleId;
      style.textContent = `
        .wl-panel { background: #1e293b !important; border-color: #334155 !important; }
        .wl-header-item { color: #cbd5e1 !important; }
        .wl-header-item label { color: #94a3b8 !important; }
        .wl-editor { color: #e2e8f0 !important; background: #0f172a !important; }
        .wl-editor::placeholder { color: #64748b !important; }
        .wl-btn { color: #e2e8f0 !important; border-color: #475569 !important; background: #1e293b !important; }
        .wl-btn-primary { background: #b8860b !important; border-color: #b8860b !important; color: #fff !important; }
        .wl-card { background: #1e293b !important; border-color: #334155 !important; }
        .wl-meta { color: #94a3b8 !important; }
        .wl-meta span { color: #94a3b8 !important; }
        .wl-nick { color: #f0c040 !important; font-weight: 600 !important; }
        .wl-time { color: #94a3b8 !important; }
        .wl-content { color: #e2e8f0 !important; line-height: 1.6 !important; }
        .wl-content p { color: #e2e8f0 !important; }
        .wl-quote { border-left-color: #b8860b !important; }
        .wl-emoji-popup { background: #1e293b !important; }
        .wl-input { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-textarea { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-header-wrapper { border-color: #334155 !important; }
        .wl-footer { color: #94a3b8 !important; }
        .wl-copyright { color: #475569 !important; }
        .wl-pagination { color: #94a3b8 !important; }
        .wl-avatar { border-color: #334155 !important; }
        .wl-reply-wrapper .wl-card { background: #162032 !important; }
        .wl-pagination .wl-btn { color: #e2e8f0 !important; }
        .wl-count { color: #e2e8f0 !important; }
        .wl-login-info { color: #94a3b8 !important; }
        .waline-section { background: #0f172a; border-radius: 8px; }
        /* Sort control styling */
        .waline-sort-bar { 
          display: flex; 
          flex-wrap: wrap;
          align-items: center; 
          gap: 0.5rem; 
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: #1e293b;
          border-radius: 8px 8px 0 0;
          border: 1px solid #334155;
          border-bottom: none;
        }
        .waline-sort-label { 
          color: #94a3b8; 
          font-size: 0.875rem; 
          margin-right: 0.25rem;
        }
        .waline-sort-btn {
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          border: 1px solid #475569;
          border-radius: 9999px;
          background: transparent;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.2s;
        }
        .waline-sort-btn:hover {
          border-color: #b8860b;
          color: #f0c040;
        }
        .waline-sort-btn.active {
          background: #b8860b;
          border-color: #b8860b;
          color: #fff;
        }
      `;
      document.head.appendChild(style);
    }

    // Remove previous init script if any
    const scriptId = "waline-init-script";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) { existingScript.remove(); }

    // Init Waline with sort parameter
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.textContent = `
import { init } from '/vendor/waline/v3/waline.js';
if (window.__waline_instance) { try { window.__waline_instance.destroy(); } catch(e) {} }
window.__waline_instance = init({
  el: '#waline-container',
  serverURL: '${serverURL}',
  path: '${pagePath}',
  lang: '${langCode}',
  dark: false,
  sort: '${sort}',
  meta: ['nick', 'mail', 'link'],
  requiredMeta: ['nick'],
  login: 'enable',
  wordLimit: [0, 1000],
  pageSize: 10,
  imageUploader: false,
  highlighter: true,
  texRenderer: false,
  emoji: ['/vendor/waline/emoji/weibo'],
});
`;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [lang, path, sort]); // Re-init when sort changes

  return (
    <div className="waline-section" style={{ marginTop: "2rem" }}>
      {/* Sort Control Bar */}
      <div
        className="waline-sort-bar"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <span className="waline-sort-label">
          {langCode === "zh-CN" ? "排序：" : langCode === "zh-TW" ? "排序：" : "Sort:"}
        </span>
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`waline-sort-btn ${sort === option.value ? "active" : ""}`}
            onClick={() => setSort(option.value)}
          >
            {getSortLabel(option.value, lang)}
          </button>
        ))}
      </div>

      {/* Waline Container */}
      <div
        id="waline-container"
        ref={containerRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          borderRadius: "0 0 8px 8px",
          backgroundColor: "#0f172a",
          border: "1px solid #1e293b",
          borderTop: "none",
        }}
      />
    </div>
  );
}