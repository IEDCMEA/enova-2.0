import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center hero">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 hero-content">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block title text-glow font-righteous font-black text-4xl lg:text-6xl text-center">
              ENOVA 2.0 is here
            </span>
          </h2>
          <p className="text-lg mt-4 text-gray-600 font-tajawal lg:px-10">
            Hello folks, The most awaited event ENOVA 2.0, three day national level program is here with vibrant workshops, talks and cultural programs and more.<br/> You are cordially invited to participate in this event.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0 flex justify-center">
            <div className="mt-12 inline-flex rounded-md shadow ">
              <button type="button" className="py-2 px-4   text-white w-48 h-14 transition ease-in duration-200 text-center text-lg font-semibold shadow-md   rounded-lg btn btn-gradient btn-glow 
              " onClick={()=> window.open("https://rzp.io/l/enovaebird", "_blank")}>
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-4  lg:p-24 lg:mt-40 w-full lg:mt-80 img-container">
          <img src="https://i.ibb.co/FscFZv3/IMG-7438.jpg" className="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src="https://i.ibb.co/TWdnpG3/IMG-0964.jpg" className="rounded-lg mb-8 " alt="Tree" />
            <img src="https://i.ibb.co/60RvPDG/IMG-8192.jpg" className="rounded-lg " alt="Tree" />
          </div>
        </div>
      </div>
	
  );
}

export default Hero