import { EKeys } from "./types";

export const keysArray = Object.values(EKeys);

export type TModalState = {
  [K in (typeof keysArray)[number]]?: { step: number } | { text: string };
};

interface IInitialState {
  modalState: TModalState | null;
}

export const initialState: IInitialState = {
  modalState: null,
  // modalState: { info: { text: "Привет" } },
};
