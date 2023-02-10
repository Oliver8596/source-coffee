import { Banner } from "../../components";
import styles from "./HomePage.module.css";
import bigLogo from "../../assets/source-coffee-logo.svg";
import { useState } from "react";

export const HomePage: React.FC = () => {
  const [ani, setAni] = useState(false);

  function handleMouseEnter() {
    console.log("233333");
    setAni(true);
  }
  function handleMouseLeave() {
    setAni(false);
  }

  return (
    <>
      <Banner />
      <div className={styles["main-container"]}>
        <div className={styles["sub-container"]}>
          <img
            className={styles["big-logo"]}
            src={bigLogo}
            alt="big-green-spinning-logo"
          />
          <h1 className={styles["homepage-title"]}>
            Explore Everything about Coffee
          </h1>
          <div className={styles["homepage-description"]}>
            From coffee berries to a cup of fresh coffee, explore the life of a
            coffee bean at Source Coffee
          </div>
          <button
            className={styles["start-button"]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={
                ani
                  ? `${styles["start-button-11"]} ${styles["start-button-1"]}`
                  : ` ${styles["start-button-1"]}`
              }
            ></div>
            <div
              className={
                ani
                  ? `${styles["start-button-22"]} ${styles["start-button-2"]}`
                  : ` ${styles["start-button-2"]}`
              }
            ></div>
            <div
              className={
                ani
                  ? `${styles["start-button-33"]} ${styles["start-button-3"]}`
                  : ` ${styles["start-button-3"]}`
              }
            ></div>
            <div className={styles["start-button-4"]}>
              Start from coffee origins
            </div>
          </button>
        </div>
        <div>New feature</div>
      </div>
    </>
  );
};
