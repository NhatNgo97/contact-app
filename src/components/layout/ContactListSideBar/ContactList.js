import ContactUser from "../../dependant/ContactUser";
import { useSelector } from "react-redux";
import ContactUserSkeleton from "../../dependant/ContactUser/ContactUserSkeleton";
import {
  remainingContactListSelector,
  searchFilterSelector,
} from "../../../redux/selectors";

function ContactList() {
  const contactState = useSelector((state) => state.contact);
  const remainingContactList = useSelector(remainingContactListSelector);
  console.log(remainingContactList);
  return (
    <div className="flex flex-col p-2 flex-1">
      {contactState.status !== "succeed"
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <ContactUserSkeleton key={item} />;
          })
        : remainingContactList.map((item) => {
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
