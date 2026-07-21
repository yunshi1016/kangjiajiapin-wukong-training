import { useState } from "react";

export function Visual({ src, alt, className = "", objectFit = "contain" }) {
  const [status, setStatus] = useState("loading");
  return (
    <figure className={`visual ${className} visual-${status}`}>
      {status === "loading" && (
        <span className="visual-skeleton" aria-hidden="true" />
      )}
      {status === "error" && (
        <span className="visual-error" role="img" aria-label={alt}>
          图片暂未载入
        </span>
      )}
      <img
        src={src}
        alt={alt}
        style={{ objectFit }}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
      />
    </figure>
  );
}

export function BrandHeader({ logo, label, dark = false }) {
  return (
    <header className={`brand-header ${dark ? "brand-header-dark" : ""}`}>
      <Visual
        src={logo}
        alt="钉钉，AI 时代的工作方式"
        className="brand-logo"
      />
      <span>{label}</span>
    </header>
  );
}

export function Slide({
  children,
  logo,
  label,
  className = "",
  dark = false,
}) {
  return (
    <section className={`slide ${dark ? "slide-dark" : ""} ${className}`}>
      <BrandHeader logo={logo} label={label} dark={dark} />
      {children}
    </section>
  );
}

export function SlideTitle({ eyebrow, title, lead, compact = false }) {
  return (
    <div className={`slide-title ${compact ? "slide-title-compact" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export function NumberBadge({ children }) {
  return <span className="number-badge">{children}</span>;
}

export function EvidencePlaceholder({ id, title, detail }) {
  return (
    <div className="evidence-placeholder" data-missing-shot={id}>
      <div className="evidence-index">待补真实截图 · {id}</div>
      <strong>{title}</strong>
      <p>{detail}</p>
      <span>不会使用概念图或生成图替代演示证据</span>
    </div>
  );
}

export function Boundary({ children }) {
  return <div className="boundary">证据边界｜{children}</div>;
}

export function FlowArrow() {
  return <span className="flow-arrow" aria-hidden="true">→</span>;
}
