import { lazy } from "react";

export const HomeAsyncPage = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error simulation
      setTimeout(() => resolve(import("./HomePage")), 2000);
    }),
);
