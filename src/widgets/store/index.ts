import { store } from "./api/store";
import type { RootState, AppDispatch } from "./api/types";
import { useAppDispatch, useAppSelector } from "./api/types";

export { store, useAppDispatch, useAppSelector };
export type { RootState, AppDispatch };
