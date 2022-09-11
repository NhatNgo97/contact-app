import { useSelector } from "react-redux";
import cx from "clas";

function ThemeStyleText({ type, children, ...restProps }) {
  const themeState = useSelector((state) => state.theme.style);
  const primaryColor = `text-${themeState.primaryColor}`;
  const secondaryColor = `text-${themeState.secondaryColor}`;
  const classes = cx({
    [primaryColor]: type === "primary" || !type,
    [secondaryColor]: type === "secondary",
  });
  return <div className={classes}>{children}</div>;
}

export default ThemeStyleText;
