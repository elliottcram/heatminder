const IMG_1 = "https://www.figma.com/api/mcp/asset/5ebeed7e-f9f4-4470-8126-260a255e87df";
const IMG_2 = "https://www.figma.com/api/mcp/asset/67360fd0-c7d2-4d63-98a4-b6f034f677d5";
const IMG_3 = "https://www.figma.com/api/mcp/asset/57640a7f-5bbd-4a53-87c3-03f790360557";

const DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function ArrowDiagonal() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReadMore() {
  return (
    <div className="flex items-center gap-[10px] border-b border-black pb-1 w-fit">
      <span
        className="font-sans font-medium text-sm text-black whitespace-nowrap"
        style={{ letterSpacing: "-0.56px" }}
      >
        Read more
      </span>
      <ArrowDiagonal />
    </div>
  );
}

function ArticleCard({
  img,
  desc,
  imgHeight,
}: {
  img: string;
  desc: string;
  imgHeight: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className={`${imgHeight} w-full overflow-hidden shrink-0`}>
        <img alt="" className="w-full h-full object-cover" src={img} />
      </div>
      <p
        className="font-sans font-normal text-sm leading-[1.3] text-[#1f1f1f]"
        style={{ letterSpacing: "-0.56px" }}
      >
        {desc}
      </p>
      <ReadMore />
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8">
        <p
          className="font-sans font-light text-[32px] leading-[0.86] text-black uppercase"
          style={{ letterSpacing: "-2.56px" }}
        >
          Keep up with my latest news &amp; achievements
        </p>

        {/* Horizontal scrolling card row */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[IMG_1, IMG_2, IMG_3].map((img, i) => (
            <div key={i} className="flex flex-col gap-4 shrink-0 w-[300px]">
              <div className="h-[398px] w-[300px] overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={img} />
              </div>
              <p
                className="font-sans font-normal text-sm leading-[1.3] text-[#1f1f1f]"
                style={{ letterSpacing: "-0.56px" }}
              >
                {DESC}
              </p>
              <ReadMore />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between gap-8">

        {/* Rotated title — 110px wide × 706px tall container */}
        <div className="flex h-[706px] w-[110px] shrink-0 items-center justify-center overflow-visible">
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            <p
              className="font-sans font-light text-[64px] leading-[0.86] text-black uppercase mb-0"
              style={{ letterSpacing: "-5.12px" }}
            >
              Keep up with my latest
            </p>
            <p
              className="font-sans font-light text-[64px] leading-[0.86] text-black uppercase"
              style={{ letterSpacing: "-5.12px" }}
            >
              news &amp; achievements
            </p>
          </div>
        </div>

        {/* 3 cards with vertical dividers */}
        <div className="flex flex-1 items-start min-w-0">

          {/* Card 1 */}
          <div className="flex-1 min-w-0 pr-8">
            <ArticleCard img={IMG_1} desc={DESC} imgHeight="h-[469px]" />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#ccc] self-stretch shrink-0" />

          {/* Card 2 — offset 120px from top */}
          <div className="flex-1 min-w-0 px-8 pt-[120px]">
            <ArticleCard img={IMG_2} desc={DESC} imgHeight="h-[469px]" />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#ccc] self-stretch shrink-0" />

          {/* Card 3 */}
          <div className="flex-1 min-w-0 pl-8">
            <ArticleCard img={IMG_3} desc={DESC} imgHeight="h-[469px]" />
          </div>

        </div>
      </div>

    </section>
  );
}
