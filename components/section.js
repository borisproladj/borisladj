"use client";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is in view
    initialInView: false, // Start with the element not in view
  });

  return (
    <div className="hero min-h-screen w-full p-2 lg:p-6 mb-20 z-20 md:mb-24 mx-auto text-white">
      <div
        ref={ref}
        className={`hero-content flex-col lg:flex-row ${
          inView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="relative flex justify-center items-center w-full">
          <div className="blob-background hidden sm:block"></div>{" "}
          {/* Blob background */}
          <img
            src="moto.webp"
            className="rounded-full shadow-white sm:w-96 w-64 grayscale hover:grayscale-0 duration-300 will-change-transform hidden sm:block scale-125  translate-y-[-1.8em] translate-x-[-0.25em]"
            alt="Profile"
          />
        </div>
        <div>
          <div
            className={`top-64 sm:text-6xl text-3xl font-bold text-center ${inView ? "animate-bottomFly" : "opacity-0"}`}
          >
            I AM A FULLSTACK DEVELOPER
          </div>
          <p className={`py-10 text-2xl text-center ${inView ? "animate-fadeIn" : "opacity-0"}`}>
            Hello, I'm Boris Ladyjensky, a passionate full-stack developer based
            in Israel.<br /> With a year of experience in web development, I thrive on
            crafting innovative solutions to real-world problems. When I'm not
            coding, I indulge in my love for gaming on the computer and
            exploring new adventures on my motorcycle.
          </p>
          <div className="relative flex justify-center items-center w-full">
            <div className="blob-background sm:hidden"></div>{" "}
            {/* Blob background */}
            <img
              src="moto.webp"
              className="rounded-full shadow-white sm:w-96 w-64 z-0 grayscale hover:grayscale-0 duration-300 will-change-transform sm:hidden scale-125  translate-y-[-1em] translate-x-[-0.25em]"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
