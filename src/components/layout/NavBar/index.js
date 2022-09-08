import { IoIosArrowBack } from "react-icons/io";
import { BsMoon } from "react-icons/bs";

function NavBar() {
  return (
    <div className="h-[50px] border-b-2 border-slate-500 flex flex-row justify-between items-center px-4">
      <div>
        <button>
          <IoIosArrowBack />
        </button>
      </div>
      <div>
        <h2>IContacts</h2>
      </div>
      <div>
        <button>
          <BsMoon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
