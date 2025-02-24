import Image from 'next/image'

import MobileMenu from './MobileMenu'

import type { ReactElement } from 'react'

const Header = (): ReactElement => {
  return (
    <header className="absolute z-10 w-full bg-black text-white lg:bg-transparent">
      <div className="flex items-center justify-between p-4 lg:px-32 lg:py-8">
        <Image
          src="/damac-logo-white.webp"
          width={100}
          height={100}
          alt="Damac Logo"
          className="w-24 lg:w-32"
        />

        <div className="hidden items-center gap-6 text-xs font-semibold lg:flex">
          <span>Our Story</span>
          <span>Policies</span>
          <span>Self service</span>
          <span>Benefits and perks</span>
          <span>Life at DAMAC</span>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <Image
            src="/logo/search-icon-bold.svg"
            width={24}
            height={24}
            alt="search-icon"
            className="h-6 w-6 lg:h-7 lg:w-7"
          />
          <div className="hidden items-center gap-4 sm:flex">
            <div className="relative h-8 w-8 rounded-full bg-black lg:h-10 lg:w-10">
              <Image
                src="/other/avatar.png"
                alt="avatar"
                className="rounded-full object-cover"
                fill
              />
            </div>
            <div className="hidden flex-col text-xs md:flex lg:text-sm">
              <span className="font-semibold">Muhammad Khalid</span>
              <span className="font-light">Technical Web Lead</span>
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
