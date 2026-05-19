import { client } from '@/sanity/lib/client'
import HeroSection from './components/HeroSection'
import BioSection from './components/BioSection'
import AboutSection from './components/AboutSection'
import PhotoBreak from './components/PhotoBreak'
import ServicesSection from './components/ServicesSection'
import PortfolioSection, { type PortfolioItem } from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(order asc) {
  _id,
  title,
  slug,
  tags,
  image,
  externalImageUrl,
  wideImage,
  projectLink,
  order
}`

export default async function Home() {
  const projects = await client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY)

  return (
    <main>
      <HeroSection />
      <BioSection />
      <AboutSection />
      <PhotoBreak />
      <ServicesSection />
      <PortfolioSection projects={projects} />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
