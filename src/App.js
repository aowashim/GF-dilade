import "./App.css";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import ForBoys from "./pages/ForBoys";
import ForGirls from "./pages/ForGirls";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/boys",
        element: <ForBoys />,
      },
      {
        path: "/girls",
        element: <ForGirls />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
    { basename: "/GF-dilade" }
  );

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
    // <>
    //   <NavBar />
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Landing />} />
    //       <Route path="/home" element={<Home />} />
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
