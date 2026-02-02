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
        classNames={{
          inputWrapper: "hover:border-primary transition-colors duration-200",
        }}
        defaultValue={valueToCopy}
        endContent={
          <Tooltip
            showArrow
            closeDelay={0}
            color="foreground"
            content="Copied!"
            isOpen={copied}
            placement="top"
          >
            <Button
              isIconOnly
              className="min-w-unit-8 w-8 h-8"
              size="sm"
              variant="light"
              onPress={handleCopy}
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
        label="Copy Email"
        labelPlacement="outside"
        variant="bordered"
      />
    </div>
  );
}
