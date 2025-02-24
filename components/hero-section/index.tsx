'use server'

import Image from 'next/image'

import BackgroundVideo from './background-video'

import type { ReactElement } from 'react'
import Card from './card'

const HeroSection = (): ReactElement => {
  return (
    <div className="relative -mt-2 h-full w-full bg-black text-white">
      <div className="absolute z-30 flex h-full w-full flex-col items-center justify-center gap-4 px-32">
        <h1 className="font-black uppercase tracking-[0.4em]">
          hello Mohammad Khalid
        </h1>
        <Image
          src="/other/headline-main.svg"
          alt="headline"
          width={300}
          height={300}
        />
        <h2 className="text-base font-medium">
          Our commitment to nurture every single member of Damac
        </h2>
        <div className="flex w-full items-center justify-center gap-4 pt-10">
          <Card
            src="/other/actor-2.png"
            alt="actor-2"
            title="We Enable"
            br="Aspirations"
          />
          <Card
            src="/other/actor-1.png"
            alt="actor-2"
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
      <BackgroundVideo />
    </div>
  )
}

export default HeroSection
