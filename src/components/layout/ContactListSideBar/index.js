import ContactList from "./ContactList";
import SearchBar from "./SearchBar";

function ContactListSideBar() {
  return (
    <div className="flex flex-col col-start-1 col-end-4 h-full border-r-2 overflow-auto">
      <SearchBar />
      <ContactList />
    </div>
  );
}

export default ContactListSideBar;
