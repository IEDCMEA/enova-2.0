import React,{useEffect,useState} from 'react'
import './earlybird.css'
import {getRemainingTimeUntilMsTimestamp} from './utils/CountdownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}
function EarlyBird({countdownTimestampMs}) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

  return (
    <section className="bg-gradient py-8 md:py-16 bird-container border-gray-900 border-4 ">
        <div className="max-w-5xl mx-auto px-5 box-content">
          <div className="flex items-center flex-col md:flex-row -mx-5">
            <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
              <h6 className="uppercase font-semibold text-xs md:text-base text-gray-900 ">
                 EarlyBird Closing
              </h6>
              <h3 className="font-bold font-heading text-2xl md:text-4xl text-gray-900">
                Tuesday 19
              </h3>
              <h3 className="font-bold font-heading text-lg md:text-xl text-gray-900 leading-tight">
                @ 11:59 PM
              </h3>
              <div className="mt-4 w-full md:w-44">
                <button type="button" className=" early-button py-2 px-4  hover:bg-gray-100  text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={()=> window.open("https://rzp.io/l/enovaebird", "_blank")}>
                  Early bird
                </button>
              </div>
            </div>
            <div className="w-full md:w-auto px-5 text-gray-900 ">
              <div className="flex justify-center text-gray-900 text-center">
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold text-gray-900">
                   
                    <span>
                    0
                    </span>
                    <span>
                    {remainingTime.days}
                    </span>
                  </div>
                  <div className="opacity-75 text-xs mt-3 uppercase">
                    Day
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                    {remainingTime.hours}
                    </span>
                    
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Hour
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                    {remainingTime.minutes}
                    </span>
                    
                  </div>
                  <div className=" opacity-75 text-xs mt-3 uppercase">
                    Min
                  </div>
                </div>
                <div className="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div className="text-2xl md:text-3xl font-semibold">
                    <span>
                    {remainingTime.seconds}
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