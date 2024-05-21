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
    <div className="countdown my-6 flex justify-center md:my-10">
      <div className="countdown-item-wrapper relative mr-6 flex flex-col items-center">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="h-16 w-16 object-cover sm:h-32 sm:w-32"
          />
          <div className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl text-amber-100 sm:text-5xl md:text-7xl">
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
              className="mb-10 text-xs text-amber-100 shadow-lg sm:text-lg  md:text-xl"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Days
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-item-wrapper relative mr-6 flex flex-col items-center">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="h-16 w-16 object-cover sm:h-32 sm:w-32"
          />
          <div className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl text-amber-100 sm:text-5xl md:text-7xl">
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
              className="mb-10 text-xs text-amber-100 shadow-lg sm:text-lg  md:text-xl"
              style={{ position: "relative", top: "-0.4rem" }}
            >
              Hours
            </div>
          </div>
        </div>
      </div>
      <div className="countdown-item-wrapper relative mr-6 flex flex-col items-center">
        <div className="countdown-item relative">
          <img
            src="/assets/tile.png"
            alt="Tile"
            className="h-16 w-16 object-cover sm:h-32 sm:w-32"
          />
          <div className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl text-amber-100 sm:text-5xl md:text-7xl">
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
              className="mb-10 text-xs text-amber-100 shadow-lg sm:text-lg  md:text-xl"
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
            className="h-16 w-16 object-cover sm:h-32 sm:w-32"
          />
          <div className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl text-amber-100 sm:text-5xl md:text-7xl">
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
              className="mb-10 text-xs text-amber-100 shadow-lg sm:text-lg md:text-lg"
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
