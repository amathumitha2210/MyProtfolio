import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  ClipboardList,
  Github,
  ExternalLink,
  PlayCircle,
  ImagePlus,
  GraduationCap,
  Languages as LanguagesIcon,
  ArrowRight,
} from "lucide-react";
import pakpakImage from "./assets/photos/PackPack.jpg";
import handicraftImage from "./assets/photos/handicrft.png";
import loanImage from "./assets/photos/loan.png";
import chatGPTImage from"./assets/photos/Lankamart.png";

/* ---------------------------------------------------------
   DATA — edit here to update content
--------------------------------------------------------- */

const PROFILE = {
  name: "Mathumitha Arasakulasoorian",
  location: "Colombo, Sri Lanka",
  phone: "+94 774 090 228",
  email: "arasakulasoorianmathu@gmail.com",
};

const TITLES = {
  dev: "Full-Stack Web Developer",
  admin: "Office Administration Manager",
};

const HERO_COPY = {
  dev: "I build web applications end to end — from database schema to the interface people actually touch.",
  admin: "I run the back office that keeps a business moving — reporting, inventory, and orders, without the drama.",
};

const HERO_SUB = {
  dev: "MERN stack, PHP, Python and Android. First Class Honours in Computer Science and Software Engineering.",
  admin: "5+ years managing financial reporting, stock control and order flow for a manufacturing business.",
};

/* Featured / case-study projects. `media` describes what goes in the
   showcase frame: type 'image' (replace src with a real screenshot),
   'video' (replace src / thumbnail with an exported frame), or 'mockup'
   (kept as a styled placeholder until a screenshot is supplied). */
const FEATURED = [
  {
    id: "pakpak",
    name: "Pak Pak Chicken",
    role: "Freelance Web Developer",
    period: "Aug 2024 — Sep 2024",
    summary:
      "A full-stack ordering and inventory platform for a Colombo chicken restaurant, built solo end to end.",
    detail:
      "Designed and built the customer ordering flow and the inventory tracking behind it on the MERN stack. Focused on a responsive, mobile-first interface so counter staff could take and track orders as quickly on a phone as on a desktop.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.pakpakchicken.com/",
    linkLabel: "Visit pakpakchicken.com",
    media: { type: "image", placeholder: false, src: pakpakImage, alt: "Pak Pak Chicken website preview" },
  },
  {
    id: "handicraft",
    name: "Multi-Vendor E-Commerce — Handicraft Products",
    role: "Final Year Project",
    period: "University of Bedfordshire (via SLIIT City)",
    summary:
      "A multi-vendor marketplace for handicraft sellers, with a built-in point-of-sale system for in-store checkout.",
    detail:
      "Final year project covering both sides of the business: a public storefront where multiple vendors list handicraft products, and an admin/POS layer for managing stock, vendors and in-person sales. Built the full data model in MySQL alongside the PHP application layer.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    link: "https://drive.google.com/file/d/1vvK6tUIhEdKUHVO6T5oHITeSJGQS537I/view?usp=sharing",
    linkLabel: "Watch project demo",
    media: { type: "image", placeholder: false, src: handicraftImage, alt: "Handicraft marketplace website preview" },
  },
  {
    id: "loan",
    name: "Loan Management System",
    role: "Software Engineer Intern — Cybernetic Software Solutions",
    period: "Oct 2024 — Apr 2025",
    summary: "Admin panel and API layer for processing loan applications and managing users.",
    detail:
      "Built the admin panel on the MERN stack, developed REST APIs for loan data processing and user management, and designed the React dashboard components. Optimised MongoDB queries and debugged the application to improve performance and reliability.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    media: { type: "image", placeholder: false, src: loanImage, alt: "Loan management system dashboard preview" },
  },
  {
    id: "daitonn",
    name: "Multi-Vendor E-Commerce Platform",
    role: "Software Engineer Intern — Daitonn (Pvt) Ltd",
    period: "Jan 2024 — Jul 2024",
    summary: "Product listing, cart and checkout for a multi-vendor e-commerce site.",
    detail:
      "Developed a multi-vendor e-commerce site with a React.js frontend and an ASP.NET backend on MS SQL Server, including REST APIs for product listing, cart and checkout functionality.",
    tech: ["React.js", "ASP.NET", "MS SQL Server"],
    media: { type: "image", placeholder: false, src: chatGPTImage, alt: "ChatGPT image for Daitonn e-commerce project" },
  },
];

