// src/app/providers/StoreProvider.tsx
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store/store";
import { StateSchema } from "../config/store/StateSchema";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
