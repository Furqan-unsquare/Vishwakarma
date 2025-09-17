import Footer from '@/components/Footer'
import { IconBuildingCastle, IconRocket, IconUsers, IconArrowRight } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useEffect, useCallback } from 'react'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

const ImageUrls = [
  {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
   {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  {
    imgUrl: 'https://img.freepik.com/free-photo/friends-enjoying-rooftop-party_158595-4902.jpg',
    imgSizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
]

const Values = [
  {
    value: 'Unity',
    yap: 'Building stronger bonds within the community through collaboration and compassion.',
    icon: IconUsers,
  },
  {
    value: 'Heritage',
    yap: 'Preserving our cultural identity and passing traditions to future generations.',
    icon: IconBuildingCastle,
  },
  {
    value: 'Progress',
    yap: 'Empowering families with education, innovation, and sustainable opportunities for growth.',
    icon: IconRocket,
  },
]

function RouteComponent() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [velocity, setVelocity] = useState(0)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setScrollLeft(carouselRef.current.scrollLeft)
    setVelocity(0)
    carouselRef.current.style.cursor = 'grabbing'
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const x = clientX - startX
    const newScrollLeft = scrollLeft - x
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

    // Smooth boundary handling
    if (newScrollLeft < 0 || newScrollLeft > maxScroll) {
      const resistance = 0.5 // Reduce movement at boundaries
      carouselRef.current.scrollLeft = scrollLeft - x * resistance
    } else {
      carouselRef.current.scrollLeft = newScrollLeft
    }
    setVelocity(x)
  }, [isDragging, startX, scrollLeft])

  const handleMouseUp = useCallback(() => {
    if (!carouselRef.current) return
    setIsDragging(false)
    carouselRef.current.style.cursor = 'grab'

    // Apply momentum for smooth stop
    const momentum = () => {
      if (Math.abs(velocity) < 0.1 || !carouselRef.current) {
        return
      }
      carouselRef.current.scrollLeft -= velocity
      setVelocity(velocity * 0.95) // Dampen velocity
      requestAnimationFrame(momentum)
    }
    requestAnimationFrame(momentum)
  }, [velocity])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      carousel.scrollLeft += e.deltaY * 0.5 // Smoother wheel scrolling
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="w-full min-h-screen font-Dm-Sans overflow-hidden">
      <div className=" py-38 px-4 pb-8 md:px-32 text-center md:text-left">
        <h1 className="font-Poppins font-semibold text-3xl md:text-5xl tracking-tight leading-tight md:leading-[1.2] mb-4">
          Together We Build, Grow, Support and Celebrate{' '}
          <span className="text-Orange">Vishwakarma Samaja</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
          Shri Vishwakarma Panchal Samaj Association, Thane, is a community dedicated to unity, cultural heritage, and social progress. Since its establishment in 2003, we have empowered youth, women, and elders through education, employment opportunities, and the preservation of our rich traditions.
        </p>
      </div>

      <div
        ref={carouselRef}
        className="flex items-center gap-3 mb-12 overflow-x-auto scrollbar-hidden scroll-smooth snap-x snap-mandatory px-4 md:px-32 md:snap-none cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {ImageUrls.map((image, i) => (
          <img
            key={i}
            src={image.imgUrl}
            sizes={image.imgSizes}
            className="flex-shrink-0 snap-center rounded-lg shadow-sm max-h-[240px] sm:max-h-[300px] md:max-h-[360px] object-cover w-[85vw] sm:w-[60vw] md:w-[30vw]"
            alt={`Community image ${i + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      <Roots />

      <CoreValues />

      <Footer />
    </div>
  )
}

function Roots() {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className="px-4 grid gap-6 md:gap-10 mb-16 md:px-32 md:grid-cols-2 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Roots</h2>
        <h4 className="text-lg md:text-xl leading-relaxed text-gray-700">
          Vishwakarma Samaj stands on the timeless foundation of craftsmanship, unity, and resilience, inspiring us to honor our ancestors’ wisdom while building a brighter future.
        </h4>
      </div>
      <div>
        <p className={`tracking-wide text-gray-600 leading-relaxed text-base md:text-lg ${expanded ? '' : 'line-clamp-4 md:line-clamp-none'}`}>
          For centuries, the Vishwakarmas have been revered as architects of creativity, design, and engineering in India. Descended from the five sons of Lord Vishwakarma—Manu (blacksmiths), Maya (carpenters), Twosta (metalworkers), Silpy (sculptors), and Viswajna (goldsmiths)—our community has crafted temples, sculptures, and monuments that embody skill and devotion.
          <br /><br />
          Historically, Vishwakarma Samaj was a guild of artisans and a spiritual community, worshipping Shri Vishwakarma and Gayatri Devi with unique rites and traditions, establishing us as cultural torchbearers of Hindu dharma.
          <br /><br />
          Today, despite challenges like poverty and lack of education, our ancestors’ legacy drives us to foster unity, education, and heritage, reclaiming our role as cultural guardians and pioneers of progress.
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex md:hidden items-center gap-2 text-Orange font-medium text-sm"
        >
          {expanded ? 'Show Less' : 'Read More'} <IconArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}

function CoreValues() {
  return (
    <article className="px-4 md:px-32 py-12 bg-Purple">
      <h2 className="text-3xl md:text-4xl text-white text-center font-semibold mb-8">
        <span className="text-Orange">Core Values</span> We Share
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Values.map((value) => (
          <div
            key={value.value}
            className="p-5 bg-Purple/95 rounded-lg text-white flex flex-col items-center text-center gap-3 hover:bg-Purple transition"
          >
            <value.icon size={60} stroke={1.2} />
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              {value.value}
            </h3>
            <p className="text-sm leading-relaxed">{value.yap}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default RouteComponent