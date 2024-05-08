import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-05-22T09:00:00').getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    } else {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      };
    }
  };

  // Initialize state with calculated time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Ensure useEffect runs only once

  return (
    <div className="countdown flex mt-10 mb-10">
  <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
    <div className="countdown-item relative">
      <img src="/assets/tile.png" alt="Tile" className="w-36 h-36 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-8xl text-center mt-4 shadow-lg">
        <span>{timeLeft.days}</span>
        <div className="text-amber-100 text-2xl mb-12 shadow-lg">Days</div>
      </div>
    </div>
  </div>
  <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
    <div className="countdown-item relative">
      <img src="/assets/tile.png" alt="Tile" className="w-36 h-36 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-8xl text-center mt-4 shadow-lg">
        <span>{timeLeft.hours}</span>
        <div className="text-amber-100 text-2xl mb-12 shadow-lg">Hours</div>
      </div>
    </div>
  </div>
  <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
    <div className="countdown-item relative">
      <img src="/assets/tile.png" alt="Tile" className="w-36 h-36 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-8xl text-center mt-4 shadow-lg">
        <span>{timeLeft.minutes}</span>
        <div className="text-amber-100 text-2xl mb-12 shadow-lg">Minutes</div>
      </div>
    </div>
  </div>
  <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
    <div className="countdown-item relative">
      <img src="/assets/tile.png" alt="Tile" className="w-36 h-36 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-8xl text-center mt-4 shadow-lg">
        <span>{timeLeft.seconds}</span>
        <div className="text-amber-100 text-2xl mb-12 shadow-lg">Seconds</div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Countdown;
