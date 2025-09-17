function Support() {
  return (
    <article className="w-screen overflow-hidden font-Dm-Sans">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg"
          srcSet="https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg?w=360 360w, https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg?w=740 740w, https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg?w=1060 1060w, https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg?w=1480 1480w, https://img.freepik.com/free-photo/we-are-always-good-mood_329181-8497.jpg?w=2000 2000w"
          sizes="(max-width: 480px) 100vw, (max-width: 1096px) calc(100vw - 40px), 100vw"
          className="w-full h-full object-cover"
          alt="Community support"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-Purple/80 to-slate-900/90" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
          <h1 className="font-Poppins font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-snug">
            Compassionate Peer Support for
            <br />
            <span className="text-Orange-Hover">
              Vishwakarma Community
            </span>
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl max-w-[65ch]">
            Together we uphold the values of craftsmanship, mutual support, and
            shared cultural heritage. As a community, we&apos;re committed to
            helping one another — through mentorship, solidarity, and preserving
            the legacy of our skilled traditions.
          </p>
        </div>
      </div>
    </article>
  )
}

export default Support
