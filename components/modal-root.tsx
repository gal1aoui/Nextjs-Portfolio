"use client";

import { ModalState } from "@/providers/modal-provider";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";

interface ModalRootProps {
  open: boolean;
  state: ModalState;
  close: () => void;
}

export function ModalRoot({ open, state, close }: ModalRootProps) {
  return (
    <Modal isOpen={open} onOpenChange={(v) => !v && close()} backdrop="blur">
      <ModalContent className="max-h-[100vh] max-w-[100vw] w-fit h-fit overflow-auto">
        {state.title && <ModalHeader className="pb-0">{state.title}</ModalHeader>}
        <ModalBody>
          {state.render?.({
            close
          })}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
