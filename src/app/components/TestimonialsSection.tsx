const LOGO_MARKO = "/images/logo-marko.png";
const LOGO_LUKAS  = "/images/logo-lukas.png";
const LOGO_SARAH  = "/images/logo-sarah.png";
const LOGO_SOFIA  = "/images/logo-sofia.png";

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  name,
  cardW = 353,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  cardW?: number;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px]"
      style={{ width: cardW }}
    >
      <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-left"
          src={logo}
        />
      </div>
      <p
        className="font-sans font-normal text-[18px] leading-[1.3] text-[#1f1f1f]"
        style={{ letterSpacing: "-0.72px" }}
      >
        {quote}
      </p>
      <p
        className="font-sans font-black text-[16px] leading-[1.1] text-black uppercase whitespace-nowrap"
        style={{ letterSpacing: "-0.64px" }}
      >
        {name}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fafafa]">

      {/* ── Desktop: scattered cards over large heading ── */}
      <div className="hidden md:block relative min-h-[987px] overflow-hidden">

        {/* Heading — vertically centered in the section */}
        <p
          className="absolute inset-x-8 top-1/2 -translate-y-1/2 font-sans font-medium text-black text-center leading-[1.1] capitalize"
          style={{ fontSize: "198px", letterSpacing: "-13.86px" }}
        >
          Testimonials
        </p>

        {/* Marko Stojković — top left */}
        <div className="absolute" style={{ top: 142, left: 102, transform: "rotate(-6.85deg)" }}>
          <TestimonialCard
            logo={LOGO_MARKO}
            logoW={142.749}
            logoH={18.97}
            quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
            name="Marko Stojković"
          />
        </div>

        {/* Lukas Weber — upper right */}
        <div className="absolute" style={{ top: 272, left: 676, transform: "rotate(2.9deg)" }}>
          <TestimonialCard
            logo={LOGO_LUKAS}
            logoW={137.733}
            logoH={19.263}
            quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
            name="Lukas Weber"
          />
        </div>

        {/* Sarah Jenkins — lower left */}
        <div className="absolute" style={{ top: 553, left: 32, transform: "rotate(2.23deg)" }}>
          <TestimonialCard
            logo={LOGO_SARAH}
            logoW={108.537}
            logoH={30.748}
            quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
            name="Sarah Jenkins"
          />
        </div>

        {/* Sofia Martínez — lower center-right */}
        <div className="absolute" style={{ top: 546, left: 900, transform: "rotate(-4.15deg)" }}>
          <TestimonialCard
            logo={LOGO_SOFIA}
            logoW={81.1}
            logoH={36.174}
            quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
            name="Sofia Martínez"
          />
        </div>

      </div>

      {/* ── Mobile: heading + two overlapping cards ── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16">

        <p
          className="font-sans font-medium text-[64px] leading-[0.8] text-black text-center capitalize"
          style={{ letterSpacing: "-4.48px" }}
        >
          Testimonials
        </p>

        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex items-center w-max">
            {/* First card — slight left overlap on second */}
            <div className="shrink-0 relative z-10 mr-[-10px]" style={{ transform: "rotate(-3.5deg)" }}>
              <TestimonialCard
                logo={LOGO_MARKO}
                logoW={142.749}
                logoH={18.97}
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                name="Marko Stojković"
                cardW={260}
              />
            </div>
            <div className="shrink-0 relative" style={{ transform: "rotate(2deg)" }}>
              <TestimonialCard
                logo={LOGO_SOFIA}
                logoW={81.1}
                logoH={36.174}
                quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
                name="Sofia Martínez"
                cardW={260}
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
