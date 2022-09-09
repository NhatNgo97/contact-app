import ContactUser from "../../dependant/ContactUser";
import { useSelector } from "react-redux";
import ContactUserSkeleton from "../../dependant/ContactUser/ContactUserSkeleton";

function ContactList() {
  const contactState = useSelector((state) => state.contact);
  console.log(contactState);
  return (
    <div className="flex flex-col p-2 grow-0 overflow-y-scroll">
      {contactState.status !== "succeed"
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <ContactUserSkeleton key={item} />;
          })
        : contactState.contactList.map((item) => {
            return (
              <ContactUser
                key={item.id}
                contactId={item.id}
                name={item.name}
                username={item.username}
              />
            );
          })}
    </div>
  );
}

export default ContactList;
