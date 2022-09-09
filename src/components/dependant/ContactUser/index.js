import Avatar from "../Avatar";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ContactUser({ id, name, email }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.contact);
  function handleClick() {
    navigate(`/c/${id}`);
  }
  return (
    <div
      onClick={handleClick}
      className="p-2 rounded-md h-20 hover:bg-[#f5f5f5] flex flex-row gap-2 items-center hover:cursor-pointer"
    >
      <div className="h-16 w-16 flex-shrink-0 rounded-full">
        <Avatar />
      </div>
      <div className="flex w-full whitespace-nowrap text-ellipsis overflow-hidden flex-col">
        <h1 className="font-bold text-ellipsis overflow-hidden">{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default ContactUser;
