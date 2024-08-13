import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
// import Contacts from "./pages/Contacts";
// import AnalyticsDashboard from "./pages/Analytics";

const Contacts = lazy(() => import("./pages/Contacts"));
const Analytics = lazy(() => import("./pages/Analytics"));

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Skeleton height={40} width={200} />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "/analytics",
        element: (
          <Suspense fallback={<Skeleton height={40} width={200} />}>
            <Analytics />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
