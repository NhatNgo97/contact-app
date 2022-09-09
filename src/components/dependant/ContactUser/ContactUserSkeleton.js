function ContactUserSkeleton() {
  return (
    <div className=" animate-pulse p-2 rounded-md h-20 hover:bg-[#f5f5f5] flex flex-row gap-2 items-center hover:cursor-pointer">
      <div className="h-16 w-16 bg-slate-200 rounded-full flex-shrink-0"></div>
      <div className="flex w-full flex-col gap-4">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

export default ContactUserSkeleton;
