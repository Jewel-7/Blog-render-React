import styles from "../styles/Home.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles["footer-back"]}>
      <p className={styles["last-con"]}>
        Privacy Backend Terms of Use Copyright © 2020 Jewel Simon. All Rights
        Reserved
      </p>
      <br />
      <div className={styles["icon"]}>
        <a href="https://www.instagram.com/">
          {" "}
          <FaInstagram className={styles["insta"]} />
        </a>
        <a href="https://www.snapchat.com/l/en-gb/">
          {" "}
          <FaSnapchat className={styles["snap"]} />
        </a>
        <a href="https://www.facebook.com/">
          {" "}
          <FaFacebookF className={styles["face"]} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
