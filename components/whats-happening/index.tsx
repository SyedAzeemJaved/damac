'use server'

import Marquee from './marquee'

import type { ReactElement } from 'react'

const WhatsHappening = (): ReactElement => {
  return (
    <div className="mt-20 w-full bg-white text-black">
      <h3 className="font-termina-medium text-center text-2xl lg:text-5xl">
        What&apos;s happening
      </h3>
      <h4 className="mt-4 text-center text-lg leading-tight lg:text-xl">
        DAMAC continues to make headlines across globe in different sectors and
        industries
      </h4>

      <Marquee />
    </div>
  )
}

export default WhatsHappening
