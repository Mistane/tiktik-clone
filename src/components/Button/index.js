import classNames from "classnames/bind";
import {Link} from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  disabled = false,
  rounded = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  className,
  onClick,
  children,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  

  if(disabled){
    Object.keys(props).forEach((key) => {
        if(key.startsWith("on") && typeof props[key] === 'function'){
            delete props[key];
        }
    })
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className] : className,
    primary,
    outline,
    text,
    small,
    large,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
