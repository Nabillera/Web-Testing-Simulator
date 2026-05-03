export function AccountInfoSection() {
  return (
    <div className="font-inconsolata flex flex-col gap-y-[15px] p-[15px] border-b-[#D9D9D9] border-b-2">
      <span className="font-bold text-[28px]">Account Information</span>
      <div className="p-[7px]">
        <div className="flex items-center justify-between">
          <span className="text-[22px]">Email address</span>
          <span className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50">
            Edit
          </span>
        </div>
        <span className="text-[#606060]">mcosta@kanudos.com</span>
      </div>
      <div className="p-[7px]">
        <div className="flex items-center justify-between">
          <span className="text-[22px]">Phone number</span>
          <span className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50">
            Edit
          </span>
        </div>
        <span className="text-[#606060]">+995 555 22 33 44</span>
      </div>
      <div className="p-[7px]">
        <div className="flex items-center justify-between">
          <span className="text-[22px]">Password</span>
          <span className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50">
            Edit
          </span>
        </div>
        <span className="text-[#606060]">*********</span>
      </div>
      <div className="p-[7px]">
        <div className="flex items-center justify-between">
          <span className="text-[22px]">Preference</span>
          <span className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50">
            Edit
          </span>
        </div>
        <span className="text-[#606060]">Watermelon</span>
      </div>
    </div>
  );
}
