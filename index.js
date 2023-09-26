import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ProfileClass from "./src/components/ProfileClass";
import Cart from "./src/components/Cart";
//import Instamart from "./src/components/Instamart";
const Instamart = lazy(() => import("./src/components/Instamart"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <ProfileClass /> }],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
