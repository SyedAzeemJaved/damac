'use server'

import Image from 'next/image'

import type { ReactElement } from 'react'

const Header = (): ReactElement => {
  return (
    <div className="w-full absolute h-32 bg-transparent flex items-center z-10 px-32 justify-between text-white">
      <Image src="/damac-logo-white.webp" width={150} height={150} alt="logo" />
      <div className="flex items-center gap-6 font-semibold">
        <span>Our Story</span>
        <span>Policies</span>
        <span>Self service</span>
        <span>Benefits and perks</span>
        <span>Life at DAMAC</span>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src="/logo/search-icon-bold.svg"
          width={28}
          height={28}
          alt="search-icon"
        />
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-black relative">
            <Image
              src="/other/avatar.png"
              alt="avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold">Muhammad Khalid</span>
            <span className="font-light">Technical Web Lead</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
