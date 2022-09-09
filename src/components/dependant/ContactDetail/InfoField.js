import IconButton from "../../common/IconButton";

function InfoField({ title, content, icon, button }) {
  return (
    <div className="flex justify-between text-center items-center flex-row gap-3 border-2 p-3 rounded-2xl">
      <div className="text-2xl flex justify-center items-center text-blue-400">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold xl:text-xl 2xl:text-2xl md:text-md">
          {content}
        </h3>
        <p className="text-md text-slate-400">{title}</p>
        {button}
      </div>
      <div className="lg:p-0 p-4"></div>
    </div>
  );
}

export default InfoField;
