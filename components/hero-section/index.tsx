'use server'

import Image from 'next/image'

import BackgroundVideo from './background-video'
import Card from './card'

import type { ReactElement } from 'react'

const HeroSection = (): ReactElement => {
  return (
    <div className="relative h-full w-full bg-black text-white">
      <BackgroundVideo />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 md:p-8 lg:p-16 xl:p-32">
        <h1 className="mb-2 text-center text-xs font-black uppercase tracking-[0.2em] sm:mb-4 sm:text-sm sm:tracking-[0.3em] md:text-base md:tracking-[0.4em]">
          Hello Mohammad Khalid
        </h1>
        <Image
          src="/other/headline-main.svg"
          alt="headline"
          width={300}
          height={300}
          className="w-4/5 max-w-[240px] sm:max-w-[280px] md:max-w-[300px]"
        />
        <h2 className="mt-2 px-4 text-center text-xs font-medium sm:mt-4 sm:px-8 sm:text-sm md:px-16 md:text-base">
          Our commitment to nurture every single member of Damac
        </h2>

        <div className="z-40 mt-6 grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <Card
            src="/other/actor-2.png"
            alt="actor-2"
            title="We Enable"
            br="Aspirations"
          />
          <Card
            src="/other/actor-1.png"
            alt="actor-1"
            title="We Offer"
            br="Careers"
          />
          <Card src="/other/actor-3.png" alt="actor-3" title="We" br="Care" />
          <Card
            src="/other/actor-4.png"
            alt="actor-4"
            title="We Are"
            br="Global"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
