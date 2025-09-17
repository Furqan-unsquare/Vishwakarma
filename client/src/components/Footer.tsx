import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCopyright,
  IconLocation,
  IconMail,
  IconPhone,
} from '@tabler/icons-react'
import Logo from './Logo'
import { Link } from '@tanstack/react-router'
import { Route as AboutRoute } from '@/routes/about'
import { Route as WorkRoute } from '@/routes/work'
import { Route as FiguresRoute } from '@/routes/figures'
import { Route as DonationRoute } from '@/routes/donations'

function Footer() {
  const quickLinks = [
    { linkTo: '/', text: 'Home' },
    { linkTo: AboutRoute.to, text: 'About us' },
    { linkTo: WorkRoute.to, text: 'Our Work' },
    { linkTo: FiguresRoute.to, text: 'Figures' },
    { linkTo: DonationRoute.to, text: 'Donations' },
  ]

  const projects = [
    { linkTo: '/', text: 'Recovery Services' },
    { linkTo: '/', text: 'Samuhik Vivaah' },
    { linkTo: '/', text: 'Poverty Upliftment' },
  ]

  const legals = [
    { linkTo: '/', text: 'Support' },
    { linkTo: '/', text: 'Privacy Policy' },
    { linkTo: '/', text: 'Cookie Policy' },
    { linkTo: '/', text: 'Terms of Services' },
  ]

  return (
    <footer className="w-full bg-white px-4 py-10 md:px-20 lg:px-32 font-Dm-Sans border-t">
      {/* Top Section */}
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
        {/* Left: Logo + Contact */}
        <div className="max-w-sm">
          <Logo />

          {/* Contact info */}
          <address className="not-italic my-4 flex flex-col gap-3 text-gray-700 text-sm leading-relaxed">
            <span className="flex items-center gap-2">
              <IconPhone size={18} stroke={1} /> 020 34732899
            </span>
            <span className="flex items-center gap-2">
              <IconMail size={18} stroke={1} /> vishwakarma_samaj@gmail.com
            </span>
            <span className="flex items-start gap-2">
              <IconLocation size={18} stroke={1} />
              <span>
                258 Rani Road
                <br /> Thane (W), Mumbai
              </span>
            </span>
          </address>

          {/* Social icons */}
          <div className="flex gap-3 mt-4">
            {[IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-Purple text-white hover:bg-Purple-Hover active:bg-Purple-Active transition"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-Poppins font-medium mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <li key={link.linkTo}>
                  <Link
                    to={link.linkTo}
                    className="hover:text-Purple-Hover transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-Poppins font-medium mb-4">Projects</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              {projects.map((link) => (
                <li key={link.linkTo}>
                  <Link
                    to={link.linkTo}
                    className="hover:text-Purple-Hover transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-Poppins font-medium mb-4">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              {legals.map((link) => (
                <li key={link.linkTo}>
                  <Link
                    to={link.linkTo}
                    className="hover:text-Purple-Hover transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="flex items-center gap-1">
          <IconCopyright size={16} /> 2025 Samarpann. All Rights Reserved
        </p>
        <p className="mt-2 md:mt-0">Made with ❤️ in Thane</p>
      </div>
    </footer>
  )
}

export default Footer
