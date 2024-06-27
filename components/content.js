export default function Content() {
  return (
    <div className="hero absolute min-h-screen z-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col items-start justify-center h-screen">
          <div className="sm:absolute 2xl:flex top-64 sm:text-8xl text-5xl font-bold text-left sm:animate-flyIn tracking-[0.15em]">
            CREATIVE
          </div>
          <div className="sm:text-6xl text-3xl font-normal tracking-[0.46em] animate-bottomFly text-left">
            DEVELOPER
          </div>
          <div className="sm:text-5xl text-2xl font-extralight justify-center tracking-[0.079em] animate-fadeSlow text-center">
            SENSIBLE TO FRONTEND
          </div>
          <div className="relative flex justify-center items-center w-full">
          <div className="blob-background"></div> {/* Blob background */}
          <img
            src="profile.webp"
            className="rounded-full shadow-white sm:w-96 w-64 z-10 grayscale hover:grayscale-0 duration-300 will-change-transform sm:hidden"
            alt="Profile"
            loading="eager"
          />
        </div>
        </div>
        <div className="relative flex justify-center items-center w-full">
          <div className="blob-background"></div> {/* Blob background */}
          <img
            src="profile.webp"
            className="rounded-full shadow-white sm:w-96 w-64 z-0 grayscale hover:grayscale-0 duration-300 will-change-transform hidden sm:block"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
