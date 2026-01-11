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
      <ModalContent className="max-w-[50vw] max-h-[90vh] overflow-auto">
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
