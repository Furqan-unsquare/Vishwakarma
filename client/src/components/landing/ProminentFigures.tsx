const leaders = [
  {
    id: 1,
    name: 'Late. Angad Bagedu Vishwakarma',
    position: 'Founder',
    description:
      'Angad Bagedu Vishwakarma founded the Samaj with a vision of uniting artisans and promoting cultural heritage.',
    imgUrl: '/1.png',
  },
  {
    id: 2,
    name: 'Late. Bhuidhar Katwaru Vishwakarma',
    position: 'Co-Founder',
    description:
      'Bhuidhar Katwaru Vishwakarma focused on education and social programs, empowering the youth and elders alike.',
    imgUrl: '/2.png',
  },
  {
    id: 3,
    name: 'Mr. Nanhelal Mangruram Vishwakarma',
    position: 'Founder/Secretary',
    description:
      "Nanhelal Vishwakarma helped organize community events and initiatives, preserving the Samaj's rich traditions.",
    imgUrl: '/4.png',
  },
]

function ProminentFigures() {
  return (
    <article className="w-screen overflow-hidden px-4 py-8 font-Dm-Sans md:px-32 md:py-16 bg-parchment">
      <h1 className="font-Poppins font-semibold text-3xl text-center tracking-tight mb-2 md:text-5xl md:leading-14">
        Our Prominent Visionaries
      </h1>
      <p className="text-gray-800 text-lg text-center mb-8">
        Supporting wellness while shaping our future
      </p>

      <div className="w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 place-items-center">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="p-2 max-w-[375px] w-full rounded-4xl bg-[hsl(39,56%,79%)] shadow-sm"
          >
            <img
              src={leader.imgUrl}
              alt={'Image of ' + leader.name}
              className="rounded-[28px] w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-medium">{leader.name}</h2>
              <p className="text-gray-600 mb-3 text-sm">{leader.position}</p>
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="text-xl">&quot;</span>
                {leader.description}
                <span className="text-xl">&quot;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ProminentFigures
