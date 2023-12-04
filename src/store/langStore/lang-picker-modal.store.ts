import { create } from 'zustand';

type LangModalState = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

export const useLangModal = create<LangModalState>((set) => ({
  visible: false,
  open() {
    set({ visible: true });
  },
  close() {
    set({ visible: false });
  },
}));
