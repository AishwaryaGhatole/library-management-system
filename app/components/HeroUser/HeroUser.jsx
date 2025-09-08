"use client"
import React from "react";
import styles from "./HeroUser.module.scss"

const HeroUser = () => {
  const [dateTime, setDateTime] = React.useState(new Date());

  React.useEffect(() => {
    // update every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  // formatting
  const day = dateTime.toLocaleDateString("en-US", { weekday: "long" });
  const date = dateTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
      <div className={styles.heroUserWrapper}>
        <div className={styles.userData}>
          <p>
            Hello, <span className={styles.userName}>User!</span>
          </p>
        </div>
        <div className={styles.dateDetails}>
          <p className={styles.currentDate}>{date}</p>
          <p className={styles.currentDay}>{day}</p>
          <p className={styles.currentTime}>{time}</p>
      </div>
      </div>
  );
};

export default HeroUser;
