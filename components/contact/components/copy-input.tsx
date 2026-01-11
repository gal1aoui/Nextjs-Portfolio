import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { useState } from "react";
import { CopyCheckIcon, CopyIcon } from "../../icons";

export default function CopyInput() {
  const [copied, setCopied] = useState(false);
  const valueToCopy = "achref.gallaoui.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full ">
      <Input
        isReadOnly
        label="Copy Email"
        variant="bordered"
        defaultValue={valueToCopy}
        labelPlacement="outside"
        classNames={{
          inputWrapper: "hover:border-primary transition-colors duration-200",
        }}
        endContent={
          <Tooltip
            content="Copied!"
            isOpen={copied}
            color="foreground"
            placement="top"
            showArrow
            closeDelay={0}
          >
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={handleCopy}
              className="min-w-unit-8 w-8 h-8"
            >
              {copied ? (
                <CopyCheckIcon
                  className="text-foreground transition-all scale-110"
                  size={16}
                />
              ) : (
                <CopyIcon className="text-default-400" size={16} />
              )}
            </Button>
          </Tooltip>
        }
      />
    </div>
  );
}
