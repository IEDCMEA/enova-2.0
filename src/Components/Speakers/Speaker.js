import React from 'react'
import './speaker.css'

function Speaker() {
  return (
    <div className="p-4 " id="speakers" style={{background:"aliceblue"}}>
        <p className="text-center font-righteous md:text-6xl text-4xl font-bold text-gray-800 spk-heading">
          Speakers
        </p>
        <p className="text-center mb-32 text-xl font-normal text-gray-500">
          Meet our speakers
        </p>
        <div className="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify evenly justify-center md:flex-wrap">
          <div className="p-4 relative ">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" className="block relative">
                <img alt="profil" src="https://i.ibb.co/27JfdXn/fair1-compressed.jpg" className="mx-auto object-cover rounded-lg h-40 w-40 " />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24 sp1">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Fairoos Mohammed
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Fintech entrepreneur
                </p>
                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  A brilliant strategist and advisor made him good sounding for many.His experiences and skills helped start-ups and enterprises all over the globe.
                </p>
              </div>
              
            </div>
          </div>
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" className="block relative">
                <img alt="profil" src="https://i.ibb.co/ZgCh1NL/bas1-compressed.jpg" className="mx-auto object-cover rounded-lg h-40 w-40 " />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24 sp2">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Basim
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Architect & Restaurant Consultant
                </p>
                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  He is one of the most authentic and renowned food blogger,restaurant consultant and an innovative architect. He admires the healthy lifestyle with delicious food recipes and shares his reviews in social media.
                </p>
              </div>
              
            </div>
          </div>
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" className="block relative">
                <img alt="profil" src="https://i.ibb.co/Z1YVbkZ/nou1-compressed.jpg" className="mx-auto object-cover rounded-lg h-40 w-40 " />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Noushad
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Founder & creative director of Ladies Planet
                </p>
                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  He is a costume designer for many actresses. He is a well-known fashion designer with collective styles reflecting the tranquility of modern living.
                </p>
              </div>
              
            </div>
          </div>
          <div className="p-4 relative" style={{marginTop: "6rem"}}>
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" className="block relative">
                <img alt="profil" src="https://i.ibb.co/7b712QK/4-1-compressed.jpg" className="mx-auto object-cover rounded-lg h-40 w-40 " />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Rahul Shah
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Project Coordinator
                </p>
                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                 Project Coordinator in IEDC, Kerala Startup Mission
                </p>
              </div>
              
            </div>
          </div>
          <div className="p-4 relative" style={{marginTop: "6rem"}}>
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="#" className="block relative">
                <img alt="profil" src="https://i.ibb.co/dWfPszX/5-1-compressed.jpg" className="mx-auto object-cover rounded-lg h-40 w-40 " />
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Swathiq Rahim
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  Founder & CEO of SaveBox
                </p>
                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                    He is the founder and chief executive officer of SaveBox.in. He introduced new ways of exploring the customer requirements in business world by breaking the conventional methods. 
                </p>
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>
  )
}

export default Speaker