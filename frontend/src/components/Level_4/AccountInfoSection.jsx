import { useState } from "react";
import { AccountInfoItem } from "./AccountInfoItem";

export function AccountInfoSection() {
  const [editingField, setEditingField] = useState(null);
  const [fieldValues, setFieldValues] = useState({
    email: "mcosta@kanudos.com",
    phone: "+995 555223344",
    password: "********",
    preference: "Watermelon",
  });
  const [tempValue, setTempValue] = useState("");

  const handleSetEditingField = (field) => {
    setEditingField(field);
  };

  const handleSetTempValue = (value) => {
    setTempValue(value);
  };

  return (
    <div className="font-inconsolata flex flex-col gap-y-[15px] p-[15px] border-b-[#D9D9D9] border-b-2">
      <span className="font-bold text-[28px]">Account Information</span>
      <AccountInfoItem
        label={"Email address"}
        field="email"
        fieldValue={fieldValues.email}
        tempValue={tempValue}
        editingField={editingField}
        onSetEditingField={handleSetEditingField}
        onSetTempValue={handleSetTempValue}
      />
      <AccountInfoItem
        label={"Phone number"}
        field="phone"
        fieldValue={fieldValues.email}
        tempValue={tempValue}
        editingField={editingField}
        onSetEditingField={handleSetEditingField}
        onSetTempValue={handleSetTempValue}
      />
      <AccountInfoItem
        label={"Password"}
        field="password"
        fieldValue={fieldValues.email}
        tempValue={tempValue}
        editingField={editingField}
        onSetEditingField={handleSetEditingField}
        onSetTempValue={handleSetTempValue}
      />
      <AccountInfoItem
        label={"Preference"}
        field="preference"
        fieldValue={fieldValues.email}
        tempValue={tempValue}
        editingField={editingField}
        onSetEditingField={handleSetEditingField}
        onSetTempValue={handleSetTempValue}
      />
    </div>
  );
}
