'use server'

import Image from 'next/image'

import { ReactElement } from 'react'

const Marquee = (): ReactElement => {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <div className="absolute bottom-2 left-1/2 h-14 w-[50%] -translate-x-1/2">
        <Image
          src="/other/marquee-vector.svg"
          alt="marquee-vector"
          fill
          className="object-fit"
        />
      </div>

      <div className="font-termina-medium flex overflow-x-hidden text-3xl lg:text-8xl">
        <div className="animate-marquee whitespace-nowrap py-12">
          <span className="mx-4">We Learn</span>
          <span className="mx-4">We Celebrate</span>
          <span className="mx-4">We Engage</span>
        </div>

        <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
          <span className="mx-4">We Learn</span>
          <span className="mx-4">We Celebrate</span>
          <span className="mx-4">We Engage</span>
        </div>
      </div>
    </div>
  )
}

export default Marquee
