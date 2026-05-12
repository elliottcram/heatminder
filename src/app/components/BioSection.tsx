export default function BioSection() {
  return (
    <section className="bg-[#fafafa] overflow-x-hidden px-4 py-12 md:px-8 md:py-[120px]">

      {/* ── Header: label + rule ── */}
      <div className="flex flex-col gap-3 items-end w-full mb-6">
        <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f] text-right uppercase">
          [ 8+ years in industry ]
        </p>
        <div className="w-full h-px bg-[#1f1f1f]/20" />
      </div>

      {/* ── Staggered headline ── */}

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-[8px] items-start w-full">

        {/* Line 1: A creative director / + 001 */}
        <div className="flex gap-3 items-start uppercase">
          <p
            className="font-sans font-light text-[96px] leading-[0.84] text-black whitespace-pre"
            style={{ letterSpacing: "-7.68px" }}
          >
            {`A creative director   /`}
          </p>
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f] shrink-0 mt-2">
            001
          </span>
        </div>

        {/* Line 2: Photographer — 214px indent */}
        <div className="pl-[214px] uppercase">
          <p
            className="font-sans font-light text-[96px] leading-[0.84] text-black whitespace-nowrap"
            style={{ letterSpacing: "-7.68px" }}
          >
            Photographer
          </p>
        </div>

        {/* Line 3: Born & raised — 610px indent, & in Playfair italic */}
        <div className="pl-[610px] uppercase">
          <p
            className="font-sans font-light text-[96px] leading-[0.84] text-black whitespace-nowrap"
            style={{ letterSpacing: "-7.68px" }}
          >
            Born{" "}
            <span
              className="font-playfair italic font-normal"
              style={{ letterSpacing: 0 }}
            >
              &amp;
            </span>
            {" "}raised
          </p>
        </div>

        {/* Line 4: on the south side — left-aligned */}
        <div className="uppercase">
          <p
            className="font-sans font-light text-[96px] leading-[0.84] text-black whitespace-nowrap"
            style={{ letterSpacing: "-7.68px" }}
          >
            on the south side
          </p>
        </div>

        {/* Line 5: of chicago. — 606px indent + [ creative freelancer ] label to the right */}
        <div className="flex items-end pl-[606px] w-full uppercase">
          <p
            className="font-sans font-light text-[96px] leading-[0.84] text-black whitespace-nowrap"
            style={{ letterSpacing: "-7.68px" }}
          >
            of chicago.
          </p>
          <span className="ml-auto font-mono text-sm leading-[1.1] text-[#1f1f1f] whitespace-nowrap shrink-0">
            [ creative freelancer ]
          </span>
        </div>
      </div>

      {/* Mobile — centred, 32px */}
      <div className="md:hidden flex flex-col gap-[8px] items-center w-full">

        <div className="flex flex-col items-center gap-3 uppercase">
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">001</span>
          <p
            className="font-sans font-light text-[32px] leading-[0.84] text-black text-center whitespace-pre"
            style={{ letterSpacing: "-2.56px" }}
          >
            {`A creative director   /`}
          </p>
        </div>

        <p
          className="font-sans font-light text-[32px] leading-[0.84] text-black uppercase text-center whitespace-nowrap"
          style={{ letterSpacing: "-2.56px" }}
        >
          Photographer
        </p>

        <p
          className="font-sans font-light text-[32px] leading-[0.84] text-black uppercase text-center whitespace-nowrap"
          style={{ letterSpacing: "-2.56px" }}
        >
          Born{" "}
          <span className="font-playfair italic font-normal" style={{ letterSpacing: 0 }}>
            &amp;
          </span>
          {" "}raised
        </p>

        <p
          className="font-sans font-light text-[32px] leading-[0.84] text-black uppercase text-center whitespace-nowrap"
          style={{ letterSpacing: "-2.56px" }}
        >
          on the south side
        </p>

        <div className="flex flex-col items-center gap-3 uppercase">
          <p
            className="font-sans font-light text-[32px] leading-[0.84] text-black text-center whitespace-nowrap"
            style={{ letterSpacing: "-2.56px" }}
          >
            of chicago.
          </p>
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
            [ creative freelancer ]
          </span>
        </div>
      </div>

    </section>
  );
}
