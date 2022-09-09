import { useEffect } from "react";
import AppRouter from "../AppRouter";
import ContactListSideBar from "../layout/ContactListSideBar";
import NavBar from "../layout/NavBar";
import { useDispatch } from "react-redux";
import { fetchAsyncContact } from "../../redux/contactSlice";

function AppContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncContact());
  }, []);
  return (
    <section className="bg-white h-screen grid grid-rows-layout">
      <NavBar />
      <div className="grid grid-cols-10 row-span-1">
        <ContactListSideBar />
        <AppRouter />
      </div>
    </section>
  );
}

export default AppContainer;
