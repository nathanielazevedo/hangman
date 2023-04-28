import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Challenge from "./Challenge";
import Leaderboard from "./Leaderboard";
import Play from "./Play";
import PlayChallenge from "./PlayChallenge";
import FourOFour from "./FourOFour";
import BadWord from "./BadWord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <BadWord />,
  },
  {
    path: "challenge",
    element: <Challenge />,
    errorElement: <BadWord />,
  },
  {
    path: "challenge/:text",
    element: <PlayChallenge />,
    errorElement: <BadWord />,
  },
  {
    path: "leaderboard",
    element: <Leaderboard />,
    errorElement: <BadWord />,
  },
  {
    path: "play/:category",
    element: <Play />,
    errorElement: <BadWord />,
  },
  {
    path: "play/:id",
    element: <Play />,
    errorElement: <BadWord />,
  },
  {
    path: "*",
    element: <FourOFour />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
