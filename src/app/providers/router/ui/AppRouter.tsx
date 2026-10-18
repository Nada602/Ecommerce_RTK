import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import { Spinner } from "@/shared/ui";

export default function AppRouter() {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<Spinner/>}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
