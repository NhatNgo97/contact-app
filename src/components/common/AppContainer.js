import { useEffect } from "react";
import AppRouter from "../AppRouter";
import ContactListSideBar from "../layout/ContactListSideBar";
import NavBar from "../layout/NavBar";
import { useDispatch } from "react-redux";
import { fetchAsyncContact } from "../../redux/contactSlice";
import { useSelector } from "react-redux";

function AppContainer() {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.style);

  useEffect(() => {
    dispatch(fetchAsyncContact());
  }, []);
  return (
    <section
      className={`h-screen grid grid-rows-layout bg-${themeState.pageBackgroundColor} text-${themeState.secondaryColor}`}
    >
      <NavBar />
      <div className="grid grid-cols-10 row-span-1">
        <ContactListSideBar />
        <AppRouter />
      </div>
    </section>
  );
}

export default AppContainer;
