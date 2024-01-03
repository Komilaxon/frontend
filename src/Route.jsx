import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultComponents, MainHome } from "./pages/home/main-home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { PasswordRecovery } from "./pages/password-recovery";
import { PasswordRecovery2 } from "./pages/password-recovery";
import { MainStock } from "./pages/stock/main-stock";
import { MainStock2 } from "./pages/stock2/main.stock2";
import { MainProfile } from "./pages/profile/main.profile";
import { Search } from "./pages/search";
import Chat from "./pages/chat/Chat";
import { Wallet } from "./pages/wallet";
import { PurchaseHistory } from "./pages/purchase-history";
import { Order } from "./pages/order";
import { FavoriteWorks } from "./pages/favorite-works";
import CreateWorkTabs from "./pages/work/components/Create.Work.Tabs";
import { Work } from "./pages/work";
import { MainWork } from "./pages/work/main-work";
import { AboutUser } from "./pages/profile/about-user/about.user";

const Route = () => {
  const [token, setToken] = React.useState(localStorage.getItem("token") || "");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      children: [
        { path: "/", element: <DefaultComponents /> },
        {
          path: "/user",
          element: <MainProfile token={token} setToken={setToken} />,
        },
        { path: "/about_user", element: <AboutUser /> },
        { path: "/stock", element: <MainStock /> },
        { path: "/stock2", element: <MainStock2 /> },
        { path: "/chat", element: <Chat /> },
        { path: "/wallet", element: <Wallet /> },
        { path: "/purchase", element: <PurchaseHistory /> },
        { path: "/order", element: <Order /> },
        { path: "/favorite-works", element: <FavoriteWorks /> },
        { path: "/create_work", element: <CreateWorkTabs /> },
        { path: "/work", element: <MainWork /> },
        { path: "/works", element: <Work /> },
      ],
    },
    { path: "/login", element: <Login token={token} setToken={setToken} /> },
    {
      path: "/register",
      element: <Register token={token} setToken={setToken} />,
    },
    { path: "/recovery", element: <PasswordRecovery /> },
    { path: "/recovery2", element: <PasswordRecovery2 /> },
    { path: "/search", element: <Search /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default Route;
