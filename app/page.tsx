import HeroSection from '@/components/hero-section'
import WhatsHappening from '@/components/whats-happening'
import Header from '@components/header'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <HeroSection />
      {/* <div className="bg- absolute -bottom-20 z-20 h-60 w-full rounded-t-2xl bg-gradient-to-t from-white pt-20" />
      <div className="bg- absolute -bottom-20 z-20 h-20 w-full rounded-t-full bg-white pt-20 blur-xl" />
      <div className="bg- absolute -bottom-20 z-20 h-60 w-full rounded-t-2xl bg-gradient-to-t from-white pt-20" /> */}
      <WhatsHappening />
    </div>
  )
}
