import { Link } from '@tanstack/react-router'
import Logo from './Logo'
import { IconArrowRight, IconMenu, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import clsx from 'clsx'
import { Route as AboutRoute } from '@/routes/about'
import { Route as WorkRoute } from '@/routes/work'
import { Route as FiguresRoute } from '@/routes/figures'
import { Route as DonationRoute } from '@/routes/donations'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { linkTo: '/', text: 'Home' },
    { linkTo: AboutRoute.to, text: 'About us' },
    { linkTo: WorkRoute.to, text: 'Our work' },
    { linkTo: FiguresRoute.to, text: 'Visionaries' },
    { linkTo: DonationRoute.to, text: 'Donations' },
  ]

  return (
    <>
      {/* Top navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md font-Dm-Sans">
        <div className="flex justify-between items-center px-4 md:px-8 py-3">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-10">
              {links.map((link) => (
                <Link
                  key={link.text}
                  to={link.linkTo}
                  activeOptions={{ exact: true }}
                  className={clsx(
                    'relative py-2 transition-all',
                    'before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-Orange before:transition-all',
                    'hover:before:w-full [&.active]:before:w-full'
                  )}
                >
                  {link.text}
                </Link>
              ))}
            </nav>

            {/* CTA button */}
            <Link
              to="/"
              className="px-5 py-2 rounded-sm bg-Orange hover:bg-Orange-Hover active:bg-Orange-Active bg-gradient-to-tr from-transparent from-50% to-white/40 text-white shadow-md flex items-center justify-center gap-2 transition active:scale-95"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <IconMenu
            onClick={() => setIsOpen(true)}
            className="md:hidden w-7 h-7 cursor-pointer"
          />
        </div>
      </header>

      {/* Mobile drawer menu */}
     {/* Mobile drawer menu */}
<div
  className={clsx(
    'fixed top-0 left-0 h-screen w-screen bg-black flex flex-col gap-4 px-6 py-6 transform transition-transform duration-300 z-50', // add z-50
    isOpen ? 'translate-x-0' : '-translate-x-full'
  )}
>

        {/* Close button */}
        <IconX
          className="ml-auto text-white w-7 h-7 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile nav links */}
        <nav className="mt-6 flex flex-col gap-3 z-99">
          {links.map((link) => (
            <Link
              key={link.text}
              to={link.linkTo}
              activeOptions={{ exact: true }}
              onClick={() => setIsOpen(false)}
              className="w-full flex justify-between items-center text-lg text-white py-2 px-4 rounded-sm tracking-tight transition hover:bg-white/10 [&.active]:bg-white [&.active]:text-black"
            >
              {link.text}
              <IconArrowRight className="-rotate-45" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
