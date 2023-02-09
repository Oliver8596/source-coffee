import { Link } from "react-router-dom";
import styles from "./BannerTag.module.css";

interface TagProps {
  tagName: string;
  linkString: string /* <Link to={`/contacts/1`}>Your Name</Link> */;
}

export const BannerTag: React.FC<TagProps> = ({ tagName, linkString }) => {
  return (
    <>
      <Link className={styles["tag-link"]} to={linkString}>
        {tagName}
      </Link>
    </>
  );
};
