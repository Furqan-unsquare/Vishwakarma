import VishawakarmaSamajLogo from '@/assets/logo.jpg'

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-4 flex-">
      {/* Logo image */}
      <img
        src={VishawakarmaSamajLogo}
        alt="Vishwakarma Samaj Logo"
        className="w-10 sm:w-14 md:w-16 lg:w-20 aspect-square object-contain"
      />

      {/* Text section */}
      <div className="flex flex-col">
        {/* Tagline */}
        <span className="text-sm md:text-md text-gray-600 font-Dm-Sans leading-tight">
          ॥ Om Vishwakarmane Namah ॥ ॥ Om Devo Vishwakarma Namah ॥
        </span>

        {/* Main title */}
        <p className="font-Poppins text-lg lg:text-xl font-semibold leading-snug">
          Shri Vishwakarma Panchal Samaj Association, Thane
        </p>
      </div>
    </div>
  )
}

export default Logo
