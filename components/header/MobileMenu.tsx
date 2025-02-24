'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'

import type { ReactElement } from 'react'

const MobileMenu = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        className="cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-black px-4 py-4 font-semibold lg:hidden">
          <div className="flex flex-col gap-4">
            <span>Our Story</span>
            <span>Policies</span>
            <span>Self service</span>
            <span>Benefits and perks</span>
            <span>Life at DAMAC</span>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
