import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Favourite from "./pages/Favourite";
import Dashboard from "./pages/Dashboard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "favourite",
        element: <Favourite />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
