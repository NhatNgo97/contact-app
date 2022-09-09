import { IoIosArrowBack } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import IconButton from "../../common/IconButton";

function NavBar() {
  return (
    <div className="h-[50px] border-b-2 border-slate-500 flex flex-row justify-between items-center px-4 flex-shrink-0">
      <div>
        <IconButton>
          <IoIosArrowBack />
        </IconButton>
      </div>
      <div>
        <h2>IContacts</h2>
      </div>
      <div>
        <IconButton>
          <BsMoon />
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;
