import Header from '@components/header'
import HeroSection from '@/components/hero-section'
import WhatsHappening from '@/components/whats-happening'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <HeroSection />
      <WhatsHappening />
    </div>
  )
}
