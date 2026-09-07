import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/Home";
import LoginPage from "@/pages/Login/ui/LoginPage";
import { AppRoutes, routePaths } from "@/shared/config";
import NotFoundPage from "@/pages/NotFound/ui/NotFoundPage";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
