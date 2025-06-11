import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {useState, useEffect} from "react";

import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img
            src="https://static.zerochan.net/Shinonome.Ena.full.4318334.jpg"
            alt="ena"
          />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>
                  Shinonome Ena
                </h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Shinonome Ena" spellCheck={false} />
            <button className={cx("clear")}>X</button>
            <span className={cx("spinner")}></span>

            <button className={cx("search-btn")}>O</button>
          </div>
        </Tippy>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
