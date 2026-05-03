import { Toggle } from "./Toggle";

export function NotificationsSection({ toggleOn, onToggle }) {
  return (
    <div className="font-inconsolata flex flex-col gap-y-[20px] p-[15px] border-b-[#D9D9D9] border-b-2">
      <div className="flex justify-between items-center">
        <span className="text-[28px] font-bold">Notifications</span>
        <Toggle
          type="general"
          isActive={toggleOn.general}
          onToggle={onToggle}
        />
      </div>
      <div className="flex justify-between items-center p-[7px]">
        <span className="text-[22px] ">Push notifications</span>
        <Toggle type="push" isActive={toggleOn.push} onToggle={onToggle} />
      </div>
      <div className="flex justify-between items-center p-[7px]">
        <span className="text-[22px]">SMS notifications</span>
        <Toggle type="sms" isActive={toggleOn.sms} onToggle={onToggle} />
      </div>
      <div className="flex justify-between items-center p-[7px]">
        <span className="text-[22px] ">Email notifications</span>
        <Toggle type="email" isActive={toggleOn.email} onToggle={onToggle} />
      </div>
    </div>
  );
}
