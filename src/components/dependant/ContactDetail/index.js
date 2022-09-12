import { BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import Avatar from "../Avatar";
import helper from "../../../helpers";
import { useSelector } from "react-redux";
import InfoFieldList from "./InfoFieldList";

function ContactDetail({ contact }) {
  const themeState = useSelector((state) => state.theme.style);

  return (
    <div
      className={`bg-${themeState.backgroundColor} rounded-3xl flex flex-col p-2 w-full flex-grow`}
    >
      <div className="self-end flex gap-2 flex-row">
        <IconButton>
          <BsPencil />
        </IconButton>
        <IconButton>
          <BsThreeDotsVertical />
        </IconButton>
      </div>
      <div className="flex flex-col gap-12">
        <div className="self-center flex flex-col items-center">
          <div className="w-24 h-24">
            <Avatar />
          </div>
          <h1 className="text-3xl">{contact.name}</h1>
          <p className={`text-${themeState.primaryColor}`}>
            @{contact.username}
          </p>
        </div>
        <InfoFieldList
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
          website={contact.website}
          workplace={contact.workplace}
        />
        <div
          className={`flex justify-center p-4 border-2 self-center w-[50%] rounded-xl border-${themeState.primaryColor}`}
        >
          <iframe
            title="home"
            width="100%"
            height="250px"
            src={`//maps.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&z=15&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
