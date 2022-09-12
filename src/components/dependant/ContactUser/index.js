import Avatar from "../Avatar";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

function ContactUser({ contactId, name, username }) {
  const themeState = useSelector((state) => state.theme.style);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const pathId = path.slice(3 - path.length);

  const selectedStyle = ` bg-${themeState.secondaryBackgroundColor} text-${themeState.primaryColor} border-l-4 border-${themeState.primaryColor} `;

  const classes = cx(
    `p-2 rounded-md h-20 hover:bg-${themeState.secondaryBackgroundColor} flex flex-row gap-2 items-center hover:cursor-pointer transition-all `,
    {
      [selectedStyle]: parseInt(pathId) === contactId,
    }
  );

  function handleClick() {
    navigate(`/c/${contactId}`);
  }
  return (
    <div onClick={handleClick} className={classes}>
      <div className="h-16 w-16 flex-shrink-0 rounded-full">
        <Avatar />
      </div>
      <div className="flex w-full whitespace-nowrap text-ellipsis overflow-hidden flex-col">
        <h1 className="font-bold text-ellipsis overflow-hidden">{name}</h1>
        <p>@{username}</p>
      </div>
    </div>
  );
}

export default ContactUser;
