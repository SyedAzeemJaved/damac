'use server'

import Image from 'next/image'

import type { ReactElement } from 'react'
import type { Props } from './types'

const Card = ({ src, alt, title, br }: Props): ReactElement => {
  return (
    <div className="relative h-96 w-96 rounded-2xl bg-white">
      <Image src={src} alt={alt} className="rounded-2xl object-cover" fill />
      <div className="absolute flex h-full w-full flex-col justify-end rounded-b-2xl bg-gradient-to-t from-black/80 p-10">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {title} <br /> {br}
          </span>
          <Image
            src="/logo/arrow-white.svg"
            alt="arrow-icon"
            width={40}
            height={20}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
