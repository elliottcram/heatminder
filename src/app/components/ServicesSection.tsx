const SERVICES = [
  {
    num: "[ 1 ]",
    title: "Brand Discovery",
    desc: "We dig deep into what makes you different — your story, your audience, and your ambition. The result is a clear creative direction and a visual identity that stands out and holds up.",
    img: "/images/service-brand.png",
  },
  {
    num: "[ 2 ]",
    title: "Web Design & Dev",
    desc: "High-performance websites built with precision. From concept to deployment, we craft digital experiences that look exceptional and convert — built to be fast, responsive, and memorable.",
    img: "/images/service-web.png",
  },
  {
    num: "[ 3 ]",
    title: "Marketing",
    desc: "Strategic campaigns and content that cut through noise and drive results. We combine sharp creative with data-informed thinking to get your brand in front of the right people.",
    img: "/images/service-marketing.png",
  },
  {
    num: "[ 4 ]",
    title: "Photography",
    desc: "Compelling imagery that tells your story on sight. From editorial shoots to product photography, every frame is composed with intention and finished to a commercial standard.",
    img: "/images/service-photography.png",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="bg-black px-4 py-12 flex flex-col gap-8 md:px-8 md:py-20 md:gap-12">

      {/* [ services ] label */}
      <p className="font-mono text-sm leading-[1.1] text-white uppercase">
        [ services ]
      </p>

      {/* [4]  ·  Deliverables */}
      <div className="flex items-center justify-between w-full uppercase">
        <span className="font-sans font-light text-[32px] text-white [letter-spacing:-2.56px] md:text-[96px] md:[letter-spacing:-7.68px]">
          [4]
        </span>
        <span className="font-sans font-light text-[32px] text-white [letter-spacing:-2.56px] md:text-[96px] md:[letter-spacing:-7.68px]">
          Deliverables
        </span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12">
        {SERVICES.map((s) => (
          <div key={s.num} className="flex flex-col gap-[9px]">

            {/* Number + rule */}
            <div className="flex flex-col gap-[9px]">
              <p className="font-mono text-sm leading-[1.1] text-white uppercase">
                {s.num}
              </p>
              <div className="w-full h-px bg-white/20" />
            </div>

            {/* Desktop: title left, description + image right */}
            <div className="hidden md:flex flex-wrap items-start justify-between gap-y-4">
              <p
                className="font-sans font-bold italic text-[36px] leading-[1.1] text-white uppercase shrink-0"
                style={{ letterSpacing: "-1.44px" }}
              >
                {s.title}
              </p>
              <div className="flex flex-wrap gap-6 items-start">
                <p className="font-sans font-normal text-sm leading-[1.3] text-white w-[393px]"
                   style={{ letterSpacing: "-0.56px" }}>
                  {s.desc}
                </p>
                <div className="w-[151px] h-[151px] shrink-0 overflow-hidden">
                  <img
                    alt={s.title}
                    src={s.img}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden flex flex-col gap-4">
              <p
                className="font-sans font-bold italic text-[36px] leading-[1.1] text-white uppercase"
                style={{ letterSpacing: "-1.44px" }}
              >
                {s.title}
              </p>
              <p className="font-sans font-normal text-sm leading-[1.3] text-white"
                 style={{ letterSpacing: "-0.56px" }}>
                {s.desc}
              </p>
              <div className="w-[151px] h-[151px] overflow-hidden">
                <img
                  alt={s.title}
                  src={s.img}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
