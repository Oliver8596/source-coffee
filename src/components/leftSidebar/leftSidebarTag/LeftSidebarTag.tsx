import { link } from "fs";
import { Link } from "react-router-dom";
import styles from "./LeftSidebarTag.module.css";

interface LeftSidebarTagProps {
  name: string;
  linkString: string;
}

export const LeftSidebarTag: React.FC<LeftSidebarTagProps> = ({
  name,
  linkString,
}) => {
  return (
    <>
      <Link to={linkString} className={styles["tag"]}>
        {name}
      </Link>
    </>
  );
};
