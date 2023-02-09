import styles from "./DataPage.module.css";
import { Banner, LeftSidebar } from "../../components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const DataPage: React.FC = () => {
  return (
    <>
      <Banner />
      <LeftSidebar />
      <div className={styles["container"]}>
        <div className={styles["outlet-div"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
