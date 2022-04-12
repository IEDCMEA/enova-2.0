import React from 'react'
import './earlybird.css'

function EarlyBird() {
  const countdown = ()=>{
    const countDate = new Date('Oct 30, 2021 00:00:00').getTime() 
    const now = new Date().getTime();
    const dif = countDate - now;

    const second = 1000;
    const minute = second*60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(dif / day); 
    const textHour = Math.floor((dif % day) / hour);
    const textMinute = Math.floor((dif % hour) / minute);
    const textSecond = Math.floor((dif % minute) / second);

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
    
}  
  return (
    <section className="bg-gradient bg-indigo-500 dark:bg-gray-800 py-8 md:py-16 bird-container">
        <div className="max-w-5xl mx-auto px-5 box-content">
          <div className="flex items-center flex-col md:flex-row -mx-5">
            <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
              <h6 className="uppercase font-semibold text-xs md:text-base text-indigo-800 dark:text-gray-100">
                Opening tickets
              </h6>
              <h3 className="font-bold font-heading text-2xl md:text-4xl text-white">
                Saturday 17
              </h3>
              <h3 className="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                @ 10:00 AM
              </h3>
              <div className="mt-4 w-full md:w-44">
                <button type="button" className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Early bird
                </button>
              </div>
            </div>
            <div className="w-full md:w-auto px-5">
              <div className="flex justify-center text-white text-center">
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                   
                    <span>
                      01
                    </span>
                  </div>
                  <div className="opacity-75 text-xs mt-3 uppercase">
                    Day
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                      1
                    </span>
                    
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Hour
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                      5
                    </span>
                    
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Min
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                      1
                    </span>
                    <span>
                      9
                    </span>
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EarlyBird