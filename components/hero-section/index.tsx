'use server'

import Image from 'next/image'

import BackgroundVideo from './background-video'

import type { ReactElement } from 'react'
import Card from './card'

const HeroSection = (): ReactElement => {
  return (
    <div className="w-full h-full bg-black relative text-white -mt-2">
      <div className="w-full h-full flex items-center absolute flex-col z-30 justify-center gap-4 px-32">
        <h1 className="uppercase font-black tracking-[0.4em]">
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
        <div className="w-full flex items-center gap-4 justify-center pt-10">
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
