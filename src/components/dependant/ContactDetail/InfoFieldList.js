import { AiFillTags, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import helper from "../../../helpers";
import InfoField from "./InfoField";

function InfoFieldList({ phone, email, address, website, workplace }) {
  return (
    <div className="flex lg:flex-row flex-col md:justify-around lg:gap-0 gap-6">
      <div className="flex flex-col gap-6 lg:w-[40%] w-full px-4">
        <InfoField title="Phone" content={phone} icon={<AiOutlinePhone />} />
        <InfoField title="Email" content={email} icon={<AiOutlineMail />} />
        <InfoField
          title="Address"
          content={address}
          icon={<BsFillGeoAltFill />}
        />
      </div>
      <div className="flex flex-col gap-6  lg:w-[40%] w-full px-4">
        <InfoField title="Website" content={website} icon={<MdHttp />} />
        <InfoField
          title="Workplace"
          content={workplace}
          icon={<FaUserFriends />}
        />
        <InfoField
          content={<button className="">Add private Tag</button>}
          icon={<AiFillTags />}
        />
      </div>
    </div>
  );
}

export default InfoFieldList;
