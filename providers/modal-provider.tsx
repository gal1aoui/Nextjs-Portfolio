"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { ModalRoot } from "@/components/modal-root";

export type ModalState = {
  title?: string;
  render?: (args: { close: () => void }) => ReactNode;
};

type ModalContextType = {
  openModal: (config: {
    title?: string;
    render: (args: { close: () => void }) => ReactNode;
  }) => void;
  closeModal: () => void;
  isOpen: boolean;
  isDrawerOpen: boolean;
  onTriggerDrawer: () => void;
  isQAOpen: boolean;
  onTriggerQA: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [qaOpen, setQAOpen] = useState(false);
  const [state, setState] = useState<ModalState>({});

  const openModal = useCallback((config: ModalState) => {
    setState(config);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const onTriggerQA = useCallback(() => {
    setQAOpen((prev) => !prev);
  }, []);

  const onTriggerDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isOpen: open,
        isDrawerOpen: drawerOpen,
        isQAOpen: qaOpen,
        openModal,
        closeModal,
        onTriggerDrawer,
        onTriggerQA,
      }}
    >
      {children}
      <ModalRoot close={closeModal} open={open} state={state} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);

  if (!ctx) throw new Error("useModal must be used inside ModalProvider");

  return ctx;
}
