import { IconArrowRight, IconRosetteFilled } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

function WhoWeAre() {
  const [showMore, setShowMore] = useState(false)

  return (
    <article className="w-full overflow-hidden px-4 py-8 font-Dm-Sans md:px-32 md:py-16 md:grid md:grid-cols-2 md:gap-8">
      {/* Tag */}
      <div className="px-4 py-2 rounded-full border border-gray-300 flex items-center gap-4 justify-start w-fit font-semibold text-gray-500 mb-4 md:col-span-2">
        <IconRosetteFilled fill="#99a1af" />
        Who We Are ?
      </div>

      {/* Left side: title + image */}
      <div className="mb-6 md:mb-0 flex flex-col justify-between">
        <h1 className="font-Poppins font-semibold text-3xl tracking-tight mb-4 md:text-5xl md:leading-[1.2]">
          Fostering <br />
          <span className="text-Orange">Heritage & Unity</span>
        </h1>
        <img
          src="/unity.png"
          alt="community circle"
          className="w-full h-full max-h-[400px] rounded-br-[50px] rounded-xl object-cover"
        />
      </div>

      {/* Right side: text content */}
      <div className="flex flex-col justify-between gap-4">
        <h4 className="text-lg md:text-2xl font-medium text-gray-800">
          Shri Vishwakarma Panchal Samaj Association, Thane, is dedicated to
          strengthening bonds within the community and fostering an environment
          of brotherhood, cooperation, and collective growth.
        </h4>

        {/* Mobile collapsible text */}
        <div className="md:hidden">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="mt-3 text-Orange font-semibold flex items-center gap-1"
            >
              Read More <IconArrowRight size={18} />
            </button>
          ) : (
            <>
              <p className="text-gray-600 mt-2">
                Our mission goes beyond preserving traditions—it is about
                celebrating our cultural heritage, nurturing social values, and
                building a harmonious future together. Through educational,
                cultural, and social initiatives, we work to:
              </p>

              <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
                <li>
                  Empower youth, women, and elders by creating opportunities for
                  growth.
                </li>
                <li>
                  Preserve and promote traditions that honor our shared identity.
                </li>
                <li>
                  Encourage social responsibility among the younger generation.
                </li>
                <li>
                  Provide support to those in need, ensuring no member is left
                  behind.
                </li>
                <li>
                  This commitment reflects our vision of a strong, united, and
                  progressive society rooted in heritage and compassion.
                </li>
              </ul>

              <Link
                to="/about"
                className="mt-4 px-5 py-2 w-fit rounded-sm border-2 border-Orange bg-white/10 hover:bg-white/15 active:bg-white/20 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
              >
                Learn More
                <IconArrowRight className="group-hover:-rotate-45 transition-all" />
              </Link>
            </>
          )}
        </div>

        {/* Desktop always expanded */}
        <div className="hidden md:flex md:flex-col gap-4">
          <p className="text-gray-600">
            Our mission goes beyond preserving traditions—it is about
            celebrating our cultural heritage, nurturing social values, and
            building a harmonious future together. Through educational,
            cultural, and social initiatives, we work to:
          </p>

          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
            <li>
              Empower youth, women, and elders by creating opportunities for
              growth.
            </li>
            <li>
              Preserve and promote traditions that honor our shared identity.
            </li>
            <li>
              Encourage social responsibility among the younger generation.
            </li>
            <li>
              Provide support to those in need, ensuring no member is left
              behind.
            </li>
            <li>
              This commitment reflects our vision of a strong, united, and
              progressive society rooted in heritage and compassion.
            </li>
          </ul>

          <Link
            to="/about"
            className="mt-4 px-5 py-2 w-fit rounded-sm border-2 border-Orange bg-white/10 hover:bg-white/15 active:bg-white/20 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
          >
            Learn More
            <IconArrowRight className="group-hover:-rotate-45 transition-all" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default WhoWeAre
