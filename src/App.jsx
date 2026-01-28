import { Outlet } from "react-router";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistor } from "./configureStore";
import React, { Suspense } from "react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={"loading"}>
            <Outlet />
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
