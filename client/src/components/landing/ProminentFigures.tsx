import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconLeaf,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'


const leaders = [
  {
    id: 1,
    name: 'Angad Bagedu Vishwakarma',
    position: 'Founder',
    positionIcon: IconLeaf,
    description:
      'Angad Bagedu Vishwakarma founded the Samaj with a vision of uniting artisans and promoting cultural heritage.',
    imgUrl:
      'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg',
    imgSet: '',
    imgSizes: '',
    socialLinks: { instagram: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Bhuidhar Katwaru Vishwakarma',
    position: 'Co-Founder',
    positionIcon: IconLeaf,
    description:
      'Bhuidhar Katwaru Vishwakarma focused on education and social programs, empowering the youth and elders alike.',
    imgUrl:
      'https://img.freepik.com/free-photo/portrait-smiling-indian-businessman_53876-124935.jpg',
    imgSet: '',
    imgSizes: '',
    socialLinks: { instagram: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Nanhelal Vishwakarma',
    position: 'Founder/Secretary',
    positionIcon: IconLeaf,
    description:
      'Nanhelal Vishwakarma helped organize community events and initiatives, preserving the Samaj’s rich traditions.',
    imgUrl:
      'https://img.freepik.com/free-photo/young-handsome-man_171337-3647.jpg',
    imgSet: '',
    imgSizes: '',
    socialLinks: { instagram: '#', twitter: '#' },
  },
]


function ProminentFigures() {
  return (
    <article className="w-full overflow-hidden px-4 py-8 font-Dm-Sans md:px-32 md:py-16 bg-parchment">
      <h1 className="font-Poppins font-semibold text-3xl text-center tracking-tight mb-2 md:text-5xl md:leading-14">
        Our Prominent Trustees
      </h1>
      <p className="text-gray-800 text-lg text-center mb-8">
        Supporting wellness while shaping our future
      </p>

      {/* Wrapper: horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="snap-start flex-shrink-0 w-[280px] md:w-auto p-2 rounded-4xl bg-[hsl(39,56%,79%)] shadow-sm"
          >
            <img
              src={leader.imgUrl}
              srcSet={leader.imgSet}
              alt={'Image of ' + leader.name}
              sizes={leader.imgSizes}
              className="rounded-[28px] w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-medium">{leader.name}</h1>
              <p className="text-gray-600 mb-2 text-sm">@{leader.position}</p>
              <p className="text-gray-800 mb-6">
                <span className="text-xl">&quot;</span>
                {leader.description}
                <span className="text-xl">&quot;</span>
              </p>
              {/* <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Link
                    to={leader.socialLinks.instagram}
                    className="p-1 rounded-[14px] hover:bg-Purple hover:text-white transition-all"
                  >
                    <IconBrandInstagram stroke={1.1} />
                  </Link>
                  <Link
                    to={leader.socialLinks.twitter}
                    className="p-1 rounded-[14px] hover:bg-Purple hover:text-white transition-all"
                  >
                    <IconBrandTwitter stroke={1.1} />
                  </Link>
                </div>
                <Link
                  to="/"
                  className="px-4 py-1 bg-Orange hover:bg-Orange-Hover active:bg-Orange-Active rounded-full text-white"
                >
                  Follow
                </Link>
              </div>*/}
            </div> 
          </div>
        ))}
      </div>
    </article>
  )
}

export default ProminentFigures
