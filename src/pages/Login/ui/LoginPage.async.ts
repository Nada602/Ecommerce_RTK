import { lazy } from "react";

export const LoginAsyncPage = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error simulation
      setTimeout(() => resolve(import("./LoginPage")), 2000);
    }),
);
