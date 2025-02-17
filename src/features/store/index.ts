import { store } from "./api/store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };

export type { RootState, AppDispatch };
