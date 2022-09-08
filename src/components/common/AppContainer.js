import AppRouter from "../AppRouter";
import ContactList from "../layout/ContactList";
import NavBar from "../layout/NavBar";

function AppContainer() {
  return (
    <div className="bg-white">
      <NavBar />
      <div>
        <ContactList />
        <AppRouter />
      </div>
    </div>
  );
}

export default AppContainer;
