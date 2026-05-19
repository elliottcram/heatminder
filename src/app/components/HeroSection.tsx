"use client";

import { useState } from "react";

const DESKTOP_PHOTO = "/images/hero-desktop.png";
const MOBILE_PHOTO = "/images/hero-mobile.png";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#fafafa]">

      {/* ── Desktop photo ── fills section, anchored to bottom. */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none"
      >
        <img
          alt=""
          className="w-full h-full object-cover object-bottom"
          src={DESKTOP_PHOTO}
        />
      </div>

      {/* ── Mobile photo ──
          Fixed height 847px, left-aligned, extends 39.47% beyond right edge,
          vertically centred via top-1/2 + -translate-y-1/2.
      */}
      <div
        aria-hidden
        className="md:hidden absolute h-[847px] left-0 -translate-y-1/2 pointer-events-none"
        style={{ right: "-39.47%", top: "50%" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover size-full"
          src={MOBILE_PHOTO}
        />
      </div>

      {/* ── Blur overlay ── covers bottom 349px, fades in from top */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[349px] pointer-events-none"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background: "rgba(217,217,217,0.01)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
        }}
      />

      {/* ════════════════════════════════════════
          DESKTOP CONTENT
          Nav anchored top, hero block anchored 152px from bottom.
          Flex spacer absorbs any extra viewport height.
      ════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col items-center px-[32px] pb-[152px] relative z-20 h-full">

        {/* Nav */}
        <nav className="flex items-center justify-between py-[24px] w-full shrink-0">
          <span
            className="font-sans font-semibold text-[16px] capitalize text-black"
            style={{ letterSpacing: "-0.64px" }}
          >
            H.Studio
          </span>
          <div
            className="flex items-center gap-[56px] font-sans font-semibold text-[16px] capitalize text-black"
            style={{ letterSpacing: "-0.64px" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            className="bg-black text-white font-sans font-medium text-[14px] px-[16px] py-[12px] rounded-[24px]"
            style={{ letterSpacing: "-0.56px" }}
          >
            Let&apos;s talk
          </button>
        </nav>

        {/* Flex spacer — keeps nav at top, hero block 152px from bottom */}
        <div className="flex-1 min-h-[240px] w-full" />

        {/* Hero block */}
        <div className="flex flex-col items-center justify-center shrink-0 w-full">

          {/* [ Hello I'm ] + Harvey Specter — mix-blend-overlay lets person break through */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center px-[18px] mb-[-15px] w-full">
              <span className="font-mono text-sm leading-[1.1] text-white uppercase mix-blend-overlay whitespace-nowrap">
                [ Hello i&apos;m ]
              </span>
            </div>
            <h1
              className="w-full text-center font-sans font-medium text-[198px] leading-[1.1] text-white capitalize mix-blend-overlay whitespace-pre-wrap"
              style={{ letterSpacing: "-13.86px" }}
            >
              {`Harvey   Specter`}
            </h1>
          </div>

          {/* Description + CTA — right-aligned block, 294px wide */}
          <div className="flex flex-col items-end justify-center w-full">
            <div className="flex flex-col gap-[9px] items-start">
              <p
                className="font-sans font-bold italic text-[14px] leading-[1.1] text-[#1f1f1f] uppercase w-[294px]"
                style={{ letterSpacing: "-0.56px" }}
              >
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>
                {" "}creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal">award winning</span>
                {" "}desing and art group specializing in branding, web design and
                engineering.
              </p>
              <button
                className="bg-black text-white font-sans font-medium text-[14px] px-[16px] py-[12px] rounded-[24px]"
                style={{ letterSpacing: "-0.56px" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE CONTENT
          justify-between: nav at top, content block pinned to bottom
      ════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-center justify-between pb-[24px] px-[16px] relative z-20 h-full">

        {/* Nav */}
        <nav className="flex items-center justify-between py-[24px] w-full shrink-0">
          <span
            className="font-sans font-semibold text-[16px] capitalize text-black"
            style={{ letterSpacing: "-0.64px" }}
          >
            H.Studio
          </span>
          <button
            className="w-6 h-6 flex flex-col justify-center gap-[5px] relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <>
                <span className="block w-full h-[1.5px] bg-black rounded-full rotate-45 translate-y-[3px]" />
                <span className="block w-full h-[1.5px] bg-black rounded-full -rotate-45 -translate-y-[3.5px]" />
              </>
            ) : (
              <>
                <span className="block w-full h-[1.5px] bg-black rounded-full" />
                <span className="block w-full h-[1.5px] bg-black rounded-full" />
                <span className="block w-full h-[1.5px] bg-black rounded-full" />
              </>
            )}
          </button>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="absolute inset-0 z-40 bg-black flex flex-col px-[16px] pt-[80px] pb-[40px]">
            <nav className="flex flex-col gap-[40px]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans font-semibold text-[32px] capitalize text-white"
                  style={{ letterSpacing: "-1.28px" }}
                >
                  {link}
                </a>
              ))}
            </nav>
            <button
              className="mt-auto border border-white text-white font-sans font-medium text-[14px] px-[16px] py-[12px] rounded-[24px] w-fit"
              style={{ letterSpacing: "-0.56px" }}
            >
              Let&apos;s talk
            </button>
          </div>
        )}

        {/* Bottom content — 341px tall, heading top / description+button bottom */}
        <div className="flex flex-col h-[341px] items-center justify-between w-full shrink-0">

          {/* [ Hello I'm ] + Harvey Specter */}
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center px-[18px] w-full">
              <span className="font-mono text-sm leading-[1.1] text-white uppercase mix-blend-overlay whitespace-nowrap">
                [ Hello i&apos;m ]
              </span>
            </div>
            <h1
              className="w-full text-center font-sans font-medium text-[96px] leading-[0.8] text-white capitalize mix-blend-overlay whitespace-pre-wrap"
              style={{ letterSpacing: "-6.72px" }}
            >
              {`Harvey   Specter`}
            </h1>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col gap-[17px] items-start w-[293px] shrink-0">
            <p
              className="font-sans font-bold italic text-[14px] leading-[1.1] text-[#1f1f1f] uppercase w-[294px]"
              style={{ letterSpacing: "-0.56px" }}
            >
              H.Studio is a{" "}
              <span className="font-normal">full-service</span>
              {" "}creative studio creating beautiful digital experiences and
              products. We are an{" "}
              <span className="font-normal">award winning</span>
              {" "}desing and art group specializing in branding, web design and
              engineering.
            </p>
            <button
              className="bg-black text-white font-sans font-medium text-[14px] px-[16px] py-[12px] rounded-[24px]"
              style={{ letterSpacing: "-0.56px" }}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
