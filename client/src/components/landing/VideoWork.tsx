function VideoWork() {
  return (
    <article className="w-full overflow-hidden px-4 py-12 font-Dm-Sans bg-Purple-Hover md:px-32 md:py-20">
      {/* Heading + Description */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <h1 className="font-Poppins font-semibold text-3xl tracking-tight text-white md:text-5xl md:leading-tight">
          Watch Videos to
          <br />
          Discover Us
        </h1>
        <p className="text-gray-300 text-base leading-relaxed md:max-w-[50ch] md:text-lg md:text-right">
          Explore the journey of Vishwakarma Samaj — from ancient craftsmanship
          to modern innovation. These stories capture our culture, unity, and
          the legacy of Shree Vishwakarma that continues to inspire generations.
        </p>
      </div>

      {/* Responsive Video */}
      <div className="relative w-full max-w-7xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <video
          controls
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/07/20/82729-579188066_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </article>
  )
}

export default VideoWork
