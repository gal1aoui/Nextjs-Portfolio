"use client";

import { ModalRoot } from "@/components/modal-root";
import { createContext, type ReactNode, useCallback, useContext, useState } from "react";

export type ModalState = {
  title?: string;
  render?: (args: {
    close: () => void;
  }) => ReactNode;
};

type ModalContextType = {
  openModal: <T>(config: {
    title?: string;
    render: (args: { close: () => void }) => ReactNode;
  }) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ModalState>({});

  const openModal = useCallback((config: ModalState) => {
    setState(config);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalRoot open={open} state={state} close={closeModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
