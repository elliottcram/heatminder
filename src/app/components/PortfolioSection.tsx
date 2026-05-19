import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export type PortfolioItem = {
  _id: string
  title: string
  tags: string[]
  image?: SanityImageSource
  externalImageUrl?: string
  wideImage?: boolean
  projectLink?: string
  order?: number
}

function resolveImageUrl(item: PortfolioItem): string {
  if (item.image) return urlFor(item.image).width(1200).url()
  return item.externalImageUrl ?? ''
}

// ↗ arrow button used on each project card
function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="15.5" stroke="#111" strokeWidth="1" />
      <path
        d="M11 21L21 11M21 11H13.5M21 11V18.5"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Corner({ rotate }: { rotate: 0 | 90 | 180 | -90 }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, display: 'block', flexShrink: 0 }}
      aria-hidden
    >
      <path d="M1 15V1H15" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] font-sans font-medium text-[14px] text-[#111] whitespace-nowrap"
      style={{ letterSpacing: '-0.56px' }}
    >
      {label}
    </span>
  )
}

function CtaBlock({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-stretch ${className}`}>
      <div className="flex flex-col justify-between w-6 shrink-0 py-3">
        <Corner rotate={0} />
        <Corner rotate={-90} />
      </div>
      <div className="flex-1 flex flex-col gap-[10px] items-start justify-center py-3 min-w-0">
        <p
          className="font-sans font-normal italic text-sm leading-[1.3] text-[#1f1f1f]"
          style={{ letterSpacing: '-0.56px' }}
        >
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button
          className="bg-black text-white font-sans font-medium text-sm px-4 py-3 rounded-[24px] shrink-0"
          style={{ letterSpacing: '-0.56px' }}
        >
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between w-6 shrink-0 py-3">
        <Corner rotate={90} />
        <Corner rotate={180} />
      </div>
    </div>
  )
}

function ProjectCard({
  item,
  imgHeight,
  titleSize = 'text-[36px]',
  tracking = '-1.44px',
}: {
  item: PortfolioItem
  imgHeight: string
  titleSize?: string
  tracking?: string
}) {
  const imgUrl = resolveImageUrl(item)
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className={`relative ${imgHeight} w-full overflow-hidden`}>
        {item.wideImage ? (
          <img
            alt=""
            className="absolute max-w-none h-full top-0 object-cover"
            style={{ width: '175.2%', left: '-1.21%' }}
            src={imgUrl}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        )}
        <div className="absolute bottom-4 left-4 flex gap-3 items-center z-10">
          {item.tags?.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className={`font-sans font-black ${titleSize} leading-[1.1] text-black uppercase`}
          style={{ letterSpacing: tracking }}
        >
          {item.title}
        </p>
        <div className="shrink-0 -rotate-90">
          <ArrowIcon />
        </div>
      </div>
    </div>
  )
}

// Heights alternate: 744 → 699 → 699 → 744 to preserve the staggered layout
const DESKTOP_HEIGHTS = ['h-[744px]', 'h-[699px]', 'h-[699px]', 'h-[744px]']

export default function PortfolioSection({ projects }: { projects: PortfolioItem[] }) {
  const leftProjects = projects.slice(0, 2)
  const rightProjects = projects.slice(2, 4)

  return (
    <section className="bg-[#fafafa] px-4 py-12 md:px-8 md:py-20">

      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase">
          <div
            className="font-sans font-light text-[96px] text-black leading-[0.86]"
            style={{ letterSpacing: '-7.68px' }}
          >
            <p className="mb-0">Selected</p>
            <p>Work</p>
          </div>
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f] mt-2">004</span>
        </div>
        <div className="flex items-center justify-center w-[15px] h-[110px]">
          <p
            className="font-mono text-sm leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap"
            style={{ transform: 'rotate(-90deg)' }}
          >
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
        <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">[ portfolio ]</p>
        <div className="flex items-start justify-between">
          <div
            className="font-sans font-light text-[32px] text-black leading-[0.86]"
            style={{ letterSpacing: '-2.56px' }}
          >
            <p className="mb-0">Selected</p>
            <p>Work</p>
          </div>
          <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">004</span>
        </div>
      </div>

      {/* Desktop: staggered two-column grid */}
      <div className="hidden md:flex gap-6 items-start">
        <div className="flex-1 flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            {leftProjects.map((p, i) => (
              <ProjectCard key={p._id} item={p} imgHeight={DESKTOP_HEIGHTS[i]} />
            ))}
          </div>
          <CtaBlock className="max-w-[465px] mt-10" />
        </div>
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          {rightProjects.map((p, i) => (
            <ProjectCard key={p._id} item={p} imgHeight={DESKTOP_HEIGHTS[i + 2]} />
          ))}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p._id}
            item={p}
            imgHeight="h-[390px]"
            titleSize="text-[24px]"
            tracking="-0.96px"
          />
        ))}
        <CtaBlock className="mt-2" />
      </div>

    </section>
  )
}
