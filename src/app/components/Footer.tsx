export default function Footer() {
  return (
    <footer className="bg-black px-4 pt-12 flex flex-col gap-12 md:px-8 md:pt-[48px] md:gap-[120px]">

      {/* ── Top block: CTA + socials + rule ── */}
      <div className="flex flex-col gap-6 md:gap-[48px]">

        {/* Mobile: stacked CTA then all four socials */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p
              className="font-sans font-light italic text-[24px] leading-[1.1] text-white uppercase"
              style={{ letterSpacing: "-0.96px" }}
            >
              Have a <span className="font-black not-italic">project</span> in mind?
            </p>
            <button
              className="border border-white text-white font-sans font-medium text-sm px-4 py-3 rounded-[24px] w-fit"
              style={{ letterSpacing: "-0.56px" }}
            >
              Let&apos;s talk
            </button>
          </div>
          {["Facebook", "Instagram", "X.com", "Linkedin"].map((s) => (
            <p
              key={s}
              className="font-sans font-normal text-[18px] leading-[1.1] text-white uppercase"
              style={{ letterSpacing: "-0.72px" }}
            >
              {s}
            </p>
          ))}
        </div>

        {/* Desktop: three-column row */}
        <div className="hidden md:flex items-start justify-between">
          {/* CTA */}
          <div className="flex flex-col gap-3 w-[298px]">
            <p
              className="font-sans font-light italic text-[24px] leading-[1.1] text-white uppercase"
              style={{ letterSpacing: "-0.96px" }}
            >
              Have a <span className="font-black not-italic">project</span> in mind?
            </p>
            <button
              className="border border-white text-white font-sans font-medium text-sm px-4 py-3 rounded-[24px] w-fit"
              style={{ letterSpacing: "-0.56px" }}
            >
              Let&apos;s talk
            </button>
          </div>
          {/* Centre social */}
          <div className="w-[298px] text-center">
            {["Facebook", "Instagram"].map((s) => (
              <p
                key={s}
                className="font-sans font-normal text-[18px] leading-[1.1] text-white uppercase"
                style={{ letterSpacing: "-0.72px" }}
              >
                {s}
              </p>
            ))}
          </div>
          {/* Right social */}
          <div className="w-[298px] text-right">
            {["X.com", "Linkedin"].map((s) => (
              <p
                key={s}
                className="font-sans font-normal text-[18px] leading-[1.1] text-white uppercase"
                style={{ letterSpacing: "-0.72px" }}
              >
                {s}
              </p>
            ))}
          </div>
        </div>

        {/* Rule */}
        <div className="w-full h-px bg-white/30" />
      </div>

      {/* ── Bottom: H.Studio + legal links ── */}

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4 h-[150px] overflow-hidden">
        <div
          className="flex gap-[34px] items-center font-sans text-[12px] text-white text-center uppercase"
          style={{ letterSpacing: "-0.48px" }}
        >
          <span className="underline decoration-solid">Licences</span>
          <span className="underline decoration-solid">Privacy policy</span>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] leading-[1.1] text-white uppercase">
            [ Coded By Claude ]
          </p>
          <p
            className="font-sans font-semibold text-white capitalize leading-[0.8] whitespace-nowrap"
            style={{ fontSize: "91.425px", letterSpacing: "-5.4855px" }}
          >
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-end justify-between">

        {/* H.Studio clipped container */}
        <div
          className="relative overflow-hidden shrink-0"
          style={{ width: "1093px", height: "219px" }}
        >
          {/* Large wordmark */}
          <p
            className="absolute font-sans font-semibold text-white capitalize whitespace-nowrap"
            style={{
              fontSize: "290px",
              letterSpacing: "-17.4px",
              lineHeight: "0.8",
              left: "5px",
              top: "calc(50% + 6.5px)",
              transform: "translateY(-50%)",
            }}
          >
            H.Studio
          </p>

          {/* [ Coded By Claude ] — rotated -90° at far left */}
          <div
            className="absolute flex items-center justify-center"
            style={{ left: 0, top: "calc(50% - 75.5px)", width: "15px", height: "160px" }}
          >
            <p
              className="font-mono text-sm text-white uppercase whitespace-nowrap"
              style={{ transform: "rotate(-90deg)" }}
            >
              [ Coded By Claude ]
            </p>
          </div>
        </div>

        {/* Legal links — pinned to bottom-right */}
        <div
          className="flex gap-[34px] items-center pb-8 font-sans text-[12px] text-white text-center uppercase shrink-0"
          style={{ letterSpacing: "-0.48px" }}
        >
          <span className="underline decoration-solid">Licences</span>
          <span className="underline decoration-solid">Privacy policy</span>
        </div>

      </div>

    </footer>
  );
}
