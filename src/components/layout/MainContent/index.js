import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import helper from "../../../helpers";
import ContactDetail from "../../dependant/ContactDetail";
import { ReactComponent as LoadingSpinner } from "../../../assets/loadingSpinner.svg";

function MainContent() {
  const { id } = useParams();
  const contactState = useSelector((state) => state.contact);
  let contactDetail = {};
  if (contactState.status === "succeed") {
    contactDetail = helper.objectMappingContactList(contactState.contactList)[
      `${id}`
    ];
  }

  return (
    <div className="flex md:col-span-7 col-span-10 p-4 overflow-auto ">
      {!id ? (
        <div className="flex w-full bg-gray-200 rounded-xl justify-center items-center">
          Select your contact to browse infomation.
        </div>
      ) : contactState.status !== "succeed" ? (
        <div className="flex w-full  justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <ContactDetail contact={contactDetail} />
      )}
    </div>
  );
}

export default MainContent;
