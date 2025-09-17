import {
  IconArrowRight,
  IconArrowRightCircleFilled,
  IconRosetteFilled,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

const missionPoints = [
  { id: 1, text: 'Empower youth, women, and elders by creating opportunities for growth.' },
  { id: 2, text: 'Preserve and promote traditions that honor our shared identity.' },
  { id: 3, text: 'Encourage social responsibility among the younger generation.' },
  { id: 4, text: 'Provide support to those in need, ensuring no member of our community is left behind.' },
  { id: 5, text: 'Build a strong, united, and progressive society rooted in heritage and compassion.' },
]

function Work() {
  return (
    <article className="w-screen px-4 py-12 md:py-16 font-Dm-Sans md:px-32 bg-gradient-to-b from-white via-white to-purple-50">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        {/* Left Image */}
        <img
          src="https://img.freepik.com/free-photo/cheerful-friends-posing-party_23-2148231957.jpg"
          alt="community members together"
          className="rounded-xl object-cover w-full h-full"
        />

        {/* Right Content */}
        <div>
          {/* Badge */}
          <div className="px-4 py-2 rounded-full border border-gray-300 flex items-center gap-3 w-fit font-semibold text-gray-500 mb-4">
            <IconRosetteFilled fill="#99a1af" size={18} />
            What We Do ?
          </div>

          {/* Title */}
          <h1 className="font-Poppins font-semibold text-3xl tracking-tight mb-4 md:text-5xl md:leading-snug">
            Our Work – A Path to
            <span className="text-Orange"> Wellness and Help</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Our mission goes beyond preserving traditions—it is about
            celebrating our cultural heritage, nurturing social values, and
            building a harmonious future together. Through educational,
            cultural, and social initiatives, we work to:
          </p>

          {/* Mission Points */}
          <div className="grid gap-3 mb-8 md:grid-cols-2 md:gap-y-4">
            {missionPoints.map((point) => (
              <div key={point.id} className="flex items-start gap-2 text-gray-700">
                <span className="bg-Purple text-white p-1 rounded-full mt-1 flex-shrink-0">
                  <IconArrowRightCircleFilled className="-rotate-45" size={16} />
                </span>
                <span className="text-sm md:text-base">{point.text}</span>
              </div>
            ))}
          </div>

         {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/work"
              className="
                w-full md:w-fit
                px-6 md:px-7 py-3 
                rounded-md bg-Orange hover:bg-Orange-Hover active:bg-Orange-Active 
                text-white flex items-center justify-center gap-2 
                shadow-md transition-all active:scale-95
              "
            >
              Read More <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Work
