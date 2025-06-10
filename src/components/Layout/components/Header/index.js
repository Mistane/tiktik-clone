import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img
            src="https://static.zerochan.net/Shinonome.Ena.full.4318334.jpg"
            alt="ena"
          />
        </div>
        <div className={cx("search")}>
          <input placeholder="Shinonome Ena" spellCheck={false} />
          <button className={cx("clear")}>
            X
          </button>
          <span className={cx("spinner")}></span>
          <button className={cx("search-btn")}>
            O
          </button>
        </div>
        <div className={cx("actions")}>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
