import { useLocation } from "react-router-dom";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import cx from "classnames";
import { useSelector } from "react-redux";

function ContactListSideBar() {
  const location = useLocation();
  const themeState = useSelector((state) => state.theme.style);
  const path = location.pathname;
  const classes = cx(
    `flex-col h-full border-r-2 overflow-auto border-${themeState.primaryColor}`,
    {
      "col-start-1 md:col-end-4 col-end-11": path === "/",
      "md:col-start-1 md:col-end-4 md:flex hidden": path !== "/",
    }
  );
  return (
    <div className={classes}>
      <SearchBar />
      <ContactList />
    </div>
  );
}

export default ContactListSideBar;
