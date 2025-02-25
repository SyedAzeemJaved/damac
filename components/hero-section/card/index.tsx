'use server'

import Image from 'next/image'

import type { ReactElement } from 'react'
import { Props } from './types'

const Card = ({ src, alt, title, br }: Props): ReactElement => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl lg:rounded-xl">
        <Image src={src} alt={alt} className="object-cover" fill />
        <div className="absolute inset-0 flex flex-col justify-end rounded-b-2xl bg-gradient-to-t from-black/80 p-4 lg:rounded-b-xl lg:p-6">
          <div className="flex w-full items-center justify-between">
            <span className="text-base font-bold text-white sm:text-lg lg:text-xl">
              {title} <br /> {br}
            </span>
            <Image
              src="/logo/arrow-white.svg"
              alt="arrow-icon"
              width={20}
              height={10}
              className="h-2.5 w-5 sm:h-3 sm:w-6 lg:h-4 lg:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
