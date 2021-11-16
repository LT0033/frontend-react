import React, { useEffect, useState, Fragment } from "react";
import "../css/CountDown.css";

export default function CountDown() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    // const countDownDate = new Date("November 22,2021").getTime();
    const countDownDate = new Date("November 22,2021 12:00:00 EST").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  const countDownStyle = "py-2 rounded text-center";

  const countDownDotStyle = "mx-2 my-auto";

  return (
    <div className="text-light countDownContainer bg-transparent text-center">
      <p className="pt-2">Start Minting After</p>
      <div className="pb-2 d-flex m-auto  justify-content-center bg-transparent">
        <span className={countDownStyle}>
          <h2>{timerDays}</h2>
          <p>Days</p>
        </span>
        <span className={countDownDotStyle}>
          <h1>:</h1>
        </span>
        <span className={countDownStyle}>
          <h2>{timerHours}</h2>
          <p>Hours</p>
        </span>
        <span className={countDownDotStyle}>
          <h1>:</h1>
        </span>
        <span className={countDownStyle}>
          <h2>{timerMinutes}</h2>
          <p>Minutes</p>
        </span>
        <span className={countDownDotStyle}>
          <h1>:</h1>
        </span>
        <span className={countDownStyle}>
          <h2>{timerSeconds}</h2>
          <p>Secounds</p>
        </span>
      </div>
    </div>
  );
}
