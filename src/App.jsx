import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import History from "./pages/History";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <History />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
