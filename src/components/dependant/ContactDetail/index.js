import { BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import Avatar from "../Avatar";
import InfoField from "./InfoField";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdHttp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";
import helper from "../../../helpers";
import { useSelector } from "react-redux";

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
        <div className="flex lg:flex-row flex-col md:justify-around lg:gap-0 gap-6">
          <div className="flex flex-col gap-6 lg:w-[40%] w-full px-4">
            <InfoField
              title="Phone"
              content={helper.formatPhoneNumber(contact.phone.slice(0, 14))}
              icon={<AiOutlinePhone />}
            />
            <InfoField
              title="Email"
              content={contact.email}
              icon={<AiOutlineMail />}
            />
            <InfoField
              title="Address"
              content={Object.values(contact.address).slice(0, 4).join(", ")}
              icon={<BsFillGeoAltFill />}
            />
          </div>
          <div className="flex flex-col gap-6  lg:w-[40%] w-full px-4">
            <InfoField
              title="Website"
              content={contact.website}
              icon={<MdHttp />}
            />
            <InfoField
              title="Workplace"
              content={contact.company.name}
              icon={<FaUserFriends />}
            />
            <InfoField
              content={<button className="">Add private Tag</button>}
              icon={<AiFillTags />}
            />
          </div>
        </div>
        <div className="flex justify-center p-4 border-2 self-center w-[50%] rounded-xl ">
          <iframe
            title="home"
            width="100%"
            height="250px"
            src={`//maps.google.com/maps?q=${contact.address.geo.lat},${contact.address.geo.lng}&z=15&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
