import { IconCalendar } from '@tabler/icons-react'

const IMGURL =
  'https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg'
const IMGSRCSET =
  'https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg?w=360 360w, https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg?w=740 740w, https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg?w=1060 1060w, https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg?w=1480 1480w, https://img.freepik.com/free-photo/species-fruits-surround-indian-parents-preparing-paste_8353-755.jpg?w=2000 2000w'
const IMGSIZES =
  '(max-width: 480px) 100vw, (max-width: 768px) 80vw, (max-width: 1096px) 50vw, 33vw'

const upcomingEvents = [
  {
    id: 1,
    title: 'Cultural Gathering',
    subtitle: 'Community cultural programs & social evening',
    date: '18th Sep, 2025 — 5:30 PM',
    imgUrl: IMGURL,
    imgSet: IMGSRCSET,
    imgSizes: IMGSIZES,
  },
  {
    id: 2,
    title: 'Special Session',
    subtitle: 'Focused community discussion & prayers',
    date: '18th Sep, 2025 — 8:30 PM',
    imgUrl: IMGURL,
    imgSet: IMGSRCSET,
    imgSizes: IMGSIZES,
  },
  {
    id: 3,
    title: 'Social Dinner',
    subtitle: 'Community dinner & bonding after cultural programs',
    date: '18th Sep, 2025 — 9:30 PM',
    imgUrl: IMGURL,
    imgSet: IMGSRCSET,
    imgSizes: IMGSIZES,
  },
]

function UpcomingEvents() {
  return (
    <article className="w-screen overflow-hidden px-4 py-8 font-Dm-Sans md:px-32 md:py-16">
      {/* Heading */}
      <h1 className="font-Poppins font-semibold text-3xl text-center tracking-tight mb-2 md:text-5xl md:leading-14">
        Featured News
        <span className="text-Orange"> And Events</span>
      </h1>
      <p className="text-gray-600 text-center mb-8">
        See our future events and take a part
      </p>

      {/* Events Wrapper */}
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 
          md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none
        "
      >
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="
              flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto
              bg-gradient-to-b from-Orange/60 to-gray-200 
              p-2 rounded-4xl snap-start
            "
          >
            <img
              src={event.imgUrl}
              srcSet={event.imgSet}
              alt={'Image for ' + event.title}
              sizes={event.imgSizes}
              className="rounded-[28px] w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl md:text-2xl font-medium">{event.title}</h1>
              <p className="text-gray-800 mb-6">{event.subtitle}</p>
              <span className="flex items-center gap-2 p-1">
                <IconCalendar stroke={1.1} />
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default UpcomingEvents
