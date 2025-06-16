import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartDrawer from "./components/CartDrawer";
const Grocery = React.lazy(() => import("./components/Grocery"));




function AppLayout() {
    return (
        <Provider store={appStore}> 
        <div className="app-layout">
            <Header />
            <CartDrawer />
            <Outlet />
        </div>
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
                errorElement: <ErrorPage />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <ErrorPage />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />,
                errorElement: <ErrorPage />
            },
            {
                path: "/grocery",
                element: <React.Suspense fallback={<h2>Loading...</h2>}><Grocery /></React.Suspense>,
                errorElement: <ErrorPage />
            },
            
        ],
        errorElement: <ErrorPage />

    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);