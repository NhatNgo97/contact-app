import cx from "classnames";
import { useSelector } from "react-redux";
function IconButton({ children, className, ...restProps }) {
  const themeState = useSelector((state) => state.theme.style);

  const btnStyle = `text-${themeState.primaryColor} rounded-full hover:bg-slate-500 h-full aspect-square flex items-center justify-center hover:text-white w-10 h-10 text-2xl`;

  const classes = cx(btnStyle, className);
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

export default IconButton;
