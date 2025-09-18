function Donation() {
  return (
    <article id="donation" className="w-screen overflow-hidden font-Dm-Sans">
      <div className="relative h-[700px] md:h-[600px] lg:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/hands.png"
          className="w-full h-full object-cover"
          alt="Community hands joined together"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-Purple/90 to-slate-900/90 mix-blend-multiply" />

        <div className="absolute inset-0 grid items-center gap-8 px-4 py-8 md:grid-cols-2 md:gap-12 md:px-16 lg:px-32 lg:py-16">
          <div className="flex flex-col items-center text-center justify-center md:items-start md:text-left">
            <h1 className="font-Poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-6">
              Support the Growth of
              <br />
              <span className="text-Orange-Hover">Vishwakarma Community</span>
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-[60ch]">
              Your support helps us fund education, cultural events, and
              community welfare. Every contribution strengthens the Vishwakarma
              Samaj.
            </p>
          </div>

          {/* Right QR Code */}
          <div className="flex justify-center items-center">
            <img
              src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg"
              srcSet="
                https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=360 360w,
                https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740 740w,
                https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=1060 1060w,
                https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=1480 1480w,
                https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=2000 2000w
              "
              sizes="(max-width: 480px) 80vw, (max-width: 1024px) 50vw, 400px"
              alt="QR code for donations"
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-square rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Donation
