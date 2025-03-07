"use client";
import { AppStore, makeStore } from "@libs/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  if (!storeRef.current?.__persistor) {
    return <p>Loading...</p>;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={<p>Loading...</p>}
        persistor={storeRef.current.__persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
