import HeroSection from '@/components/hero-section'
import WhatsHappening from '@/components/whats-happening'
import Header from '@components/header'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <HeroSection />
      <div className="w-full bg- absolute z-20 rounded-t-2xl pt-20 -bottom-20 h-60 bg-gradient-to-t from-white" />
      <div className="w-full bg- absolute z-20 pt-20 -bottom-20 h-20 bg-white rounded-t-full blur-xl" />
      <div className="w-full bg- absolute z-20 rounded-t-2xl pt-20 -bottom-20 h-60 bg-gradient-to-t from-white" />
      <WhatsHappening />
    </div>
  )
}
