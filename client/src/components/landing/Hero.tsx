import { IconArrowRight } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

function Hero() {
  return (
    <section className="bg-parchment w-full min-h-screen font-Dm-Sans overflow-hidden md:grid md:grid-cols-2 mt-10 md:mt-0">
      {/* Left Section */}
      <div className="px-6 pt-28 pb-16 md:pt-32 md:pb-20 md:px-20 lg:px-32 flex flex-col justify-center">
        <h1 className="font-Poppins font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-snug mb-6 text-center md:text-left text-gray-900">
          Building Community,
          <br />
          <span className="text-Orange">Connection </span>
          and
          <br /> Care
        </h1>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl text-center md:text-left mb-8 max-w-xl mx-auto md:mx-0">
          Shree Vishwakarma Panchal Samaj Association stands for unity, service, and progress — preserving
          our heritage while empowering future generations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 justify-center items-center sm:flex-row md:justify-start">
          <Link
            to="/"
            className="px-7 py-3 w-full sm:w-auto rounded-sm bg-Orange hover:bg-Orange-Hover active:bg-Orange-Active 
            bg-gradient-to-tr from-transparent from-50% to-white/50 
            text-white flex shadow-lg items-center justify-center gap-2 
            transition-all active:scale-95"
          >
            Donate <IconArrowRight />
          </Link>
          <Link
            to="/"
            className="px-7 py-3 w-full sm:w-auto rounded-sm outline outline-2 outline-Orange 
            bg-white/10 hover:bg-white/15 active:bg-white/20 
            flex items-center justify-center gap-2 shadow-lg 
            transition-all active:scale-95 text-gray-900 md:text-black"
          >
            Plan your visit
          </Link>
        </div>
      </div>

      {/* Right Section (Images) */}
      <div className="w-full h-1/2 max-h-screen relative md:h-4/5 rounded-bl-3xl md:mt-24">
        <img
          className="w-full h-full object-cover md:rounded-bl-4xl"
          src="https://i.pinimg.com/1200x/fc/24/f1/fc24f142a356e2ef1993d6458ad2aa2a.jpg"
          alt="bunch of random people"
        />
        {/* <img
          src="https://img.freepik.com/free-photo/smiling-people-white-background_23-2147576858.jpg"
          alt="bunch of random people 2"
          className="w-[150px] md:w-[250px] absolute top-full left-0 -translate-y-1/2 -rotate-25 aspect-auto border-4 border-white rounded-lg"
        /> */}
        {/* <img
          src="https://img.freepik.com/free-photo/community-concept-with-group-people_23-2147993335.jpg?t=st=1756742027~exp=1756745627~hmac=a9e70e81b5e9ad8254a1b8797a92dd1fff89af27468851703192d4b6c4ee3eca&w=2000"
          alt="bunch of random people 3"
          className="w-[150px] rotate-10 absolute top-[100px] left-0 hidden md:inline -translate-x-1/2 rounded-lg"
        /> */}
      </div>
    </section>
  )
}

export default Hero
