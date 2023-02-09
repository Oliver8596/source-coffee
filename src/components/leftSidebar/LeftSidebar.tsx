import React from "react";
import { LeftSidebarTag } from "./leftSidebarTag";
import styles from "./LeftSidebar.module.css";

export const LeftSidebar: React.FC = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div></div>
        <LeftSidebarTag name="Coffee Price" linkString="./price" />
        <LeftSidebarTag name="Average Consume" linkString="./price" />
        <LeftSidebarTag name="Three" linkString="./price" />
        <LeftSidebarTag name="Four" linkString="./price" />
        <LeftSidebarTag name="Five" linkString="./price" />
        <LeftSidebarTag name="Six Six" linkString="./price" />
      </div>
    </>
  );
};
