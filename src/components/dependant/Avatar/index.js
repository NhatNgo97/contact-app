import DefaultAvatar from "../../../assets/defaultAvatar.png";

function Avatar({ img }) {
  return (
    <div className="w-full h-full">
      <img className="rounded-full" src={DefaultAvatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
