import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore, { persistor } from "./utils/appStore"; // <-- update
import CartDrawer from "./components/CartDrawer";
import { PersistGate } from "redux-persist/integration/react"; // <-- add this
const Grocery = React.lazy(() => import("./components/Grocery"));

import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-layout">
          <Toaster position="top-right" /> {/* ✅ Toast setup */}
          <Header />
          <CartDrawer />
          <Outlet />
        </div>
      </PersistGate>
    </Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/grocery",
        element: (
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </React.Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
