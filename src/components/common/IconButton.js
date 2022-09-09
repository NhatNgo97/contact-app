import cx from "classnames";
function IconButton({ children, className, ...restProps }) {
  const classes = cx(
    "text-blue-600 rounded-full hover:bg-slate-500 h-full aspect-square flex items-center justify-center hover:text-white w-10 h-10 text-2xl",
    className
  );
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

export default IconButton;
