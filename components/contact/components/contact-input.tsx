import { Input } from "@heroui/input";
import { ChangeEventHandler, ReactNode } from "react";

interface ContactInputProps {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  type: "email" | "text";
  value?: string;
  setValue: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function ContactInput({
  value,
  label,
  placeholder,
  type,
  icon,
  setValue,
}: Readonly<ContactInputProps>) {
  return (
    <Input
      isClearable
      label={label}
      placeholder={placeholder}
      size="lg"
      startContent={icon}
      type={type}
      value={value}
      variant="bordered"
      onChange={setValue}
    />
  );
}
