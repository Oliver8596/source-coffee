import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ErrorPage, DataPage, PricePage } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/data",
      element: <DataPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/data/price",
          element: <PricePage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
