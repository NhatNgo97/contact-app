import { IoIosArrowBack } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  function handleBackBtnClick() {
    navigate("/");
  }
  return (
    <div className="h-[50px] border-b-2 border-slate-500 flex flex-row justify-between items-center px-4 flex-shrink-0">
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
        <IconButton>
          <BsMoon />
        </IconButton>
      </div>
    </div>
  );
}

export default NavBar;
