import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { cartReducer } from "@/enteties/cart";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    cart: cartReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      });
    },
  });

  store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart.items));
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
