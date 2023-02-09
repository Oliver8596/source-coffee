import styles from "./Banner.module.css";
import logo from "../../assets/source-coffee-logo.svg";
import { BannerTag } from "../../components";
import { Link } from "react-router-dom";

export const Banner: React.FC = () => {
  return (
    <>
      <div className={styles["container"]}>
        <Link className={styles["logo-link"]} to="/">
          <img
            src={logo}
            alt="a_green_logo"
            className={styles["website-logo"]}
          />
          <div className={styles["website-name"]}>Source Coffee</div>
        </Link>
        <div></div>
        <BannerTag tagName="Origins" linkString="/origins" />
        <BannerTag tagName="Preprocessing" linkString="/preprocessing" />
        <BannerTag tagName="Roasting" linkString="/contacts/1" />
        <BannerTag tagName="Serving" linkString="/contacts/1" />
        <BannerTag tagName="Data" linkString="/data" />
        <BannerTag tagName="Shop" linkString="/contacts/1" />
        <BannerTag tagName="SignIn" linkString="/contacts/1" />
        <BannerTag tagName="23333" linkString="/contacts/1" />
      </div>
    </>
  );
};
