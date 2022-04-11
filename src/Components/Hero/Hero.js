import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center hero">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 mt-40">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block title text-glow font-righteous font-black text-4xl lg:text-6xl">
              ENOVA 2.0 is here
            </span>
          </h2>
          <p className="text-lg mt-4 text-gray-600 font-tajawal">
            Hello folks, The most awaited event ENOVA 2.0, three day national level program is here with vibrant workshops, talks and cultural programs and more.<br/> You are cordially invited to participate in this event.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button type="button" className="py-2 px-4   text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg btn btn-gradient btn-glow ">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24 lg:mt-40">
          <img src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" className="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="rounded-lg mb-8" alt="Tree" />
            <img src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
	
  );
}

export default Hero