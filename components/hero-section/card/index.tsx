'use server'

import Image from 'next/image'

import type { ReactElement } from 'react'
import type { Props } from './types'

const Card = ({ src, alt, title, br }: Props): ReactElement => {
  return (
    <div className="w-96 h-96 rounded-2xl bg-white relative">
      <Image src={src} alt={alt} className="rounded-2xl object-cover" fill />
      <div className="absolute w-full h-full justify-end p-10 flex flex-col bg-gradient-to-t from-black/80 rounded-b-2xl">
        <div className="w-full flex items-center justify-between">
          <span className="font-bold text-white text-2xl">
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
