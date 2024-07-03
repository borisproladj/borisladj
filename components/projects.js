"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
    initialInView: false, // Start with the element not in view
  });
  return (
    <div
      ref={ref}
      className="hero min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 mx-auto text-white"
    >
      {/* Flex container adjusted for two cards per row */}
      <div
        className={`flex flex-wrap justify-center items-center gap-8 z-0 ${
          inView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Card 1 */}
        <div
          className={`card bg-base-100 image-full shadow-xl hover:scale-110 ease-in-out duration-1000 will-change-transform w-80 sm:w-[500px] ${
            inView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <figure className="w-full h-72 overflow-hidden">
            <Image
              src="/Gvanim98.webp"
              alt="gvanim98"
              className="w-full h-full object-cover" // Ensures the image covers the figure area, clipping if necessary
              width={500}
              height={288}
            />
          </figure>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-white">Gvanim98</h2>
            <p className="text-white shadow-md">A copy writer business in Eilat.</p>
            <div className="card-actions justify-end">
              <a
                href="https://gvanim98.vercel.app"
                target="_blank"
                className="btn btn-ghost border-white btn-outline text-white"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`card bg-base-100 image-full shadow-xl hover:scale-110 ease-in-out duration-1000 will-change-transform w-80 sm:w-[500px] ${
            inView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <figure className="w-full h-72 overflow-hidden">
            <Image
              src="/Countryfinder.webp"
              alt="countryfinder"
              className="w-full h-full object-cover" // Ensures the image covers the figure area, clipping if necessary
              width={500}
              height={288}
            />
          </figure>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-white">Country Finder</h2>
            <p className="text-white shadow-md">
              Country finder web-app. Put your countries name and it will find
              your neighbours!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://countries-neighbours.vercel.app/"
                target="_blank"
                className="btn btn-ghost border-white btn-outline text-white"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className={`card bg-base-100 image-full shadow-xl hover:scale-110 ease-in-out duration-1000 will-change-transform w-80 sm:w-[500px] ${
            inView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <figure className="w-full h-72 overflow-hidden">
            <Image
              src="/mood2music.webp"
              alt="mood2music"
              className="w-full h-full object-cover" // Ensures the image covers the figure area, clipping if necessary
              width={500}
              height={288}
            />
          </figure>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-white">Mood2Music</h2>
            <p className="text-white shadow-md">Find music based on your mood!</p>
            <div className="card-actions justify-end">
              <a
                href="https://moodtomusic.vercel.app"
                target="_blank"
                className="btn btn-ghost border-white btn-outline text-white"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 - Placeholder */}
        <div
          className={`card bg-base-100 image-full shadow-xl hover:scale-110 ease-in-out duration-1000 will-change-transform w-80 sm:w-[500px] ${
            inView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <figure className="w-full h-72 overflow-hidden">
          <Image
              src="/kingdavid.webp"
              alt="King david mansion"
              className="w-full h-full object-cover" // Ensures the image covers the figure area, clipping if necessary
              width={500}
              height={288}
            />
          </figure>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-white">King David Mansion</h2>
            <p className="text-white shadow-md">A villa accomandation in Eilat.</p>
            <div className="card-actions justify-end">
              <a
                href="https://villa-bs.co.il"
                target="_blank"
                className="btn btn-ghost border-white btn-outline text-white"
              >
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
