import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";

export function App() {
  return (
    <div className="bg-base-background">
      <CoffeeContextProvider>
        <RouterProvider router={router} />
      </CoffeeContextProvider>
    </div>
  );
}
