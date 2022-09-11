import { IoIosArrowBack } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import themeSlice from "../../../redux/themeSlice";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  function handleBackBtnClick() {
    navigate("/");
  }
  function handleDarkModeBtnClick() {
    dispatch(themeSlice.actions.changeTheme());
  }
  return (
    <div className=" h-[50px] border-b-2 border-slate-500 flex flex-row justify-between items-center px-4 flex-shrink-0">
      <div>
        {path !== "/" && (
          <IconButton className="flex md:hidden" onClick={handleBackBtnClick}>
            <IoIosArrowBack />
          </IconButton>
        )}
      </div>
      <div>
        <h2>IContacts</h2>
      </div>
      <div>
        <IconButton onClick={handleDarkModeBtnClick}>
          <BsMoon />
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;
