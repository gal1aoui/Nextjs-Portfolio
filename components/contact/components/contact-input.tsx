import { Input } from "@heroui/input";
import { ChangeEventHandler, ReactNode } from "react";

interface ContactInputProps {
    label?: string;
    placeholder?: string;
    icon?: ReactNode;
    type: "email" | "text";
    value?: string;
    setValue: ChangeEventHandler<HTMLInputElement> | undefined
}

export default function ContactInput({value, label, placeholder, type, icon, setValue}: Readonly<ContactInputProps>) {
  return (
    <Input
      isClearable
      variant="bordered"
      label={label}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      type={type}
      startContent={icon}
      size="lg"
    />
  );
}