const OTHER_PROJECTS = [
  {
    name: "AI Customer Analyzer",
    org: "DreamSpace Company",
    desc: "Python system detecting customer age, gender, emotion and ethnicity, with a vocal-analysis module.",
    tech: ["Python", "Computer Vision", "Machine Learning"],
  },
  {
    name: "Labor Management System",
    org: "Royal Motors (Pvt) Ltd",
    desc: "Role-based Android app with distinct access levels for administrators and supervisors.",
    tech: ["Android Studio (Java)", "SQLite"],
  },
  {
    name: "Stock Management System",
    org: "Smart Warehouse",
    desc: "Inventory and stock-monitoring system built to cut manual errors in warehouse operations.",
    tech: ["Java", "MySQL"],
  },
  {
    name: "Road Trip Sri Lanka",
    org: "Personal project",
    desc: "Travel platform where users register and explore packages, destinations and promotions.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    name: "Flabby Bird",
    org: "Android game",
    desc: "Event-driven Android game built to practise game-loop and collision logic.",
    tech: ["Android Studio (Java)", "SQLite"],
  },
];

const SKILLS = {
  dev: [
    { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Responsive Design"] },
    { group: "Backend", items: ["Node.js", "Express.js", "ASP.NET", "REST APIs", "PHP"] },
    { group: "Databases", items: ["MongoDB", "MySQL", "SQLite", "MS SQL Server"] },
    { group: "Languages", items: ["JavaScript (ES6+)", "Python", "PHP"] },
    { group: "Mobile & Tools", items: ["Android Studio (Java)", "Git", "GitHub", "VS Code", "Postman"] },
  ],
  admin: [
    { group: "Office Management", items: ["Scheduling", "Document control", "Filing systems"] },
    { group: "Financial Reporting", items: ["Sales reports", "Collection reports", "Incentive calculations", "Invoicing"] },
    { group: "Inventory Management", items: ["Stock monitoring", "Stock counts", "Reconciliation"] },
    { group: "Customer Relations", items: ["Client coordination", "Showroom management", "Complaint handling"] },
    { group: "Computer Tools", items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Outlook", "Google Workspace"] },
  ],
};

const BACKGROUND = {
  dev: "Alongside a first-class degree in Computer Science and Software Engineering, I've spent the last two years building real applications through internships and freelance work — a loan management dashboard, a multi-vendor storefront, and a restaurant ordering system among them. I care about the same thing in every one: does it actually make someone's day easier to use.",
  admin: "Since February 2020, I've run day-to-day office operations for a manufacturing business — sales and collection reporting, inventory reconciliation, order dispatch, and the supplier and customer relationships that keep it all moving. Five years of keeping the back office boring, in the best way.",
};

const EDUCATION = [
  {
    degree: "BSc (Hons) Computer Science and Software Engineering — First Class",
    school: "University of Bedfordshire, via SLIIT City University, Sri Lanka",
    dates: "2024",
  },
  {
    degree: "Higher Diploma in Computing and Software Engineering — Upper Second Class",
    school: "International College of Business and Technology (ICBT), Colombo",
    dates: "2022",
  },
  {
    degree: "GCE Advanced Level — Physical Science",
    school: "J/Vembadi Girls' High School",
    dates: "2018",
  },
];

const CERTS = [
  "Full Stack Development using MERN Stack — University of Colombo School of Computing",
  "Microsoft Office Suite — Advanced (Word, Excel, PowerPoint, Outlook)",
  "Professional Certificate in Artificial Intelligence — Level 01 — Informatics Institute of Technology (IIT)",
];

const LANGS = [
  { lang: "English", level: "Professional" },
  { lang: "Tamil", level: "Native" },
  { lang: "Sinhala", level: "Conversational" },
];

/* ---------------------------------------------------------
   MEDIA PLACEHOLDER COMPONENTS
   Swap these for <img src="..." /> or a real <video>/thumbnail
   once screenshots are available.
--------------------------------------------------------- */

function ImagePlaceholder({ label }) {
  return (
    <div className="media-frame">
      <div className="browser-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="browser-url mono">{label}</span>
      </div>
      <div className="media-placeholder">
        <ImagePlus size={22} />
        <span>Add a screenshot here</span>
      </div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="media-frame">
      <div className="media-placeholder video">
        <PlayCircle size={30} />
        <span>Add a video thumbnail here</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   COMPONENT
--------------------------------------------------------- */

export default function Portfolio() {
  const [mode, setMode] = useState("dev");
  const [mounted, setMounted] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);
  const isDev = mode === "dev";

  return (
    <div
      className={`page ${mounted ? "mounted" : ""}`}
      style={{ "--accent": isDev ? "var(--indigo)" : "var(--amber)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --ink: #e2e8f0;
          --paper: #0f172a;
          --paper-dim: #111827;
          --indigo: #6366f1;
          --amber: #f59e0b;
          --slate: #94a3b8;
          --slate-light: #cbd5e1;
          --line: rgba(148,163,184,0.2);
        }
        * { box-sizing: border-box; }
        .page {
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .page.mounted { opacity: 1; transform: translateY(0); }
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .wrap { max-width: 980px; margin: 0 auto; padding: 0 28px; }

        .topbar {
          position: sticky; top: 0; z-index: 30;
          backdrop-filter: blur(10px);
          background: rgba(15,23,42,0.95);
          border-bottom: 1px solid rgba(148,163,184,0.12);
        }
        .topbar-inner { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; }
        .topbar-name { font-size: 15px; font-weight: 600; color: var(--ink); }
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-links a { font-size: 13.5px; color: var(--slate); text-decoration: none; }
        .nav-links a:hover { color: var(--ink); }

        .switch { display: flex; align-items: center; gap: 10px; border: 1px solid rgba(148,163,184,0.16); border-radius: 999px; padding: 4px; background: rgba(15,23,42,0.9); position: relative; }
        .switch-option { display: flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 999px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; letter-spacing: 0.03em; text-transform: uppercase; background: transparent; border: none; cursor: pointer; color: var(--slate); transition: color 0.35s ease; position: relative; z-index: 2; }
        .switch-option.active { color: #fff; }
        .switch-thumb { position: absolute; top: 4px; bottom: 4px; left: 4px; width: calc(50% - 4px); border-radius: 999px; background: var(--accent); transition: transform 0.4s cubic-bezier(.65,0,.35,1), background 0.4s ease; z-index: 1; }
        .switch-thumb.admin { transform: translateX(100%); }

        .hero { padding: 88px 0 64px; border-bottom: 1px solid rgba(148,163,184,0.12); }
        .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); transition: color 0.4s ease; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .eyebrow::before { content: ""; width: 18px; height: 1px; background: var(--accent); transition: background 0.4s ease; }
        .hero h1 { font-size: clamp(30px, 4.6vw, 46px); line-height: 1.15; letter-spacing: -0.02em; font-weight: 600; margin: 0 0 20px; max-width: 720px; color: #fff; }
        .hero .name { font-size: 15px; color: var(--slate); margin-bottom: 10px; }
        .hero p.sub { max-width: 560px; font-size: 15.5px; line-height: 1.6; color: var(--slate); margin: 0 0 32px; }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 600; padding: 12px 20px; border-radius: 8px; text-decoration: none; transition: all 0.25s ease; border: 1px solid transparent; }
        .btn-primary { background: var(--accent); color: #0f172a; }
        .btn-primary:hover { opacity: 0.95; }
        .btn-ghost { border-color: rgba(148,163,184,0.2); color: #e2e8f0; }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

        section.block { padding: 68px 0; border-bottom: 1px solid rgba(148,163,184,0.12); }
        .block-head { margin-bottom: 40px; }
        .block-eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--slate-light); margin-bottom: 8px; }
        .block-head h2 { font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 600; letter-spacing: -0.01em; margin: 0; color: #fff; }

        .case { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 44px 0; border-bottom: 1px solid rgba(148,163,184,0.08); }
        .case:last-child { border-bottom: none; padding-bottom: 0; }
        .case:first-child { padding-top: 0; }
        .case.reverse .case-media { order: 2; }
        .case.reverse .case-copy { order: 1; }
        .case-role { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--accent); transition: color 0.4s ease; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 10px; }
        .case-copy h3 { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; margin: 0 0 6px; color: #fff; }
        .case-period { font-size: 12.5px; color: var(--slate-light); margin-bottom: 16px; }
        .case-summary { font-size: 15px; color: #e2e8f0; line-height: 1.6; margin-bottom: 10px; font-weight: 500; }
        .case-detail { font-size: 14px; color: var(--slate); line-height: 1.7; margin-bottom: 18px; }
        .case-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .case-tech span { font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 5px 10px; border-radius: 6px; background: rgba(148,163,184,0.08); color: var(--slate-light); }
        .case-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; color: var(--accent); text-decoration: none; transition: color 0.4s ease, gap 0.2s ease; }
        .case-link:hover { gap: 9px; }

        .media-frame { border-radius: 12px; overflow: hidden; border: 1px solid rgba(148,163,184,0.12); background: #111827; transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; cursor: zoom-in; }
        .browser-bar { display: flex; align-items: center; gap: 6px; padding: 10px 12px; background: #111827; border-bottom: 1px solid rgba(148,163,184,0.1); }
        .browser-bar .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(148,163,184,0.45); }
        .browser-url { margin-left: 8px; font-size: 11px; color: var(--slate-light); }
        .media-placeholder { aspect-ratio: 16/10; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: var(--slate-light); font-size: 12.5px; background: repeating-linear-gradient(135deg, #111827, #111827 10px, #0f172a 10px, #0f172a 20px); }
        .media-placeholder.video { aspect-ratio: 16/10; border-radius: 12px; }
        .media-visual { position: relative; aspect-ratio: 16/10; overflow: hidden; background: #0f172a; }
        .media-image { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1); transition: transform 0.5s ease, filter 0.5s ease; }
        .media-frame:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(15,23,42,0.35); border-color: rgba(99,102,241,0.35); }
        .media-frame:hover .media-image { transform: scale(1.08) rotate(-0.3deg); filter: saturate(1.08); }
        .media-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 45%, rgba(99,102,241,0.12));
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .media-frame:hover .media-visual::after { opacity: 1; }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(2, 6, 23, 0.86);
          backdrop-filter: blur(8px);
        }
        .lightbox-card {
          position: relative;
          width: min(1100px, 100%);
          max-height: 92vh;
          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(148,163,184,0.18);
          background: #020617;
          box-shadow: 0 30px 80px rgba(2, 6, 23, 0.45);
        }
        .lightbox-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: none;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.85);
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          z-index: 2;
        }
        .lightbox-image {
          width: 100%;
          max-height: calc(92vh - 52px);
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }
        .lightbox-caption {
          padding: 10px 4px 2px;
          color: var(--slate-light);
          font-size: 13px;
        }

        .mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .mini-card { border: 1px solid rgba(148,163,184,0.12); border-radius: 10px; padding: 20px; background: #111827; transition: border-color 0.3s ease, transform 0.3s ease; }
        .mini-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .mini-name { font-size: 14.5px; font-weight: 600; margin-bottom: 2px; color: #fff; }
        .mini-org { font-size: 11.5px; color: var(--slate-light); margin-bottom: 8px; }
        .mini-desc { font-size: 13px; color: var(--slate); line-height: 1.55; margin-bottom: 12px; }
        .mini-tech { display: flex; flex-wrap: wrap; gap: 5px; }
        .mini-tech span { font-family: 'JetBrains Mono', monospace; font-size: 10px; padding: 3px 7px; border-radius: 5px; background: rgba(148,163,184,0.08); color: var(--slate-light); }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .about-text { font-size: 15.5px; line-height: 1.75; color: var(--slate); }
        .about-text strong { color: #fff; }
        .skills-col-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--slate-light); margin-bottom: 16px; display: flex; align-items: center; gap: 7px; }
        .skill-group { margin-bottom: 16px; }
        .skill-group-name { font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #fff; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 5px 10px; border-radius: 6px; background: rgba(148,163,184,0.08); color: var(--slate-light); border: 1px solid rgba(148,163,184,0.12); }

        .split-two { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; }
        .edu-item { margin-bottom: 20px; }
        .edu-degree { font-size: 14px; font-weight: 600; line-height: 1.4; color: #fff; }
        .edu-school { font-size: 12.5px; color: var(--slate); margin-top: 2px; }
        .edu-dates { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--slate-light); margin-top: 4px; }
        .sub-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--slate-light); margin-bottom: 14px; }
        .cert-item { font-size: 13px; color: var(--slate); line-height: 1.6; margin-bottom: 10px; padding-left: 14px; position: relative; }
        .cert-item::before { content: "—"; position: absolute; left: 0; color: var(--slate-light); }
        .lang-row { display: flex; justify-content: space-between; font-size: 13px; padding: 8px 0; border-bottom: 1px dashed rgba(148,163,184,0.16); }
        .lang-row .lang-name { font-weight: 600; color: #fff; }
        .lang-row .lang-level { color: var(--slate-light); font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }

        footer { padding: 56px 0 64px; text-align: center; }
        footer .avail { display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--amber); border: 1px solid rgba(245,158,11,0.4); padding: 8px 16px; border-radius: 999px; margin-bottom: 22px; transition: color 0.4s ease, border-color 0.4s ease; }
        footer h3 { font-family: 'Space Grotesk', sans-serif; font-size: 24px; margin: 0 0 10px; color: #fff; }
        footer p { color: var(--slate); font-size: 14px; margin: 0 0 24px; }
        .contact-row { display: flex; flex-wrap: wrap; gap: 18px; justify-content: center; }
        .contact-item { display: flex; align-items: center; gap: 7px; font-size: 13.5px; color: var(--slate); text-decoration: none; }
        .contact-item svg { color: var(--accent); transition: color 0.4s ease; flex-shrink: 0; }
        .contact-item:hover { color: #fff; }
        .foot-note { font-size: 12px; color: var(--slate-light); margin-top: 26px; }

        @media (max-width: 800px) {
          .nav-links { display: none; }
          .case { grid-template-columns: 1fr; gap: 22px; }
          .case.reverse .case-media, .case.reverse .case-copy { order: initial; }
          .mini-grid { grid-template-columns: 1fr 1fr; }
          .about-grid, .split-two { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 520px) {
          .mini-grid { grid-template-columns: 1fr; }
        }
        button:focus-visible, a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>

      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-name display">Mathumitha Arasakulasoorian.</span>
          <div className="nav-links">
            {isDev && <a href="#work">Work</a>}
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="switch" role="group" aria-label="Switch portfolio focus">
            <div className={`switch-thumb ${isDev ? "" : "admin"}`} />
            <button className={`switch-option ${isDev ? "active" : ""}`} onClick={() => setMode("dev")}>
              <Code2 size={13} /> Dev
            </button>
            <button className={`switch-option ${!isDev ? "active" : ""}`} onClick={() => setMode("admin")}>
              <ClipboardList size={13} /> Admin
            </button>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow mono">{TITLES[mode]}</div>
          <h1 className="display">{HERO_COPY[mode]}</h1>
          <p className="sub">{HERO_SUB[mode]}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={isDev ? "#work" : "#about"}>
              {isDev ? "See my work" : "View my experience"} <ArrowRight size={15} />
            </a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </section>

      {isDev && (
        <>
          <section className="block" id="work">
            <div className="wrap">
              <div className="block-head">
                <div className="block-eyebrow mono">Selected work</div>
                <h2 className="display">Featured projects</h2>
              </div>
              {FEATURED.map((p, i) => (
                <div className={`case ${i % 2 === 1 ? "reverse" : ""}`} key={p.id}>
                  <div className="case-media">
                    {p.media.type === "video" ? (
                      <VideoPlaceholder />
                    ) : p.media.type === "image" && p.media.src ? (
                      <div
                        className="media-frame"
                        onClick={() => setLightboxImage({ src: p.media.src, alt: p.media.alt || p.name, caption: p.name })}
                      >
                        <div className="browser-bar">
                          <span className="dot" /><span className="dot" /><span className="dot" />
                          <span className="browser-url mono">
                            {p.link && p.link.includes("http") && !p.link.includes("drive") ? p.link.replace("https://", "").replace("http://", "") : p.name}
                          </span>
                        </div>
                        <div className="media-visual">
                          <img src={p.media.src} alt={p.media.alt || p.name} className="media-image" loading="lazy" />
                        </div>
                      </div>
                    ) : (
                      <ImagePlaceholder label={p.link && p.link.includes("http") && !p.link.includes("drive") ? p.link.replace("https://", "").replace("http://", "") : p.name} />
                    )}
                  </div>
                  <div className="case-copy">
                    <div className="case-role mono">{p.role}</div>
                    <h3 className="display">{p.name}</h3>
                    <div className="case-period">{p.period}</div>
                    <p className="case-summary">{p.summary}</p>
                    <p className="case-detail">{p.detail}</p>
                    <div className="case-tech">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    {p.link && (
                      <a className="case-link" href={p.link} target="_blank" rel="noreferrer">
                        {p.linkLabel} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="block">
            <div className="wrap">
              <div className="block-head">
                <div className="block-eyebrow mono">More builds</div>
                <h2 className="display">Other projects</h2>
              </div>
              <div className="mini-grid">
                {OTHER_PROJECTS.map((p) => (
                  <div className="mini-card" key={p.name}>
                    <div className="mini-name">{p.name}</div>
                    <div className="mini-org">{p.org}</div>
                    <div className="mini-desc">{p.desc}</div>
                    <div className="mini-tech">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="block" id="about">
        <div className="wrap about-grid">
          <div>
            <div className="block-head" style={{ marginBottom: 20 }}>
              <div className="block-eyebrow mono">About</div>
              <h2 className="display" style={{ fontSize: 24 }}>Background</h2>
            </div>
            <p className="about-text">{BACKGROUND[mode]}</p>
          </div>
          <div>
            <div className="skills-col-label">
              {isDev ? <Code2 size={13} /> : <ClipboardList size={13} />}
              {isDev ? "Technical skills" : "Administrative skills"}
            </div>
            {SKILLS[mode].map((g) => (
              <div className="skill-group" key={g.group}>
                <div className="skill-group-name">{g.group}</div>
                <div className="skill-tags">
                  {g.items.map((it) => <span className="skill-tag" key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap split-two">
          <div>
            <div className="block-head" style={{ marginBottom: 20 }}>
              <h2 className="display" style={{ fontSize: 22 }}>Education</h2>
            </div>
            {EDUCATION.map((ed) => (
              <div className="edu-item" key={ed.degree}>
                <div className="edu-degree">
                  <GraduationCap size={14} style={{ marginRight: 6, verticalAlign: -2, color: "var(--accent)" }} />
                  {ed.degree}
                </div>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-dates">{ed.dates}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="sub-label">Certifications</div>
            {CERTS.map((c) => <div className="cert-item" key={c}>{c}</div>)}
            <div className="sub-label" style={{ marginTop: 24 }}>
              <LanguagesIcon size={12} style={{ marginRight: 5, verticalAlign: -2 }} />
              Languages
            </div>
            {LANGS.map((l) => (
              <div className="lang-row" key={l.lang}>
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true" aria-label="Project preview">
          <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close preview">
              ×
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt || "Project preview"} className="lightbox-image" />
            {lightboxImage.caption && <div className="lightbox-caption">{lightboxImage.caption}</div>}
          </div>
        </div>
      )}

      <footer id="contact">
        <div className="wrap">
          <div className="avail">Available immediately · Employer visa sponsorship required</div>
          <h3 className="display">Let's work together</h3>
          <div className="contact-row">
            <a className="contact-item" href={`mailto:${PROFILE.email}`}><Mail size={15} /> {PROFILE.email}</a>
            <a className="contact-item" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><Phone size={15} /> {PROFILE.phone}</a>
            <span className="contact-item"><MapPin size={15} /> {PROFILE.location}</span>
            <a className="contact-item" href="https://github.com/amathumitha2210" target="_blank" rel="noreferrer"><Github size={15} /> @amathumitha2210</a>
          </div>
          <div className="foot-note">Vice President, Environmental Society · Environmental President, Student Parliament</div>
        </div>
      </footer>
    </div>
  );
}
