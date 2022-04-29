import React from 'react'
import './workshop.css'

function Workshop() {
  return (
    
    <section className="px-4 md:px-28 pb-4 md:py-24 mx-auto  workshop-container" id="workshop">
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight md:text-center text-center text-black md:leading-tight sm:text-left md:text-6xl font-righteous wkshp-heading'>Workshops</h1>
    <div className="grid items-center grid-cols-1  md:my-24 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Cryptocurrency, Metaverse and NFT</h2>
        <p className="mb-5 font-tajawal text-base text-center text-gray-600 sm:text-left md:text-lg">
        Enova  brings to you a Metaverse themed  techno-management session to guide you to a new world with new possibilities and new opportunities.        </p>
        
      </div>
      <div className="w-full h-full py-48 bg-gray-200 w1" />
      
    </div>


    <div className="grid flex-col-reverse items-center md:my-24 mb-24 grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div className="order-none md:order-2">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Idea from Zero to Startup</h2>
        <p className="mb-5 font-tajawal text-base text-center text-gray-600 sm:text-left md:text-lg">
          We open a new platform by providing step by step guidance to uplift your marketing skills and sketch a plan of new startup.
        </p>
        
      </div>
      <div className="w-full h-full py-48 bg-gray-200 w2" />
    </div>


    <div className="grid items-center grid-cols-1 md:my-24 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
      <div>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Resin art and Furniture epoxy</h2>
        <p className="mb-5 font-tajawal text-base text-center text-gray-600 sm:text-left md:text-lg">
          Learn to make resin coastrers, keychains, variety epoxy designs on furniture. Make unique designs in every little products by learning a new art and develop you passion into works.
        </p>
        {/* <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto l-more">Learn More</a> */}
      </div>
      <div className="w-full h-full py-48 bg-gray-200 w3" />
      
    </div>


   


    
  </section>
    
  )
}

export default Workshop