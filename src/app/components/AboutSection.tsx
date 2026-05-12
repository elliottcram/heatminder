const PORTRAIT =
  "https://www.figma.com/api/mcp/asset/cfd1c845-b7c1-4328-bb85-ab68fe378554";

// Single L-shape SVG; rotation applied per corner
function Corner({ rotate }: { rotate: 0 | 90 | 180 | -90 }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, display: "block", flexShrink: 0 }}
    >
      {/* top-left bracket ┌ */}
      <path d="M1 15V1H15" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-[#fafafa] px-4 py-12 md:px-8 md:py-20">

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex items-start justify-between w-full">

        {/* [ About ] label — top-left */}
        <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f] uppercase shrink-0">
          [ About ]
        </p>

        {/* Right block: text + photo, bottom-aligned */}
        <div className="flex gap-8 items-end w-[983px] shrink-0">

          {/* Text block with corner brackets */}
          <div className="flex flex-1 gap-3 items-stretch min-w-0">

            {/* Left bracket column */}
            <div className="flex flex-col justify-between w-6 shrink-0 py-3">
              <Corner rotate={0} />
              <Corner rotate={-90} />
            </div>

            {/* Paragraph */}
            <p className="flex-1 font-sans font-normal text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] py-3">
              Harvey Specter is a creative director and photographer with over 8 years in the industry. Known for his sharp eye and relentless drive, he approaches every project with precision and intent — blending raw visual instinct with strategic thinking to produce work that cuts through the noise.
              <br /><br />
              Based on the south side of Chicago, Harvey specialises in brand identity, editorial photography and creative direction for artists, agencies and ambitious brands. His work is defined by a commitment to authenticity and an obsession with craft.
            </p>

            {/* Right bracket column */}
            <div className="flex flex-col justify-between w-6 shrink-0 py-3">
              <Corner rotate={90} />
              <Corner rotate={180} />
            </div>
          </div>

          {/* Photo + 002 label */}
          <div className="flex gap-6 items-start shrink-0">
            <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">002</span>
            <div className="w-[436px] h-[614px] overflow-hidden">
              <img
                alt="Harvey Specter portrait"
                className="w-full h-full object-cover"
                src={PORTRAIT}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col gap-8">

        {/* [ About ] label */}
        <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f] uppercase">
          [ About ]
        </p>

        {/* Photo — full width */}
        <div className="w-full aspect-[3/4] overflow-hidden">
          <img
            alt="Harvey Specter portrait"
            className="w-full h-full object-cover object-top"
            src={PORTRAIT}
          />
        </div>

        {/* 002 + text with corner brackets */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">002</span>

          <div className="flex gap-3 items-stretch">
            {/* Left brackets */}
            <div className="flex flex-col justify-between w-4 shrink-0 py-2">
              <Corner rotate={0} />
              <Corner rotate={-90} />
            </div>

            {/* Text */}
            <p className="flex-1 font-sans font-normal text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] py-2">
              Harvey Specter is a creative director and photographer with over 8 years in the industry. Known for his sharp eye and relentless drive, he approaches every project with precision and intent — blending raw visual instinct with strategic thinking to produce work that cuts through the noise.
              <br /><br />
              Based on the south side of Chicago, Harvey specialises in brand identity, editorial photography and creative direction for artists, agencies and ambitious brands.
            </p>

            {/* Right brackets */}
            <div className="flex flex-col justify-between w-4 shrink-0 py-2">
              <Corner rotate={90} />
              <Corner rotate={180} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
