import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return <div className={cx("wrapper")}>
    <img src="https://pbs.twimg.com/profile_images/1845628889135259649/VE5XiFgQ_400x400.jpg" alt="Ena" className={cx("avatar")}/>
    <div className={cx("info")}>
        <h4 className={cx("name")}>Shinonome Ena
            {/* <FontAwesomeIcon icon={faCheckCircle}/> */}
        </h4>
        <span className={cx("username")}>Enanan</span>
    </div>
  </div>;
}

export default AccountItem;
