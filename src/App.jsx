import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Challenge from "./Challenge";
import Leaderboard from "./Leaderboard";
import Play from "./Play";
import PlayChallenge from "./PlayChallenge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "challenge",
    element: <Challenge />,
  },
  {
    path: "challenge/:text",
    element: <PlayChallenge />,
  },
  {
    path: "leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "play/:difficulty/:category",
    element: <Play />,
  },
  {
    path: "play/:id",
    element: <Play />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
