import { useRef, useEffect } from 'react'
import Footer from '@/components/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: RouteComponent,
})

type ExpenseTimeline = {
  date: string
  heading: string
  image: { url: string; srcSet: string; sizes: string }
  subtitle: string
  link: string
}

const expensesTimeline: ExpenseTimeline[] = [
  {
    date: ' 2025-09-17',
    heading: 'Shree Vishwakarma Puja Festival',
    image: { url: '...', srcSet: '...', sizes: '...' },
    subtitle: 'A cultural program to celebrate Shree Vishwakarma Puja, with community prayers and Mahaprasad.',
    link: '/events/vishwakarma-pooja-chhapra-2020',
  },
  // {
  //   date: '2020-09-17',
  //   heading: 'COVID-19 Ration Kit Distribution, Nashik',
  //   image: { url: '...', srcSet: '...', sizes: '...' },
  //   subtitle: 'Food and ration kits distributed to sculptors & underprivileged on Vishwakarma Pooja day.',
  //   link: '/events/covid-ration-distribution-nashik-2020',
  // },
  // {
  //   date: '2020-08-15',
  //   heading: 'Tree Plantation & Flag Hoisting, Chhapra',
  //   image: { url: '...', srcSet: '...', sizes: '...' },
  //   subtitle: 'On Independence Day, trees planted and flag hoisted for environmental awareness.',
  //   link: '/events/tree-plantation-flag-chhapra-2020',
  // },
  // {
  //   date: '2020-07-26',
  //   heading: 'Tree Plantation Azamgarh',
  //   image: { url: '...', srcSet: '...', sizes: '...' },
  //   subtitle: '40 saplings planted at Hanuman Mandir, Lalganj to promote greenery.',
  //   link: '/events/tree-plantation-azamgarh-2020',
  // },
  // {
  //   date: '2020-07-26',
  //   heading: 'Tree Plantation Jaunpur',
  //   image: { url: '...', srcSet: '...', sizes: '...' },
  //   subtitle: 'Tree plantation drive near Additional Primary Health Center Jamuhai, Jaunpur.',
  //   link: '/events/tree-plantation-jaunpur-2020',
  // },
  // {
  //   date: '2020-07-26',
  //   heading: 'Tree Plantation Mumbai',
  //   image: { url: '...', srcSet: '...', sizes: '...' },
  //   subtitle: 'Saplings planted in Ulwe, Navi Mumbai at Sector 9 as part of environment drive.',
  //   link: '/events/tree-plantation-mumbai-2020',
  // },
]

function RouteComponent() {
  return (
    <div className="w-full pt-20 min-h-screen font-Dm-Sans">
      <div className="pt-32 pb-16 bg-parchment">
        <div className="px-4 md:px-32 grid gap-6 md:grid-cols-2 items-end text-center md:text-left mb-12">
          <h1 className="font-Poppins font-semibold text-3xl md:text-5xl tracking-tight md:leading-[1.2] text-gray-900">
            Our Journey of <br />
            Giving Back
          </h1>
          <p className="text-gray-700 md:text-lg max-w-[50ch] mx-auto md:mx-0 leading-relaxed">
            Every contribution to <span className="font-semibold">Vishwakarma Samaja</span> is invested with care. 
            From purchasing community plots to supporting education and cultural initiatives, this timeline highlights how your donations have been transformed into meaningful impact.
          </p>
        </div>

        <Timeline />
      </div>

      <Footer />
    </div>
  )
}

function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Add drag-to-scroll for desktop
  useEffect(() => {
    const slider = scrollRef.current
    if (!slider) return
    let isDown = false
    let startX: number
    let scrollLeft: number

    const mouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add('cursor-grabbing')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }
    const mouseLeave = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }
    const mouseUp = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }
    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2 // scroll-fast
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', mouseDown)
    slider.addEventListener('mouseleave', mouseLeave)
    slider.addEventListener('mouseup', mouseUp)
    slider.addEventListener('mousemove', mouseMove)

    return () => {
      slider.removeEventListener('mousedown', mouseDown)
      slider.removeEventListener('mouseleave', mouseLeave)
      slider.removeEventListener('mouseup', mouseUp)
      slider.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div className="px-4 md:px-32 overflow-x-auto scrollbar-hidden py-6">
      <div
        ref={scrollRef}
        className="inline-flex gap-6 md:gap-8 min-w-max snap-x snap-mandatory scroll-smooth"
      >
        {expensesTimeline.map((expense, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[80vw] sm:w-[300px] md:w-[350px] border-t border-gray-300 relative px-4 pt-8 text-center md:text-left"
          >
            <span className="block w-4 h-4 bg-black rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></span>
            <div className="pt-2">
              <p className="text-xl font-semibold mb-1">{expense.date}</p>
              <h3 className="font-Poppins text-lg md:text-base mb-2 leading-snug">{expense.heading}</h3>
              {/* <img
                src={expense.image.url}
                srcSet={expense.image.srcSet}
                sizes={expense.image.sizes}
                alt={'Image for ' + expense.heading}
                className="w-full max-h-[200px] md:max-h-[250px] object-cover rounded-md mb-2"
              /> */}
              <p className="text-gray-800 text-sm md:text-base">{expense.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RouteComponent
