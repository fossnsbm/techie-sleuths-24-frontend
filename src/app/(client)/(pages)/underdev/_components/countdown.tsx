import React, { useEffect, useState } from "react";

const Countdown = () => {
  // Screen size state
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 632);
    };

    // Check if window is defined (i.e., we're in a browser)
    if (typeof window !== "undefined") {
      // Set initial state
      checkScreenSize();
      // Add event listener
      window.addEventListener("resize", checkScreenSize);
    }

    return () => {
      // Remove event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
      }
    };
  }, []);

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-05-22T09:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
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
    <div className="countdown justify-center flex my-6 md:my-10">
      <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="w-16 h-16 sm:w-32 sm:h-32 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-3xl sm:text-5xl md:text-7xl text-center mt-4">
            <span
              style={{
                position: "relative",
                bottom: "-0.1rem",
                textShadow: isSmallScreen
                  ? "3px 3px #78350F"
                  : "6px 6px #78350F",
              }}
            >
              {timeLeft.days}
            </span>
            <div
              className="text-amber-100 text-xs sm:text-lg md:text-xl mb-10  shadow-lg"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Days
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="w-16 h-16 sm:w-32 sm:h-32 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-3xl sm:text-5xl md:text-7xl text-center mt-4">
            <span
              style={{
                position: "relative",
                bottom: "-0.1rem",
                textShadow: isSmallScreen
                  ? "3px 3px #78350F"
                  : "6px 6px #78350F",
              }}
            >
              {timeLeft.hours}
            </span>
            <div
              className="text-amber-100 text-xs sm:text-lg md:text-xl mb-10  shadow-lg"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Hours
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-item-wrapper relative flex flex-col items-center mr-6">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="w-16 h-16 sm:w-32 sm:h-32 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-3xl sm:text-5xl md:text-7xl text-center mt-4">
            <span
              style={{
                position: "relative",
                bottom: "-0.1rem",
                textShadow: isSmallScreen
                  ? "3px 3px #78350F"
                  : "6px 6px #78350F",
              }}
            >
              {timeLeft.minutes}
            </span>
            <div
              className="text-amber-100 text-xs sm:text-lg md:text-xl mb-10  shadow-lg"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Minutes
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-item-wrapper relative flex flex-col items-center">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="w-16 h-16 sm:w-32 sm:h-32 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-3xl sm:text-5xl md:text-7xl text-center mt-4">
            <span
              style={{
                position: "relative",
                bottom: "-0.1rem",
                textShadow: isSmallScreen
                  ? "3px 3px #78350F"
                  : "6px 6px #78350F",
              }}
            >
              {timeLeft.seconds}
            </span>
            <div
              className="text-amber-100 text-xs sm:text-lg md:text-lg mb-10 shadow-lg"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
