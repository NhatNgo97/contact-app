import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
import { AiFillFilter } from "react-icons/ai";
import IconButton from "../../common/IconButton";

function SearchBar() {
  return (
    <div className=" flex flex-row gap-2 justify-between shadow shadow-slate-500/50 px-4 py-3">
      <div className="relative flex items-center flex-grow">
        <div className="absolute p-2">
          <BsSearch />
        </div>
        <input
          className="p-2 pl-8 rounded-2xl w-full bg-[#f3f3f5]"
          placeholder="Search Contacts"
        />
      </div>
      <IconButton className="">
        <AiOutlinePlus />
      </IconButton>
      <IconButton className="">
        <AiOutlineFilter />
      </IconButton>
    </div>
  );
}

export default SearchBar;
