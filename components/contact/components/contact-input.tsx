import { Input } from "@heroui/input";
import { ChangeEventHandler, ReactNode } from "react";

interface ContactInputProps {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  type: "email" | "text";
  value?: string;
  setValue: ChangeEventHandler<HTMLInputElement> | undefined;
  errorMessage?: string;
  isInvalid?: boolean;
}

export default function ContactInput({
  value,
  label,
  placeholder,
  type,
  icon,
  setValue,
  errorMessage,
  isInvalid,
}: Readonly<ContactInputProps>) {
  return (
    <Input
      isClearable
      errorMessage={errorMessage}
      isInvalid={isInvalid}
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
