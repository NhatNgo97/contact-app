import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
import IconButton from "../../common/IconButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactSlice from "../../../redux/contactSlice";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.style);

  useEffect(() => {
    dispatch(contactSlice.actions.searchFilter(search));
  }, [search]);

  return (
    <div
      className={`flex flex-row gap-2 justify-between shadow shadow-slate-500/50 px-4 py-3 text-${themeState.secondaryColor}`}
    >
      <div className="relative flex items-center flex-grow">
        <div className="absolute p-2">
          <BsSearch />
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`p-2 pl-8 rounded-2xl w-full bg-${themeState.backgroundColor}`}
          placeholder="Search Contact Name"
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
